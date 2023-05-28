<?php

namespace App\Http\Controllers\Admin;

use App\Models\Plan;
use App\Models\User;
use App\Models\PlanUser;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Account;

class InvestmentController extends Controller
{
    /**public function __construct()
    {
        //$this->middleware(['auth', 'verified']);
    }*/
    
    /**
     * Display a listing of the resource.
     */

     public function index()
    {
        /**
         * retriving date from customized pivot table
         * $users = User::with('podcasts')->get();
        */
          
        return view('admin.investments.index', [
            'planuser' => PlanUser::paginate(10),
            'user' => auth()->user(),
            'plans' => Plan::paginate(10),
            'accounts' => Account::paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.investments.create', [
            'plans' => Plan::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //$userAccount_amounts = $userAccount->pluck('amount'); //retrive 'amount' in user account from the Accounts table.
        //for ($i=0; $i<$userAccount_amounts->count(); $i++)
            //$userAccount_amounts[$i];
        /**
        * populating pivot table through pivot table mode
       */
      
        $plans = Plan::all(); //Call plans model
        $currentUser = auth()->user(); //calling current Auth user
        $userAccount = Account::where('user_id', '=', $currentUser->id); // Getting currentuser Account model (object)
       
        $userAccount_amount = $userAccount->value('amount'); //value() retrives value of attribute from a colloction. 
        foreach ($plans as $plan)
        if (isset($userAccount_amount)) {
            if ($userAccount_amount < $plan->min_deposit
            ) {
                return redirect()->route('admin.accounts.index')->with('success', 'Your balance is to low to invest!');
            } else {
                $userNewBalance =  $userAccount_amount - $request->amount; //subtracting the invested amount from the available balance 
                $userAccount->update([
                    'amount' => $userNewBalance
                ]);
                PlanUser::create([
                    'plan_id' => $request->plan_id,
                    'user_id' => $currentUser->id,
                    'investment' => $request->amount,
                ]);

                return redirect()->route('admin.investments.index')->with('success', 'You have invested and your Account updated!');
            }
        } else return redirect()->back()->with('success', 'Fund your account!');
    }

    /**
     * Display the specified resource.
     */
    public function show(PlanUser $planuser)
    {
        return view('admin.investments.show', ['investment' => PlanUser::find($planuser->id)]);
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InvestmentController $investment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InvestmentController $investment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InvestmentController $investment)
    {
        //
    }
}
