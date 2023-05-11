<?php

namespace App\Console\Commands;

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

        $emmy = new ProfitController;
        $planuserId =   $emmy->getusers();  //$this->getusers();
        if (!$planuserId == null) {
            $userId = $planuserId->id; //used 'user_id' formerly
            $profittedUser = PlanUser::find($userId); // finding user to update
            $profittedUser->update(['profit' => $emmy->Calprofit()]); //updating profit  $this->Calprofit()
        }   
        //[ProfitController::class, 'updateprofit'];
    }
}
