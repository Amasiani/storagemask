<?php

use App\Models\Role;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

Route::prefix('admin')->name('admin.')->group(function () {
    Route::view('/login', 'auth.login')->middleware('guest:admin')->name('login');
    Route::view('/register', 'auth.register')->middleware('guest:admin')->name('register');

    /**
     * From vendor/Fortify/Route
     * Implement login Authentication for admin route
     * using fortify login
     * using fortify.guard
     * default fortify.guard => 'wed'
     * redirect fortify.guard => 'admin'
     * in App/providers/FortifyServicePriovider register method
    */
   
    $limiter = config('fortify.limiters.login');

    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->middleware(array_filter([
            'guest:admin'.config('fortify.guard'),
            $limiter ? 'throttle:'.$limiter : null,
        ]));

    /**
     * implement logout for admin
    */
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
        ->middleware('auth:admin')
        ->name('logout');

    Route::view('/home', 'home')->name('home');
});

