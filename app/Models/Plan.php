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
        'amount',
        'contact_life',
        'business_day',
        'withdrawal',
        'referral_bonus',
        'profit',

    ];

    public function user()
    {
        return $this->belongsToMany(User::class);
    }
}
