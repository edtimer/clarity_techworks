<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Inertia\Inertia;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = Book::all();

        return Inertia::render('Book/Index', [
            'books' => $books,
        ]);
    }
    public function tester()
    {
        $books = Book::all();

        return redirect()->route('book')->banner('Book added.');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Book/Create');

        // return redirect()->route('book')->banner('Book added.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Book::create($request->validate([
            'name' => ['required', 'max:40'],
            'author' => ['required', 'max:100'],
            'genre' => ['required', 'max:30'],
            'isbn' => ['required', 'max:30'],
            'description' => ['required', 'max:500'],
        ]));

        // return to_route('book');
       return redirect()->route('book')->banner('Book added.');
    }

    /**
     * Display the specified resource.
     *

     * @return \Illuminate\Http\Response
     */
    public function search()
    {
        return Inertia::render('Book/SearchBook');
    }
    // /**
    //  * Display the specified resource.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    // public function search($id)
    // {
    //     return Inertia::render('Book/SearchBook');
    // }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
