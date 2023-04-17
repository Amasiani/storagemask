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
       /**
        * populating pivot table through pivot table mode
       */
      
        $plans = Plan::all(); //Call plans model
        $currentUser = auth()->user(); //calling current user
        $userAccount = Account::find($currentUser->id); // Getting currentuser Account object
        foreach($plans as $plan)
            if ( $userAccount->amount < $plan->min_deposit) {
                return redirect()->route('admin.accounts.index')->with('success', 'Your balance is to low to invest!');
            }
            else {
                $userNewBalance =  $userAccount->amount - $request->amount;
                $userAccount->update([
                    'amount' => $userNewBalance
                ]);
                PlanUser::create([
                    'plan_id' => $request->plan_id,
                    'user_id' => $currentUser->id,
                ]);

                return redirect()->route('admin.investments.index')->with('success', 'You have invested and your Account updated!');
            }
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
    public function edit(Investment $investment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Investment $investment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Investment $investment)
    {
        //
    }
}
