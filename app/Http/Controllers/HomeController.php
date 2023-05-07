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
        
         //$roles = User::with('roles')->get(); //eager loading a relationship model
        $user = auth()->user(); // calling the authenticated user
        //$roles = $user->roles; // calling the roles relationship table
       
        foreach ($user->roles as  $role)
            $role;

        if(auth()->check())  // 
        {
            if ((!isset($role->name) or (!$role->name == ('Superuser' || 'Admin')))) {   //$user->roles->contains($role->name) && ($role->name === ('Superuser' || 'Admin'))
                return view('dashboard');
            } else {
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
        }else{
            return redirect()->back();
        }
    }
}
