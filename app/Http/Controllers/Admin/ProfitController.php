<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Plan;
use App\Models\PlanUser;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
class ProfitController extends Controller
{
    //
    public function getusers()
    {
       return PlanUser::where('updated_at', '<=', Carbon::now()->subHours(24))->get()->pluck("id"); //collection of planuser->ids due for profit  $readyusers = 
    }
    
    public function planProfit()
    {
        $planuserCollection = $this->getusers(); //collection
        $planIds = Planuser::find($planuserCollection)->pluck('plan_id')->toArray(); //Returns planUser plan_ids
        //$emmy = Plan::where('id' , '=', $planIds);
        //dd($emmy);
        return Plan::find($planIds); //returns plans of each user from the Plan model
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
        if ($planuserCollection != null) {
            for ($i = 0; $i < $planuserCollection->count(); $i++) {
                $investment = PlanUser::find($planuserCollection[$i])->value('investment');
                $profit =  PlanUser::find($planuserCollection[$i])->value('profit');
                if ($profit == null)
                    continue;
                else $profit;
                $planprofit = Plan::where('id', '=', $planuserCollection[$i])->get()->value('profit');
                $userProfit = $profit + ($investment * $planprofit);
                array_push($profits, $userProfit);
            }
             return $profits;
        }
    }

    public function updateprofit(): void
    {
        $planuserId = $this->getusers();
       $profit = $this->CalProfits();
        if ($planuserId != null) {
             for ($i=0; $i<=count($profit); $i++) {
                 $profittedUser = PlanUser::find($planuserId[$i]); // finding user to update
                 $profittedUser->update(['profit' => $profit[$i]]); //updating profit;
            };
        };
    }
}