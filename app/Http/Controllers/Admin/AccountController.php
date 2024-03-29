<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Account;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Cashwithdrawal;
use App\Models\PlanUser;


class AccountController extends Controller
{
    
    public function __construct()
    {
        //$this->middleware
        //$this->middleware([ 'auth.isSuperuser', 'auth.isAdmin', 'verified'])->except('show');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.accounts.index', ['accounts' => Account::paginate(10)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.accounts.create')->with(['users' => User::all()])->with(['demandforcash' => Cashwithdrawal::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        /**
         * @param $request
         * @return collection
         * find request user from users table
         * check if user have an account and create if not
         * if user have account update account with new value
         * get request user account account_id
         * find request user account details from accounts table
         * add request value to existing account amount
         * always redirect to index when successfull.
        */
        $request_user = User::find($request->user_id);
        if (!isset($request_user->account->amount))
        {
            $request->validate([
                'amount' => 'required:numeric',
                'user_id' => 'required',
            ]);
    
            Account::create($request->all());

            return redirect()->route('admin.accounts.index')->with('success', 'Account created');
        }
        else
        {
            $account_id = $request_user->account->id;
            $updateAccount = Account::find($account_id);
            $newAmount = $request->amount + $request_user->account->amount;

            $updateAccount->update(['amount' => $newAmount]);

            return redirect()->route('admin.accounts.index')->with('success', 'Account updated');  
        }   
    }

    /**
     * Display the specified resource.
     */
    public function show(Account $account)
    {
        
        return view('admin.accounts.show', ['account' => Account::find($account->id)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Account $account)
    {
        return view('admin.accounts.edit',
        ['account' => Account::find($account),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Account $account)
    {
        $accountUpdate = Account::find($account);
        $accountUpdate->update($request->except(['_token']));

        return redirect('admin.accounts.index')->with('success', 'Account updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        Account::destroy($id);

        return redirect()->route('admin.accounts.index')->with('success', 'Deleted');
    }

    public function withdrawal(Request $request)
    {
        /** 
         * @param Request
         * retrieve all cash request from the Cashwithdrawals table.
         * if $request->user has role, return cash demand request to
         * admin.accounts.adminwithdraw view.
         * else sum $profits from the PlanUser table for auth->user.
         * and retrieve auth->user amount ($deposits) from Accounts table.
         * return $profits and $depsits to admin.accounts.withdrawal view
        */
        
        //$profits = PlanUser::whereNotNull('profit')->get();
        //$deposits = User::has('account')->get();
        //$wallet = array($profits, $deposits);
        //return view('admin.accounts.withdrawal', ['wallets' => $wallet]);
        
        $demandforcash = Cashwithdrawal::all();
        
        if (User::has('roles')){
            return view('admin.accounts.adminwithdraw')->with(['users' => User::doesntHave('roles')->get()])->with(['profits' => $demandforcash]);
        }
        $profits = PlanUser::where('user_id', auth()->user()->id)->get()->pluck('profit')->sum();
        $deposits = auth()->user()->account->amount;
        return view('admin.accounts.withdrawal')->with(['profits' => $profits])->with(['deposits' => $deposits]);
    }


    function withdraw(Request $request)
    {
        $request_user = User::find($request->user_id);
        $account_id = $request_user->account->amount;
        if ($request->withdraw == 'deposits'){
            
        }
        
        $updateAccount = Account::find($account_id);
        $newvalue = $request_user->account->amount - $request->amount;

        $updateAccount->update(['amount' => $newvalue]);

        return redirect()->route('admin.accounts.index')->with('success', 'Account updated');;
    }

    public function planuserStatus($id)
    {
        $planuser = PlanUser::find($id)->first();
        if ($planuser->status == true)
        {
            $planuser->update(['status' => false]);
        }else
        {
            $planuser->update(['status' => true]);
        }
        return redirect()->back();
        
    }
}
