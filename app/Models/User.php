<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use AjCastro\EagerLoadPivotRelations\EagerLoadPivotTrait;


class User extends Authenticatable implements MustVerifyEmail
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
        'referral_id'
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

    use EagerLoadPivotTrait;
    public function plans()
    {
        return $this->belongsToMany(Plan::class)->withPivot('investment', 'profit')->withTimestamps();
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

    /**
     * public function investment()
     * {
     *      return $this->hasOne(Investment::class);
     * }
     */

    public function roles()
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }

    /**
     * Check if the user has aa role
     * @param string $role
     * @return bool
     */
    public function hasAnyrole(string $role)
    {
        return null !== $this->roles()->where('name', $role)->first();
    }
    /**
     * Check if the user has any given role
     * @param array $role
     * @return bool
     */
     public function hasAnyRoles(array $role)
     {
        return null !== $this->roles()->whereIn('name', $role)->first();
     }
}