<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuariosController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/search',[UsuariosController::class,'show']);
Route::get('/delete',[UsuariosController::class,'destroy']);
Route::post('/changepass',[UsuariosController::class,'update']);
Route::get('/token',[UsuariosController::class,'showToken']);
Route::post('/addUser',[UsuariosController::class,'store']);
