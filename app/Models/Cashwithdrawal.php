<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cashwithdrawal extends Model
{
    use HasFactory;

    protected $table = 'cashwithdrawals';

    protected $fillable = [
        'user_id',
        'amount',
        'deposit',
        'profit',
        'wallet_address',
        'crypto',
    ];

    public function User()
    {
        $this->belongsTo(User::class);
    }
}
