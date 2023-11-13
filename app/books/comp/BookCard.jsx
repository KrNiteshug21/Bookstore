import Link from "next/link";
import { DataContext } from "../../../context/DataContext";
import { useContext } from "react";

export default function BookCard({ book }) {
  const { handleAddCart } = useContext(DataContext);
  const imageSrc = `https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`;
  return (
    <div className="flex flex-col gap-2 content-center py-4">
      <Link href={`/books/${book.id}`}>
        <img
          className="text-white rounded-lg"
          src={imageSrc}
          alt={book.title}
        />
      </Link>
      <button
        className="bg-primary-clr-purple rounded-lg text-white text-lg px-4 py-2 "
        onClick={() => handleAddCart(book)}
      >
        Add to Cart{" "}
      </button>
    </div>
  );
}
