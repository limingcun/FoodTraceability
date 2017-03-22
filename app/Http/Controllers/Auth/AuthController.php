<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class AuthController extends Controller
{
    public function info()
    {
        $user = Auth::user();
        if($user != null && $user != ''){
            return $user;
        }else{
            abort(401);
        }
    }

}
