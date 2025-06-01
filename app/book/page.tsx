import BookCard from "../components/book/BookCard";
import BookInfo from "../components/book/BookInfo";

export default function page() {
  return (
    <div>
      <h1>Book Page</h1>
      <BookCard>
        <BookInfo img={"https://m.media-amazon.com/images/I/81Q54mEEcBL._SL1500_.jpg"} title={"Percy Jackson and the Lighting Thief"} author={"Rick Riordan"} pages={365} />
      </BookCard>
      <BookCard>
        <BookInfo img={"https://m.media-amazon.com/images/I/91YMTyxpWLL._SL1500_.jpg"} title={"The Sea of Monsters"} author={"Rick Riordan"} pages={365} />
      </BookCard>
      <BookCard>
        <BookInfo img={"https://m.media-amazon.com/images/I/91Ca-K4vjOL._SL1500_.jpg"} title={"The Titan's Curse"} author={"Rick Riordan"} pages={365} />
      </BookCard>
    </div>
  )
}
