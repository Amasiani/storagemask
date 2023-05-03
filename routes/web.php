<?php

use App\Console\Commands\CalProfit;
use App\Models\Plan;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\PlanController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\Admin\RoleUserController;
use App\Http\Controllers\Admin\InvestmentController;
use App\Http\Controllers\Admin\ProfitController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    $user1 = User::find(1);
    return view('home', ['yeahs' => $user1]);
})->name('home');


Route::get('/testing', function () {
    return view('home');
})->name('testing');

/**
 * Include admin route
 */

Route::get('/home', [HomeController::class, 'redirect'])->name('home');
Route::get('/profits', [ProfitController::class, 'Calprofit'])->name('profits');
Route::get('/updateprofit', [ProfitController::class, 'updateinvestment'])->name('updateprofit');
Route::get('/contact-us', [ContactFormController::class, 'Contactindex'])->name('contact');



Route::prefix('admin')->name('admin.')->group(function() {
    Route::get('/roleusers/create', [RoleUserController::class, 'assignRoleCreate'])->name('assign');
    Route::post('/roleusers/store', [RoleUserController::class, 'roleuserStore'])->name('assignStore');
    Route::resources([
        'accounts' => AccountController::class,
        'users' => UserController::class,
        'plans' => PlanController::class,
        'investments' => InvestmentController::class,
    ]);
});