<?php

namespace App\Http\Controllers\Admin;

use App\Models\Referral;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\User;

class ReferralController extends Controller
{
    //
    public function index()
    {
        $referred = Referral::where('user_id', auth()->user()->id)->get();
        $emailsArray = $referred->pluck('email')->toArray();        
        
        return view('admin.referrals.index', [
            'referred' => $referred,
            'emails' =>  $referred->pluck('email')
        ]);
    }
    
    public function generateReferralCode()
    {
        $referralCode = strtoupper(Str::random(8)); // Generate a random referral code
        return $referralCode;
    }

    public function referred()
    {
        $referralId = Referral::where('user_id', auth()->user()->id)->get()->value('id');
        $referred = User::join('referrals', 'referrals.user_id', 'users.id')->whereNot('users.referral_id', auth()->user()->referrals)->get(); //auth()->user()->referrals;
        return $referrals = $referred->where('referral_id', $referralId);
        //$referred->each(function($value, $key){
            //if ($value['user_id'] != auth()->user()->id){
            //    return $value['name'];
            //}
        //});
        //return view('admin.referrals.referred', ['referred' => $referrals]);
    }
}