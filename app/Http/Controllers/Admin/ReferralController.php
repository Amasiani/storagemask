<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReferralController extends Controller
{
    //
    public function generateReferralCode()
    {
        $referralCode = strtoupper(Str::random(8)); // Generate a random referral code
        return $referralCode;
    }
}