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
        $referred_by = Referral::where('link', $input["referral_id"])->get();
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        $newUser = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);
         
        Referral::create([
           'user_id' => $newUser->id,
           'link' => $referral_link->generateReferralCode() 
        ]);

        $newUser->update(['referral_id' => $referred_by->value('id')]);

        return $newUser;
    }
}
