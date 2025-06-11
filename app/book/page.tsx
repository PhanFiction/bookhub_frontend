import BookCard from "../components/book/BookCard";
import BookInfo from "../components/book/BookInfo";
import { fakeBookData } from "../utils/fakeData";
import BookInfoProps from "../interfaces/interfaces";

export default function page() {
  return (
    <div>
      <h1>Book Page</h1>

      <div className="flex flex-wrap gap-4">
        {
          fakeBookData.map((book: BookInfoProps) => (
            <BookCard key={book.id}>
              <BookInfo
                id={book.id}
                coverImage={book.coverImage}
                title={book.title}
                author={book.author}
                pages={book.pages}
              />
            </BookCard>
          ))
        }
      </div>
    </div>
  )
}
