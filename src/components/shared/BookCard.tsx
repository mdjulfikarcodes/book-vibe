import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
    book:IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >

            {/* Book Image */}
            <div className="relative h-72 overflow-hidden bg-slate-100">

                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow">
                    {book.category}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 rounded-full bg-slate-900 px-3 py-1.5 text-sm font-medium text-white">
                    <span className="text-yellow-400">★</span>{" "}
                    {book.rating}
                </div>

            </div>

            {/* Card Content */}
            <div className="p-5">

                {/* Book Name */}
                <h3 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                    {book.bookName}
                </h3>

                {/* Author */}
                <p className="mt-1 text-sm text-slate-500">
                    By{" "}
                    <span className="font-medium text-slate-700">
                        {book.author}
                    </span>
                </p>

                {/* Review */}
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Divider */}
                <div className="my-5 border-t border-slate-100" />

                {/* Book Information */}
                <div className="grid grid-cols-3 gap-2">

                    <div>
                        <p className="text-xs text-slate-400">
                            Pages
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-700">
                            {book.totalPages}
                        </p>
                    </div>

                    <div className="border-x border-slate-100 px-2">
                        <p className="text-xs text-slate-400">
                            Published
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">
                            Publisher
                        </p>

                        <p className="mt-1 truncate text-sm font-semibold text-slate-700">
                            {book.publisher}
                        </p>
                    </div>

                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                    <button
                    type="button"
                    className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-sm font-semibold text-white transition-colors duration-300 hover:bg-emerald-600"
                >
                    View Details
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </button>
                </Link>

            </div>
        </div>
    );
};

export default BookCard;