<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Models\Role;
use App\Models\User;
use App\Models\Account;
use App\Models\Network;
use App\Models\PlanUser;
use App\Models\Referral;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * doesnthave('colunm name') laravel method to querying Relationship absence
     */
    public function redirect()
    {
        
        //$role = User::with('roles')->get(); //eager loading a relationship model
        //$roles = $user->roles; // calling the roles relationship table

        $user = auth()->user(); // calling the authenticated use
        $role = $user->roles->pluck('name');
        if(auth()->check())  // 
        {
            if ($role->contains('Admin')) {
                return view('admin.dashboard.home', [
                    'accounts' => Account::paginate(10),
                    'users' => User::paginate(10),
                    'investments' => PlanUser::paginate(10),
                    'networks' => Network::paginate(10),
                    'referrals' => Referral::paginate(10),
                    'roles' => Role::paginate(10),
                    'plans' => Plan::paginate(10),
                ]);
            }
            $planUsers = PlanUser::where('user_id', $user->id)->get();
            $plans = Plan::find($planUsers->pluck('plan_id')->toArray());
            return view('dashboard',
            ['planUsers' => $planUsers,
            'plans' => $plans]);
        }else{
            return redirect()->route('login');
        }
    }

    public function welcome(){
        return view('welcome',
        ['plans' => Plan::all()]);
    }
}
