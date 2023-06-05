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
        $profitController = new ProfitController();
        //$planuserIds = $profitController->getusers();
        //$profits = $profitController->CalProfits();
        //if ($planuserIds != null) {
        //    for ($i = 0; $i <= count($profits); $i++) {
        //        $profittedUser = PlanUser::find($planuserIds[$i]); // finding user to update
        //        $profittedUser->update(['profit' => $profits[$i]]); //updating profit;
        //    };
        //}

        $planuserIds = $profitController->getusers()->toArray(); //convert planIds to array
        if ($planuserIds != null){
            $planUser_array = PlanUser::find($planuserIds)->toArray(); // collection converted to array

            for ($i=0; $i<count($planUser_array); $i++){
                    PlanUser::where('id',  $planuserIds[$i])->update(
                        ['profit' => $planUser_array[$i]['profit'] + ($planUser_array[$i]['plan_profit'] * $planUser_array[$i]['investment'])]);
            }            
        }
    }
}
