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
       return PlanUser::where('updated_at', '<=', Carbon::now()->subHours(24))->get()->pluck("id")->toArray(); //collection of planuser->ids due for profit  $readyusers = 
    }
    
    public function planProfit()
    {
        $planuserCollection = $this->getusers(); //collection
        $planIds = Planuser::find($planuserCollection)->pluck('plan_id')->toArray(); //Returns planUser plan_ids
        $emmy = Plan::where('id' , '=', $planIds);
        //dd($emmy);
        return Plan::find($planIds); //returns plan->id of each user from the Plan model
    }

    public function CalProfits(): array
    {
        $planuserCollection = $this->getusers(); //collection
        $profits = PlanUser::find($planuserCollection)->pluck('profit')->toArray();
        $investments = Planuser::find($planuserCollection)->pluck('investment')->toArray();
        $planProfits = $this->planProfit()->pluck("profit")->toArray();
        if ($profits != null){
            return array_map(function($profits, $planProfits, $investments){
                return $profits + ($planProfits * $investments);
            }, $profits, $planProfits, $investments);
        }else {
            return array_map(function($planProfits, $investments){
                return ($planProfits * $investments);
            }, $planProfits, $investments);
        }
    }

    public function updateprofit()
    {
        $planuserId = $this->getusers();
        $calprofits = $this->CalProfits();
        if ($planuserId != null) {
            for ($i=0; $i<=count($calprofits); $i++) {
                $profittedUser = PlanUser::find($planuserId[$i]); // finding user to update
                $profittedUser->update(['profit' => $calprofits[$i]]); //updating profit;
            };
        }
    }
}