<?php

namespace App\Providers;

use App\Http\Controllers\Admin\ReferralController;
use App\Models\PlanUser;
use App\Models\Referral;
use App\Models\User;
use App\View\Composers\PlanComposer;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class TemplateServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //class based view composers
        View::composer('template', PlanComposer::class);

        View::composer('admintemp' , function($view){
            $view->with('referral_link' , Referral::where('user_id', Auth()->user()->id)->get());
        });

        View::composer('admintemp', function($view){
            $referralId = Referral::where('user_id', auth()->user()->id)->get()->value('id');
            //$referred = User::join('referrals', 'referrals.user_id', 'users.id')->whereNot('users.referral_id', auth()->user()->referrals)->get(); //auth()->user()->referrals;
            //$referrals = $referred->where('referral_id', $referralId);
            //$view->with('referred', $referrals);
        });

        View::composer('fundpartial.form', function($view){
            $view->with('users', User::all());
        });
    }
}
