<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use App\Models\PlanUser;
use App\Models\User;
use Illuminate\Http\Request;

class ProfitController extends Controller
{
    //
    public function Calprofit()
    {
        $investment = PlanUser::with('investment');

        $interestPercent = Plan::with('PlanUser');
        dd(' $interestPercent');
        $profit = 
        dd($investment);
    }
}
