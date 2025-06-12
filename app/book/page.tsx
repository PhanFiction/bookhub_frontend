'use client'
import BookCard from "../components/book/BookCard";
import BookInfo from "../components/book/BookInfo";
import { fakeBookData } from "../utils/fakeData";
import BookInfoProps from "../interfaces/interfaces";
import Button from "../components/button";

export default function BookPage() {
  return (
    <div>
      <h1>Book Page</h1>

      {/* Create button to toggle form */}
      <div className="mb-4">
        <Button onClick={() => console.log("Add New Book clicked")}>
          Add New Book
        </Button>
      </div>

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
