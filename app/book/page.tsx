import BookCard from "../components/book/BookCard";
import BookInfo from "../components/book/BookInfo";
import { fakeBookData } from "../utils/fakeData";
import { BookDataProps } from "../interfaces/interfaces";

export default function page() {
  return (
    <div>
      <h1>Book Page</h1>

      <div className="flex flex-wrap gap-4">
        {
          fakeBookData.map((book: BookDataProps) => (
            <BookCard key={book.ID}>
              <BookInfo img={book.CoverImage} title={book.Title} author={book.Author} pages={book.Pages} />
            </BookCard>
          ))
        }
      </div>
    </div>
  )
}
