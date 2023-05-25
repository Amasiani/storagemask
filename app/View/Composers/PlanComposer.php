<?php
 
namespace App\View\Composers;

use App\Models\Plan;
use Illuminate\View\View;
 
class PlanComposer
{
 
    /**
     * Bind data to the view.
     *
     * @param  \Illuminate\View\View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with('plans', Plan::all());
    }
}