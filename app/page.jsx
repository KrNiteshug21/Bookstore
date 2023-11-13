import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bgRoot">
        <div className="max-w-lg mr-8 leading-5">
          <h1 className="text-3xl pb-2">
            Welcome to the <b>Bookstore!</b>
          </h1>
          <p className="text-black/80 text-lg">
            Dive into a world of imagination with our extensive collection of
            books. From timeless classics to the latest bestsellers, we have
            something for every reader.
          </p>
          <Link href="/books">
            <button className="bg-primary-clr-dark text-border-clr px-4 py-2 rounded-md text-lg no-underline my-8">
              Get Started
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
