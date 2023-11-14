"use client";
import Link from "next/link";
import Navbar from "../comp/Navbar";
import { useState, useEffect } from "react";
import BookCard from "./comp/BookCard";

export default function BookPage() {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("https://gutendex.com/books/");
      if (!res.ok) throw new Error("Couldn't fetch requested resource");
      const books = await res.json();
      setBooks(books);
      setLoading(true);
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <main className="pb-8 pt-24">
        <div className="setWidth flex flex-row flex-wrap justify-center gap-4">
          {loading === true ? (
            books?.results?.map((book) => (
              <BookCard key={book.id} book={book} />
            ))
          ) : (
            <div className="grid place-content-center h-96 ">
              <h1 className="setWidth  text-4xl  font-medium">Loading...</h1>
            </div>
          )}
        </div>
        {loading && (
          <div className="setWidth text-center">
            <Link
              href="/cart"
              className="text-3xl py-4 mx-auto no-underline hover:underline"
            >
              Go to CartPage
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
