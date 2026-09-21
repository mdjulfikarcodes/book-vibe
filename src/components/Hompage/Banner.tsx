import Image from 'next/image';
import React from 'react';

import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">

        <div className="relative overflow-hidden rounded-4xl bg-slate-950">

          {/* Background Glow */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative grid items-center gap-10 px-6 py-10 sm:px-10 md:px-14 md:py-14 lg:grid-cols-2 lg:px-16 lg:py-16">

            {/* Left Content */}
            <div className="max-w-xl">

              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Discover Your Next Read
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
                Books that
                <span className="block bg-linear-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  inspire you.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-lg text-base leading-7 text-slate-400 md:text-lg">
                Discover carefully selected books, explore new stories,
                and find your next favorite read for every mood.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="btn h-12 rounded-xl border-0 bg-emerald-500 px-7 text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
                  Explore Books
                </button>

                <button className="btn h-12 rounded-xl border border-slate-700 bg-transparent px-7 text-slate-200 transition hover:border-slate-500 hover:bg-slate-800">
                  Learn More
                </button>
              </div>
              </div>

            {/* Right Image */}
            <div className="relative flex items-center justify-center lg:justify-end">

              {/* Image Glow */}
              <div className="absolute h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

              {/* Image Card */}
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm">

                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={bannerImg}
                    alt="Featured books"
                    width={600}
                    height={500}
                    priority
                    className="h-auto w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                {/* Floating Label */}
                <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs text-slate-400">
                    Featured Collection
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Curated for you ✨
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;

