<?php

namespace App\Console\Commands;

use App\Models\Plan;
use App\Models\PlanUser;
use Illuminate\Console\Command;
use App\Http\Controllers\Admin\ProfitController;

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
    protected $description = 'Calculate App investor daily profit based on their investment amount';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        // foreach ($planuserIds as $planuserId){
            //     foreach ($profits as $profit){
            //         $profittedUser = Plan::find($planuserId);
            //         $profittedUser->update(['profit' => $profit]);
            //     }
            // }

        $profitController = new ProfitController;

        $planuserIds = $profitController->getusers();
        $profits = $profitController->CalProfits();
        if ($planuserIds != null) {
            for ($i = 0; $i <= count($profits); $i++) {
                $profittedUser = PlanUser::find($planuserIds[$i]); // finding user to update
                $profittedUser->update(['profit' => $profits[$i]]); //updating profit;
            };
        }
    }
}
