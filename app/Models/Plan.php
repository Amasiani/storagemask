<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $table = 'plans';

    protected $fillable = [
        'name',
        'min_deposit',
        'max_deposit',
        'contact_life',
        'business_day',
        'withdrawal',
        'referral_bonus',
        'profit',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('investment', 'profit', 'plan_profit')->withTimestamps();
    }
}
