<?php

namespace App\Console\Commands;

use App\Models\Role;
use Illuminate\Console\Command;

class CalProfit extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'calculate:profitCron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        //
        Role::create(['name' => 'cron']);
    }
}
