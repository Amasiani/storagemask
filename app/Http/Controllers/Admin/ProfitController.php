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
        $readyusers = [];
        $readyusers = PlanUser::where('updated_at', '<=', Carbon::now()->subHours(24))->get(); //collection of users due for profit
        foreach($readyusers as $ready)
        {
            $usersDueForProfits = PlanUser::where('id', '=', $ready->id)->get();
            foreach ($usersDueForProfits as $usersDueForProfit)
                return $usersDueForProfit;
        }
    }
    
    public function Calprofit()
    {
        $planuserCollection = $this->getusers(); //collection
        if ($planuserCollection != null)
        {
            $investment = $planuserCollection->investment;
            $planId = $planuserCollection->plan_id;

            $planProfits = Plan::find($planId); //find plan_user
            $planProfit =  $planProfits->profit; //retrieve plan_user profit
            return ($investment * $planProfit); //calculate profit
        } 
    }

    public function updateprofit()
    {
        $planuserId = $this->getusers();
        if (!$planuserId == null) {
            $userId = $planuserId->id; //used to 'user_id' formerly
            $profittedUser = PlanUser::find($userId); // finding user to update
            $profittedUser->update(['profit' => $this->Calprofit()]); //updating profit
        }
    }
}