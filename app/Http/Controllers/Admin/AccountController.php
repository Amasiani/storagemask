<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Account;
use Illuminate\support\Arr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Event\ViewEvent;

class AccountController extends Controller
{
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
        return view('admin.accounts.create', ['users' => User::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
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
            $newvalue = $request->amount + $request_user->account->amount;

            $updateAccount->update(['amount' => $newvalue]);

            return redirect()->route('admin.accounts.index')->with('success', 'Account updated');
        }
        
        

       
       
        /**
        *$exit_amount = DB::table('accounts')->where('amount', '>=', 1)->get();
        *foreach ($exit_amount as $account)
        *{
        *    if (!$request->user_id == $account->user_id)
         *   {
                
        *    }
        *    else return redirect()->route('admin.accounts.index')->with('success', 'Amount filled');
        *}
        */
       
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
}
