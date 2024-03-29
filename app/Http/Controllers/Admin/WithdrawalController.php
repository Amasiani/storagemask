<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\ContactFormController;
use App\Models\Account;
use App\Models\PlanUser;
use App\Models\Withdrawal;
use Illuminate\Http\Request;
use App\Models\Cashwithdrawal;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;

class WithdrawalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        /**
         * show list of users withdrawals
         * show user total withdrawals
         */
        if (Gate::allows('auth.isAdmin'))
        {
            dd("hello do something");
        }
        dd("welcome");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
        //$wallet = array($profits, $deposits);
        //return view('admin.accounts.withdrawal', ['wallets' => $wallet]);
        //$profits = PlanUser::whereNotNull('profit')->get();
        //$deposits = User::has('account')->get();
        //if (Gate::allows('auth.isAdmin')){
            //return view('admin.accounts.adminwithdraw')
            //->with(['users' => User::doesntHave('roles')->get()])
            //->with(['cashrequests' => Cashwithdrawal::all()]);
        //
        if (isset(auth()->user()->account->amount))
        {
            $profits =  Account::where('user_id', auth()->user()->id)->get()->value('total_profit');
            $deposits = auth()->user()->account->amount;
            return view('admin.withdrawals.create')->with(['profits' => $profits])->with(['deposits' => $deposits]);   
        } 
        return view('admin.withdrawals.create');   
        
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {        
        
        
        //dd($request);
        $profits = Account::where('user_id', auth()->user()->id)->get()->value('total_profit');
        $deposits = auth()->user()->account->amount;
        
        $request->validate([
            'amount' => 'required|numeric',
            'wallet_address' => 'required|string',
        ]);

        if ($request->wallet == "profits"){
            switch ($profits) {    
                case ($profits == 'null'):
                    return redirect()->back()->with('success', 'You have not made profit on your investment!!!' . ' ' . $profits);
                    break;
                
                case ($profits < $request->amount):
                    return redirect()->back()->with('success', 'Your profit balance is too low!!!' . ' ' . $profits);
                    break;

                case ($request->wallet == "profits"):
                    Cashwithdrawal::create([
                        'user_id' => auth()->user()->id,
                        'profit' => True,
                        'amount' => $request->amount,
                        'wallet_address' => $request->wallet_address,
                        'crypto' => $request->crypto,
                        
                    ]);
                    $currentUserAccount = Account::where('user_id', auth()->user()->id);
                    $newtotalProfit = $profits - $request->amount;
                    $currentUserAccount->update(['total_profit' => $newtotalProfit]);

                    $notice = new ContactFormController;
                    $notice->withdrawalRequest($request);

                    return redirect('/home')->with('success', 'Your transition was successful');
                    break;
                default:
                    echo "All did not work out well for profits";
            }
        }elseif ($request->wallet == "deposits")
        {
            switch ($deposits) {
                case ($request->amount > $deposits):
                    return redirect()->back()->with('success', 'Your deposit balance is too low!!!' . ' ' . $deposits);
                    break;
    
                case ($deposits == 'null'):
                    return redirect()->back()->with('success', 'Please make deposit!!!' . ' ' . $deposits);
                    break;

                case ($request->wallet == "deposits"):
                    Cashwithdrawal::create([
                        'user_id' => auth()->user()->id,
                        'deposit' => True,
                        'amount' => $request->amount,
                        'wallet_address' => $request->wallet_address,
                        'crypto' => $request->crypto,
                    ]);
                    $newtotalDeposit =  $deposits - $request->amount;
                    $userAccount = Account::where('user_id', auth()->user()->id);
                    $userAccount->update(['amount' => $newtotalDeposit]);
    
                    $notice = new ContactFormController;
                    $notice->withdrawalRequest($request);
    
                    return redirect()->back()->with('success', 'Your transition was successful' ); // send the admin email of he user deatils
                    break;
                default:
                    echo "It all worked out well for deposits";
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        return view('admin.withdrawals.show', ['show' => Withdrawal::find($id)]);
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
    }
}
