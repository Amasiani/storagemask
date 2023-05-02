<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Plan;
use App\Models\PlanUser;
use App\Models\User;
use Illuminate\Http\Request;

class ProfitController extends Controller
{
    //
    public function Calprofit()
    {
        $Useraccounts = User::with('account')->get();
            foreach ($Useraccounts as $Useraccount)
                foreach ($Useraccount->plans  as $plan)
                    $plan->pivot->investment;

        return view('profit', ['profit' => $Useraccounts]);
    }
}