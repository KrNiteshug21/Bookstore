import Link from "next/link";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import Image from "next/image";

export default function BookCard({ book }) {
  const { handleAddCart } = useContext(DataContext);
  const imageSrc = `https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`;
  return (
    <div className="flex flex-col gap-2 content-center py-4">
      <Link href={`/books/${book.id}`}>
        <img className="" src={imageSrc} alt={book.title} />
      </Link>
      <button
        className="bg-primary-clr-purple rounded-lg text-white px-4 py-2 "
        onClick={() => handleAddCart(book)}
      >
        Add to Cart{" "}
      </button>
    </div>
  );
}
