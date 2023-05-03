<?php

namespace App\Http\Controllers\Admin;

use App\Console\Commands\CalProfit;
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
    public $arr =  [];
    
    public function getusers()
    {
        $readyusers = [];
        $readyusers = PlanUser::where('updated_at', '<=', Carbon::now()->subHours(24))->get(); //collection of users due for profit
        foreach($readyusers as $ready)
        {
            $usersDueForProfits = PlanUser::where('user_id', '=', $ready->user_id)->get();
            foreach ($usersDueForProfits as $usersDueForProfit)
                return $usersDueForProfit;
        }
        //return view('profits');
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
            $profit =  ($investment * $planProfit); //calculate profit

            return $profit; //return profit
        } 
    }

    public function updateprofit()
    {
        $planuserId = $this->getusers();
        $userId = $planuserId ->user_id;

        $profittedUser = PlanUser::find($userId); // finding user to update
        $profittedUser->update(['profit' => $this->Calprofit()]); //updating profit
    }
}