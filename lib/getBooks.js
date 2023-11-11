export default async function getBooks() {
  const res = await fetch("https://gutendex.com/books/");

  if (!res.ok) throw new Error("Couldn't fetch requested resource");

  return res.json();
}
