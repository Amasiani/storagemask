<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //bootstrap paginator method library
        Paginator::useBootstrap();

        Schema::defaultStringLength(191);

        $this->autoload();
    }

    private function autoload()
    {
        if (File::exists(app_path('Helper/helper.php')))
        {
            require_once(app_path('Helpers/helper.php'));
        }
    }
}
