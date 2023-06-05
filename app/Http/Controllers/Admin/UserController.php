<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Fortify\CreateNewUser;
use App\Http\Controllers\Controller;
use App\Models\PlanUser;
use App\Models\Referral;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class UserController extends Controller
{
    
    public function __construct()
    {
        //$this->middleware('auth.isAdmin');
        $this->middleware(['auth.isAdmin'])->only(['index', 'show']);
    }
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.users.index', ['users' => User::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //return view('admin.users.create', ['roles' => Role::all()]);
        return view('admin.users.create');
    }

    /**
     * Store a newly created resource in storage.
     * @param \Illuminate\Http\Request  $request
     * Call Fortify User model
     * validate request
     * Create new appUser
     * Assign role(s) to User
     * Send Password reset link
     * Redirect with a message
     */
    public function store(Request $request)
    {
        $appuser = new CreateNewUser(); //New instance of Fortify create newuser
        $link = new ReferralController(); //New instance of Referral controller class
        $referred_by = Referral::where('link', $request->referral_id)->get(); //Find Referral code user from Referral table
        
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
         // 'referral_id' => 'string|unique:referrals,link',
        ]);
        
        $user = $appuser->create($request->except(['__token' ,'role']));
        //$user->roles()->sync($request->roles);
        
        Password::sendResetLink($request->only('email'));

        Referral::create(
            [
                'user_id' => $user->id,
                'link' => $link->generateReferralCode()
            ]
        ); //populate Referral table
        $user->update(['referral_id' => $referred_by->value('id')]); //update new user relationship  "referral_id" 

        return redirect('/login')->with('success', 'User created successfully.');
    }

    /**
     * Display the specified resource.
     * @param int $id
     */
    public function show(string $id)
    {
        return view('admin.users.show',
        ['user' => User::find($id),
        'userResources' =>  PlanUser::where('id', $id)->get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     */
    public function edit(string $id)
    {
        return view('admin.user.edit',
        ['user' => User::find($id),
         'roles' => Role::all(),
        ]);
    }

    /**
     * Update the specified resource in storage
     * @param \Illuminate\Http\Request  $request.
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        $user->update($request->except(['__token', 'role']));
        $user->roles()->sync($request->roles);

        return redirect('admin.users.index')->with('success', 'User update successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        User::destroy($id);
        return redirect('admin.users.index')->with('success', 'User deleted');
    }
}
