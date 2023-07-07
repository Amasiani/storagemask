<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //
    public function plans()
    {
        return view('plans');
    }

    public function our_numbers()
    {
        return view('our_numbers');
    }

    public function award()
    {
        return view('award');
    }

    public function terms()
    {
        return view('legals.terms');
    }

    public function privacy_policy()
    {
        return view('legals.privacy_policy');
    }

    public function withdrawal_policy()
    {
        return view('legals.withdrawal_policy');
    }

    public function payment_policy()
    {
        return view('legals.payment_policy');
    }

    public function anti_money()
    {
        return view('legals.anti_money');
    }

    public function conduct()
    {
        return view('legals.conduct');
    }

    public function about()
    {
        return view('about');
    }
}
