<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanUser extends Pivot
{
    use HasFactory;
    
    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = true;

    protected $table = 'plan_user';

    protected $fillables = [
        'plan_id',
        'user_id',
        'investment',
        'profit',
    ];
}
