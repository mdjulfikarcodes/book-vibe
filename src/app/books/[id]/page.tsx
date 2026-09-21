import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps {
    params: Promise<
        { id: string }>
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  const data = await res.json();

  return data;
};

const BookDetailsPage = async({ params }: IBookDetailsPageProps) => {
    const { id } = await params;
    const booksData = await getBooks();
    const book = booksData.find((book: IBook) => String(book.bookId) == String(id)) as IBook;
    console.log(book, "books");




return (
  <div className="container mx-auto px-4 py-10">
    <div className="card lg:card-side overflow-hidden bg-base-100 shadow-xl border border-base-200 rounded-3xl">
      
      {/* Book Image */}
      <figure className="lg:w-2/5 bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={500}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </figure>

      {/* Book Details */}
      <div className="card-body lg:w-3/5 p-6 md:p-8">

        {/* Category & Rating */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="badge badge-primary badge-outline px-4 py-3 font-medium">
            {book.category}
          </span>

          <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-600">
            <span className="text-lg">★</span>
            {book.rating}
          </div>
        </div>

        {/* Book Name */}
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-base text-slate-500">
          Written by{" "}
          <span className="font-semibold text-slate-800">
            {book.author}
          </span>
        </p>

        {/* Review */}
        <div className="mt-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            About this book
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            {book.review}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Information */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-400">Pages</p>
            <p className="mt-1 font-bold text-slate-800">
              {book.totalPages}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-400">Published</p>
            <p className="mt-1 font-bold text-slate-800">
              {book.yearOfPublishing}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-400">Publisher</p>
            <p className="mt-1 truncate font-bold text-slate-800">
              {book.publisher}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-400">Book ID</p>
            <p className="mt-1 font-bold text-slate-800">
              #{book.bookId}
            </p>
          </div>

        </div>

        {/* Button */}
        <div className="card-actions mt-6 justify-end">
          <ReadButton book= {book}/>
          <WishListButton book={book}/>
        </div>

      </div>
    </div>
  </div>
);


};

export default BookDetailsPage;