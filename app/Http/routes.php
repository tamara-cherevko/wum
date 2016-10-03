<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function() {

    Route::get('/', ['as' => 'home', 'uses' => 'IndexController@home']);

    Route::get('/construct', ['as' => 'constructor.create', 'uses' => 'ConstructorController@index']);

    Route::get('/shop/blankets', ['as' => 'catalog.blankets', 'uses' => 'CatalogController@blankets']);

    Route::get('/shop/collections', ['as' => 'catalog.collections', 'uses' => 'CatalogController@collections']);

    Route::get('/item/{item_slug}', ['as' => 'item.show', 'uses' => 'ItemController@show']);
});


Route::get('/setlocale/{locale}', function(\Illuminate\Http\Request $request, $locale) {
    if (in_array($locale, ['en', 'ua'])) {
        \Illuminate\Support\Facades\Session::set('locale', $locale);
    }
    return \Illuminate\Support\Facades\Redirect::back();
});