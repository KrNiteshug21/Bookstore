"use client";
import Navbar from "../../comp/Navbar";
import { DataContext } from "../../../context/DataContext";
import { useState, useEffect, useContext } from "react";

const Book = ({ params: bookId }) => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { handleAddCart, price } = useContext(DataContext);
  const id = bookId.bookId;
  const imageURL = `https://www.gutenberg.org/cache/epub/${id}/pg${id}.cover.medium.jpg`;

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch(`https://gutendex.com/books/${id}/`);
      if (!res.ok) throw new Error("Couldn't fetch requested resource");
      const book = await res.json();
      setBook(book);
      setLoading(true);
    };

    fetchBooks();
  }, [id]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        {loading === true ? (
          <div className="setWidth flex flex-row flex-wrap gap-6 pt-24 pb-8">
            <div className="flex-initial">
              <img className="" src={imageURL} alt={book.title} fill={true} />
            </div>
            <div className="flex-initial">
              <h2 className="text-3xl">{book.title}</h2>
              <p>
                {book?.authors?.map((author) => {
                  <span>
                    Author: {author.name} from ({author.birth_year} -{" "}
                    {author.death_year})
                  </span>;
                })}
              </p>
              <p>
                {book?.bookshelves?.map((genre, i) => (
                  <span key={i}>{genre}, </span>
                ))}
              </p>
              <div>
                <p>Details in points: </p>
                <ul className="list-disc">
                  {book?.subjects?.map((subject, i) => (
                    <li key={i} className="ml-4">
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
              <p>{}</p>
              <p className="flex flex-row items-center">
                Price: ₹{price(book.id)}
              </p>
              <div className="flex flex-row gap-4 py-4">
                <button
                  onClick={() => handleAddCart(book)}
                  className="bg-primary-clr-purple rounded-lg text-white px-4 py-2"
                >
                  Add to Cart
                </button>
                <button className="bg-primary-clr-purple rounded-lg text-white px-4 py-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid place-content-center h-96 ">
            <h1 className="setWidth  text-4xl  font-medium">Loading...</h1>
          </div>
        )}
      </main>
    </>
  );
};

export default Book;
