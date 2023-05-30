<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Models\Role;
use App\Models\User;
use App\Models\Account;
use App\Models\Network;
use App\Models\Referral;
use App\Models\PlanUser;
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
            $userResources = PlanUser::where('user_id', $user->id)->first();
            //$userplan = Plan::where('id', $userResources->plan_id)->get();
            return view(
                'dashboard',
                [
                    'userResources' => $userResources,
                    //'userplan' => $userplan
                ]
            );
        }else{
            return redirect()->route('login');
        }
    }

    public function welcome(){
        $hello_world = 1234;
        return view('welcome',
        ['plans' => Plan::all(),
        'hello' => $hello_world]);
    }
}
