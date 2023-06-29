<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\Plan;
use App\Models\PlanUser;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\User;

class ProfitController extends Controller
{
    //
    public function getusers()
    {
       return PlanUser::where('updated_at', '<=', Carbon::now()->subHours(24))->get()->pluck("id"); //collection of planuser->ids due for profit  $readyusers = 
    }
    
    public function planProfit()
    {
        $planProfits = [];
        $planuserCollection = $this->getusers(); //collection
        $planIds = Planuser::find($planuserCollection)->pluck('plan_id')->toArray(); //Returns planUser plan_ids
        for ($i=0; $i<count($planIds); $i++){
            $profit = Plan::find($planIds[$i])->pluck('profit');
        }
        array_push($planProfits, $profit);
        return $planProfits; //returns plans of each user from the Plan model
    }

    public function CalProfits(): array
    {
        $profits = [];
        $planuserCollection = $this->getusers(); //collection
        // ($profits = PlanUser::find($planuserCollection)->pluck('profit', 'investment')->toArray(); //exiting profit on planuser table
        // $investments = Planuser::find($planuserCollection)->pluck('investment')->toArray();
        // $planProfits = $this->planProfit()->pluck("profit")->toArray();
        // //dd($planProfits);
        // if ($profits != null){
        //     return array_map(function($profits, $planProfits, $investments){
        //         return $profits + ($planProfits * $investments);
        //     }, $profits, $planProfits, $investments);
        // }else {
        //     return array_map(function($planProfits, $investments){
        //         return ($planProfits * $investments);
        //     }, $planProfits, $investments);
        // }
        //dd($planuserCollection);
        //$profits = PlanUser::where('user_id', auth()->user()->id)->get()->pluck('profit')->sum();
        if ($planuserCollection != null) {
            for ($i = 0; $i < $planuserCollection->count(); $i++) {
                $investment = PlanUser::find($planuserCollection[$i])->value('investment');
                $profit =  PlanUser::find($planuserCollection[$i])->value('profit');
                $planprofit = PlanUser::find($planuserCollection[$i])->value('plan_profit');
                $userProfit =  $profit + ($investment * $planprofit);
                array_push($profits, $userProfit);
            }
             return $profits;
        }
    }

    public function updateprofit(): void
    {
        $planuserCollection = $this->getusers()->toArray(); //convert planIds to array
        if ($planuserCollection != null) {
            $planUser_array = PlanUser::find($planuserCollection)->toArray(); // collection converted to array

            for ($i = 0; $i < count($planUser_array); $i++) {
                PlanUser::where('id',  $planuserCollection[$i])->update(
                    ['profit' => $planUser_array[$i]['profit'] + ($planUser_array[$i]['plan_profit'] * $planUser_array[$i]['investment'])]
                );
            }
        }
    }

    public function usertotalProfit(Request $request)
    {
        $userIds = PlanUser::where('updated_at', '<=', Carbon::now()->subHours(24))->get()->pluck("user_id");
        $totalProfits = PlanUser::where('user_id', $userIds)->get()->pluck('profit')->sum(); //->pluck('total_profit'); //this is wrong!!!
        $currentUser = Account::where('user_id', $userIds);
        $currentUser->update(['total_profit' => $totalProfits]);
        PlanUser::where('user_id', auth()->user()->id)->update(['profit' => null]);
    }
}