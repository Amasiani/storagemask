<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\RoleUser;
use App\Models\User;
use Illuminate\Http\Request;

class RoleUserController extends Controller
{
    //
    public function index()
    {
        return view('admin.roleusers.index', Role::all());
    }

    public function assignRoleCreate(Request $request)
    {
        return view('admin.roleusers.create',
        ['roles' => Role::all(),
         'users' => User::all(),   
        ]);
    }

    public function roleuserStore(Request $request)
    {
       $user = User::find($request->user_id);      
        $user->update([
            'user_id' => $request->user_id,
            'role_id' => $user->roles()->sync($request->roles),
        ]);

        return redirect()->route('admin.users.index')->with('success', 'Role assigned');
    }
}
