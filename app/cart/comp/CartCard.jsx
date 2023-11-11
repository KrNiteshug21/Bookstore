import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";

export default function CartCard({ book }) {
  const { price, handleDeleteCart } = useContext(DataContext);
  const imageURL = `https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`;
  console.log(book);

  return (
    <div className="flex flex-wrap gap-4 px-6">
      <div className="w-24">
        <img
          className="h-full w-auto rounded-md"
          src={imageURL}
          alt={book.title}
        />
      </div>
      <div>
        <p className="text-2xl break-words">{book.title}</p>
        <p className="text-xl">
          Language:{" "}
          {book.languages.map((lang, i) => (
            <span key={i}>{lang}</span>
          ))}
        </p>
        <p className="flex flex-row content-center text-xl">
          Each: ₹{price(book.download_count)}
        </p>
        <button onClick={() => handleDeleteCart(book)}>
          <AiFillDelete size={40} />{" "}
        </button>
      </div>
    </div>
  );
}
