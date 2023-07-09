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
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'auth.isAdmin'])->except('myInvestments', 'create', 'store');
    }
    
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
            'planusers' => PlanUser::paginate(10),
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
        $plan = Plan::where('id', $request->plan_id)->get(); //get request plan
        $userAccount = Account::where('user_id', '=', auth()->user()->id); // Getting currentuser Account model (object)

        if (isset(auth()->user()->account))
        {
            switch ($request->amount) {
                case ( $request->amount  > auth()->user()->account->amount):
                    return redirect()->back()->with('success', 'Your balance is to low to invest!');
                    break;
                case ($request->amount < $plan->value('min_deposit')):
                    return redirect()->back()->with('success', 'Your cannot invest less that the Plan minimum deposit!' . ' ' . '$' .$plan->value('min_deposit'));
                    break;
                default:
                    $userNewBalance =  auth()->user()->account->amount - $request->amount; //subtracting the invested amount from the available balance 
                    $userAccount->update([
                        'amount' => $userNewBalance
                    ]);
                    PlanUser::create([
                        'plan_id' => $request->plan_id,
                        'user_id' => auth()->user()->id,
                        'investment' => $request->amount,
                        'plan_profit' => $plan->value('profit'),
                        'payment_type' => $request->payment_type,
                    ]);
    
                    return redirect()->back()->with('success', 'You have invested and your Account updated!');
                    break;
            }
        }
        return redirect()->route('admin.accounts.create')->with('success', 'Fund Your Account.');
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

    public function myInvestments()
    {
        $planuserPivotArray = auth()->user()->plans->pluck('pivot')->toArray();
        $investments = data_get($planuserPivotArray, '*.investment');
        
        return view('admin.investments.myInvestments',[
            'planUsers' => PlanUser::where('user_id', auth()->user()->id)->get(),
            'investments' => $investments,
           
        ]);
    }
}
