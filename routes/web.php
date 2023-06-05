<?php


use Illuminate\Support\Facades\Route;
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

/**
 * Include admin route
 */

Route::post('/resetLink', [PasswordResetController::class, 'resetLink'])->middleware('auth')->name('newLink.send');
Route::get('/create-link', [PasswordResetController::class, 'createLink'])->middleware('auth')->name('newLink');
Route::get('/planprofit', [ProfitController::class, 'planProfit'])->name('planProfit');
Route::get('/home', [HomeController::class, 'redirect'])->middleware('auth')->name('home');
Route::get('/contact-us', [ContactFormController::class, 'Contactindex'])->name('contact');
Route::post('/send-contact', [ContactFormController::class, 'sendContactMail'])->name('contact.send');


Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function() {
    Route::get('/roleusers/create', [RoleUserController::class, 'assignRoleCreate'])->name('assign');
    Route::post('/roleusers/store', [RoleUserController::class, 'roleuserStore'])->name('assignStore');
    Route::get('/referral', [ReferralController::class, 'index'])->name('index');
    Route::resources([
        'accounts' => AccountController::class,
        'plans' => PlanController::class,
        'investments' => InvestmentController::class,
    ]);
});

Route::prefix('admin')->name('admin.')->group(function(){
    Route::resources([
        'users' => UserController::class,
    ]);
});