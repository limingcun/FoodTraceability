<?php

/*
 * @version: 1.0 Iquery Facade
 * @author: wuzhihui
 * @date: 2016/9/4
 * @description:
 *
 */

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class IQueryClass extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'iquery';
    }
}