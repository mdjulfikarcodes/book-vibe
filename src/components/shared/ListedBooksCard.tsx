import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
    book: IBook
}

const ListedBooksCard = ({ book }: IBookCardProps) => {
    return (
                <div className="group flex space-y-[25px] flex-col items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row">

            {/* Book Image */}
            <div className="relative h-72 w-full shrink-0 overflow-hidden bg-slate-100 md:h-auto md:w-56 lg:w-64">
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

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 md:p-6">

                {/* Book Name */}
                <h3 className="line-clamp-1 text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
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

                {/* Book Information */}
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5">

                    <div>
                        <p className="text-xs text-slate-400">
                            Pages
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-700">
                            {book.totalPages}
                        </p>
                    </div>

                    <div className="border-x border-slate-100 px-3">
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
                <div className="mt-5">
                    <Link href={`/books/${book.bookId}`}>
                        <button
                            type="button"
                            className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-sm font-semibold text-white transition-colors duration-300 hover:bg-emerald-600 md:w-48"
                        >
                            View Details
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ListedBooksCard;