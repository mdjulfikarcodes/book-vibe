"use client"
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { BooksContext } from '@/Context/BooksContext';
import { toast } from 'react-toastify';

const ReadButton = ({book}: {book: IBook}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);
    const handleReadBook = () => {
        console.log("Read Book Button Trigger",book);

        setReadBooks([...readBooks, book])
        toast.success(`You have read "${book.bookName}"`)
        
    };
    return (

            <button className="btn btn-primary rounded-xl px-7 shadow-md transition-all 
          duration-300 hover:scale-105" onClick={() => handleReadBook()}>
            Read
          </button>
    );
};

export default ReadButton;