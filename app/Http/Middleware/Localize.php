<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class Localize
{
    public function handle($request, Closure $next)
    {
        $locale = Session::get('locale');
        if (empty($locale)) {
            $locale = 'ua';
        }

        App::setLocale($locale);

        return $next($request);
    }
}
