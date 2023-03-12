<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->unsignedDecimal('amount', $precision = 8, $scale = 2);
            $table->unsignedInteger('contact_life');
            $table->string('business_day', 100);
            $table->string('withdrawal', 100);
            $table->float('referral_bonus', 8, 2);
            $table->float('profit', 8, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plans');
    }
};
