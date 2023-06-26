<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BookController;
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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
//route pointing to BookController
Route::get('/books', [BookController::class,'index'])->name('book');
Route::get('/search', [BookController::class,'search'])->name('bookSearch');
Route::get('/create', [BookController::class,'create'])->name('create');

Route::post('/result', [BookController::class,'search'])->name('result');
Route::post('/store', [BookController::class,'store'])->name('store');


Route::get('/tester', [BookController::class,'tester']);

Route::get('/wow', [BookController::class, 'index'])->name('wow');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
