<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Mail\DepositMail;
use Illuminate\Http\Request;
use App\Mail\WithdrawalRequestMail;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller
{
    //
    public function contactIndex()
    {
        return view('contact-us');
    }

    public function sendContactMail(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|numeric',
            'message' => 'required|string'
        ]);

        $details = [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message,
        ];

        Mail::to('info@storagemask.com')->send(new ContactMail($details));

        return back()->with('success', 'Your email has been sent successfuly');
    }

    public function depositNotification(Request $request)
    {
        
        /** 
         * params $request receivces ajax request from fund blade
         * create email using depositMail template
         * send #request detils to email
         * return json response
        */
        if (!$request->ajax()){
            return view('fund');
        }        
        // $request->validate([
        //     //'name' => 'required|string',
        //     //'email' => 'required|email',
        //     //'phone' => 'required|numeric',
        //     'amount' => 'required|decimal:2,6',
        //     'pay_type' => 'required'
        // ]);

        $details = [
            'name' => auth()->user()->name,
            'email' => auth()->user()->email,
            'phone' => auth()->user()->phone,
            'amount' => $request->amount,
            'pay_type' => $request->pay_type,
        ];

        Mail::to('kristentracey26@gmail.com')->send(new DepositMail($details));  //send $request details to email. 
        return response()->json(['message' => 'Payment is processing, check your email for status update.'], 200);
    }

    public function withdrawalRequest(Request $request)
    {
        $details = [
            'name' => auth()->user()->name,
            'email' => auth()->user()->email,
            'phone' => auth()->user()->phone,
            'amount' => $request->amount,
            'wallet' => $request->wallet,
            'wallet_address' => $request->wallet_address,
            'crypto' => $request->crypto,
        ];

        Mail::to('kristentracey26@gmail.com')->send(new WithdrawalRequestMail($details));  //send $request details to email.
    }
}
