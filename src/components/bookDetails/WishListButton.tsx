"use client"
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { BooksContext } from '@/Context/BooksContext';
import { toast } from 'react-toastify';

const WishListButton = ({book}: {book: IBook}) => {


    const {wishList, setWishlist} = useContext(BooksContext)

    const handleAddToWishlist = () => {
        console.log("WishList Button Trigger",book);

        setWishlist([...wishList, book])
        toast.success(`You have wishList "${book.bookName}"`)
        
    }
    return (
        <div>
            <button className="btn btn-primary rounded-xl px-7 shadow-md transition-all 
          duration-300 hover:scale-105" onClick={() => handleAddToWishlist()}>
            Add To Wishlist
          </button>
        </div>
    );
};

export default WishListButton;