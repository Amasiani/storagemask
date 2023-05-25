<?php

namespace App\Providers;

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
    }
}
