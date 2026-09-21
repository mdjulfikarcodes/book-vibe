
import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
    try {
        const res = await fetch("http://localhost:3000/booksData.json");

        if (!res.ok) {
            throw new Error("Failed to fetch books data");
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.log("Error fetching books:", error);
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
          Explore Our Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Discover timeless classics, inspiring stories, and unforgettable
          books from our collection.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {booksData.slice(0, 9).map((book:IBook, ind:number) => {
            return <BookCard key={ind} book={book}/>

        })}

      </div>
    </section>
  );
};

export default Books;
