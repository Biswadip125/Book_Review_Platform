import { useEffect, useState } from "react";
import BookComponent from "./Book";
import axios from "axios";
const HeroSection = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await axios.get("http://localhost:3000/books/");
      console.log(result.data.books);
      setBooks(result.data.books);
    };

    fetchBooks();
  }, []);

  return (
    <div className="max-w-[1280px] w-full mx-auto px-4 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Featured books</h1>

      <div className="flex flex-wrap gap-6 max-w-[1200px] mx-auto w-full">
        {books.map((book) => (
          <BookComponent key={book._id} bookDetails={book} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
