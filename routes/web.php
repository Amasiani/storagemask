<?php


use App\Models\Account;
use App\Models\Withdrawal;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\PlanController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\Admin\ProfitController;
use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\ReferralController;
use App\Http\Controllers\Admin\RoleUserController;
use App\Http\Controllers\Admin\InvestmentController;
use App\Http\Controllers\Admin\WithdrawalController;
use App\Http\Controllers\Auth\PasswordResetController;
use App\Http\Controllers\Admin\CashwithdrawalController;

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

Route::get('/devop', function(){
    $accountuser =  Account::where('user_id', 11)->first();
    view('devop', dd(['accountuser' => $accountuser->id]));
});
Route::get('/', [HomeController::class, 'welcome'])->name('welcome');

/**
 * Include admin route
 */
Route::get('/fund', [ContactFormController::class, 'depositNotification'])->middleware('auth')->name('fund');
Route::get('/transfer', [ProfitController::class, 'transferprofit'])->name('transfer');
Route::post('/resetLink', [PasswordResetController::class, 'resetLink'])->middleware('auth')->name('newLink.send');
Route::get('/create-link', [PasswordResetController::class, 'createLink'])->middleware('auth')->name('newLink');
Route::get('/planprofit', [ProfitController::class, 'planProfit'])->name('planProfit');
Route::get('/home', [HomeController::class, 'redirect'])->middleware('auth')->name('home');
Route::get('/contact-us', [ContactFormController::class, 'Contactindex'])->name('contact');
Route::post('/send-contact', [ContactFormController::class, 'sendContactMail'])->name('contact.send');


Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function() {
    Route::get('/roleusers/create', [RoleUserController::class, 'assignRoleCreate'])->name('assign');
    Route::post('/roleusers/store', [RoleUserController::class, 'roleuserStore'])->name('assignStore');
    Route::get('/referrals/referred', [ReferralController::class, 'referred'])->name('referred');
    Route::post('/profiles/updatePassword', [ProfileController::class, 'updatePassword'])->name('updatePassword');
    Route::get('/investments/myInvestments', [InvestmentController::class, 'myInvestments'])->name('myInvestments');
    // Route::get('/referrals', [ReferralController::class, 'index'])->name('index');
    //Route::get('admin.accounts.withdrawal', [AccountController::class, 'withdrawal'])->name('withdrawal');
    //Route::get('admin.accounts.adminwithdraw', [AccountController::class, 'withdrawal'])->name('adminwithdraw');
    //Route::post('admin.accounts.withdraw', [AccountController::class, 'withdraw'])->name('withdraw');
    
    Route::resources([
        'accounts' => AccountController::class,
        'plans' => PlanController::class,
        'investments' => InvestmentController::class,
        'withdrawals' =>WithdrawalController::class,
        'cashwithdrawals' => CashwithdrawalController::class,
        'withdrawals' => WithdrawalController::class,
        'referrals' => ReferralController::class,
        'profiles' => ProfileController::class,
    ]);
});

Route::prefix('admin')->name('admin.')->group(function(){
    Route::resources([
        'users' => UserController::class,
    ]);
});