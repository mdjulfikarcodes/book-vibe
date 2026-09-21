
import React from "react";
import { IBook } from "@/types/books.type";
import BookCard from "@/components/shared/BookCard";

const getBooks = async () => {
  try{
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
  const data = await res.json();
  return data;
  } catch (error) {
    console.error("Error fetching books data", error);
    return [];
  }
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-16 px-4">

      {/* Section Header */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Featured Collection
        </p>

        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Explore All Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Discover timeless classics, inspiring stories, and unforgettable
          books from our collection.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {booksData.map((book:IBook, ind:number) => {
            return <BookCard key={ind} book={book}/>

        })}

      </div>
    </section>
  );
};

export default Books;
