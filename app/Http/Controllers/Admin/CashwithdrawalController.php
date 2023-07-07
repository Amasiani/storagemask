<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Cashwithdrawal;
use App\Http\Controllers\Controller;

class CashwithdrawalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return view('admin.cashwithdrawals.index',
        ['withdrawalrequests' => Cashwithdrawal::paginate(20)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $cashRequest = Cashwithdrawal::find($id);

        $userName = User::where('id', $cashRequest->user_id)->value('name');
        return view('admin.cashwithdrawals.show',
        ['cashwithdrawal' => $cashRequest,
        'username' => $userName
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        Cashwithdrawal::destroy($id);
        return redirect()->route('admin.cashwithdrawals.index')->with('success', 'Request deleted!!!');
    }
}
