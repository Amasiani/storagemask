<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Plan;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'auth.isAdmin'])->except('index', 'store');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.plans.index',
        ['plans' => Plan::paginate(10)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.plans.create', ['users' => User::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        
        $request->validate([
            'name' => 'required:string',
            'min_deposit' => 'required:numeric',
            'max_deposit' => 'required:numeric',
            'contact_life' => 'required:string',
            'business_day' => 'required:string',
            'withdrawal' => 'required:string',
            'referral_bonus' => 'required:numeric',
            'profit' => 'required:numeric',
        ]);
    
        Plan::create($request->all());

        return redirect()->route('admin.plans.index')->with('success', 'Plan created.');
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Plan $plan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Plan $plan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Plan $plan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plan $plan)
    {
        //
    }
}
