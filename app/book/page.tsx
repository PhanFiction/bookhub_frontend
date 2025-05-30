import BookCard from "../components/bookcard/BookCard";
import BookInfo from "../components/bookcard/BookInfo";

export default function page() {
  return (
    <div>
      <h1>Book Page</h1>
      <BookCard>
        <BookInfo title={"Percy Jackson and the Lighting Thief"} author={"Rick Riordan"} pages={365} />
      </BookCard>
    </div>
  )
}
