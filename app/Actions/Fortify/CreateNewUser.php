<?php

namespace App\Actions\Fortify;

use App\Models\User;
use App\Models\Referral;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use App\Http\Controllers\Admin\ReferralController;
use Symfony\Component\Console\Input\Input;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        $referral_link = new ReferralController();
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'phone' => ['required', 'string', 'min:8', 'max:11'],
            
            'password' => $this->passwordRules(),
        ])->validate();

        if (isset($input['referrer_link'])){
            $newUser = User::create([
                'name' => $input['name'],
                'email' => $input['email'],
                'phone' =>$input['phone'],
                'link' =>  $referral_link->generateReferralCode(),
                'password' => Hash::make($input['password']),
            ]);
             
            Referral::create([
               'user_id' => User::where('link', $input['referrer_link'])->value('id'),
               'email' => $newUser->email,
            ]);
            return $newUser;

        } $newUser = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'phone' =>$input['phone'],
            'link' =>  $referral_link->generateReferralCode(),
            'password' => Hash::make($input['password']),
        ]);
        return $newUser;
    }
}
