<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $table = 'accounts';
    //protected $casts = [
     //   'amount' => 'integer',
    //];

    protected $fillable = [
        'amount',
        'user_id',
        'total_profit',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
