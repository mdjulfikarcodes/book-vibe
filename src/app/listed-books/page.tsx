"use client"
import ListedBooksCard from '@/components/shared/ListedBooksCard';
import { BooksContext } from '@/Context/BooksContext';
import { IBook } from '@/types/books.type';

import React, { useContext, useState } from 'react';

const ListedBooks = () => {
    const { readBooks, wishList } = useContext(BooksContext);

    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating")


    console.log(readBooks, wishList, "ReadBooks", "wishlist");
    console.log(sortBy, "Short By");

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if(sortBy === "rating"){
            sortedBooks.sort((a, b)=> b.rating - a.rating);
        }else if(sortBy === "pages"){
            sortedBooks.sort((a, b)=> b.totalPages - a.totalPages);
        }else if(sortBy === "year"){
            sortedBooks.sort((a, b)=> b.yearOfPublishing - a.yearOfPublishing);
        }
        return sortedBooks

    }

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishlist = sortBooks(wishList)

    console.log();
    
    

    return (
        <div className='container mx-auto py-[20px]'>
            <h2 className='my-7 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center'>
                Listed Books</h2>

            <div className='text-center'>
                <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
                defaultValue="Pick a Runtime" 
                className="select select-success">
                <option disabled={true}>Short by</option>
                <option value={"rating"}>Rating</option>
                <option value={"pages"}>Number of pages</option>
                <option value={"year"}>Publisher year</option>
            </select>

            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {readBooks.length > 0 ? (
                        sortedReadBooks.map((book: IBook) => {
                            return (
                                <ListedBooksCard key={book.bookId} book={book} />
                            )
                        })
                    ) : (
                        <p className='text-center text-lg font-semibold'>No Read Books Found</p>
                    )}
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishList.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {wishList.length > 0 ? (
                        sortedWishlist.map((book: IBook) => {
                            return (
                                <ListedBooksCard key={book.bookId} book={book} />
                            )

                        })
                    ) : (
                        <p className='text-center text-lg font-semibold'>No Read Books Found</p>
                    )}</div>

            </div>
        </div>
    );
};

export default ListedBooks;