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

Route::get('/', [HomeController::class, 'welcome'])->name('welcome');

Route::get('/test', function () {
    return view('test');
})->name('test');
/**
 * Include admin route
 */

Route::get('/home', [HomeController::class, 'redirect'])->middleware('auth')->name('home');
Route::get('/profits', [ProfitController::class, 'Calprofits'])->name('profits');
Route::get('/planprofit', [ProfitController::class, 'planProfit'])->name('planProfit');
Route::get('/updateprofit', [ProfitController::class, 'updateprofit'])->name('updateprofit');
Route::get('/profit', [ProfitController::class, 'getusers'])->name('updateprofit');
Route::get('/contact-us', [ContactFormController::class, 'Contactindex'])->name('contact');
Route::post('/send-contact', [ContactFormController::class, 'sendContactMail'])->name('contact.send');



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