<?php

use App\Models\Plan;
use App\Models\User;
use App\Models\Referral;
use App\Console\Commands\CalProfit;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\PlanController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\Admin\ProfitController;
use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\Admin\ReferralController;
use App\Http\Controllers\Admin\RoleUserController;
use App\Http\Controllers\Admin\InvestmentController;
use App\Http\Controllers\Auth\PasswordResetController;

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

//Route::get('/test', function () {
//    return view('test');
//})->name('test');
/**
 * Include admin route
 */


//Route::get('/profits', [ProfitController::class, 'Calprofits'])->name('profits');
//Route::get('/updateprofit', [ProfitController::class, 'updateprofit'])->name('updateprofit');
//Route::get('/profit', [ProfitController::class, 'getusers'])->name('updateprofit');
Route::post('/resetLink', [PasswordResetController::class, 'resetLink'])->middleware('auth')->name('newLink.send');
Route::get('/create-link', [PasswordResetController::class, 'createLink'])->middleware('auth')->name('newLink');
Route::get('/planprofit', [ProfitController::class, 'planProfit'])->name('planProfit');
Route::get('/home', [HomeController::class, 'redirect'])->middleware('auth')->name('home');
Route::get('/contact-us', [ContactFormController::class, 'Contactindex'])->name('contact');
Route::post('/send-contact', [ContactFormController::class, 'sendContactMail'])->name('contact.send');



Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function() {
    Route::get('/roleusers/create', [RoleUserController::class, 'assignRoleCreate'])->name('assign');
    Route::post('/roleusers/store', [RoleUserController::class, 'roleuserStore'])->name('assignStore');
    Route::get('/referral', [ReferralController::class, 'index']);
    Route::resources([
        'accounts' => AccountController::class,
        //'users' => UserController::class,
        'plans' => PlanController::class,
        'investments' => InvestmentController::class,
    ]);
});

Route::prefix('admin')->name('admin.')->group(function(){
    Route::resources([
        'users' => UserController::class,
    ]);
});