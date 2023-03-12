<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function plan()
    {
        return $this->hasManyThrough(Plan::class, Investment::class, 'user_id', 'investment_id', 'id', 'id');
    }

    public function network()
    {
        return $this->hasManyThrough(Network::class, Referral::class, 'user_id', 'referral_id', 'id', 'id');
    }

    public function account()
    {
        return $this->hasOne(Account::class);
    }

    public function referral()
    {
        return $this->hasOne(Referral::class);
    }

    public function investment()
    {
        return $this->hasOne(Investment::class);
    }
}
