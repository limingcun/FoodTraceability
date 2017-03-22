<?php

/*
 * @version: Iquer Provider
 * @author: wuzhihui
 * @date: 2016/9/4
 * @description:
 */

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Utils\IQuery;

class IQueryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->singleton('iquery',function(){
            return new IQuery; //仅单例
        });
    }
}
