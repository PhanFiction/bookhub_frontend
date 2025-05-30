import Image from "next/image";
import BookInfo from "./BookInfo";

export default function Book() {
  return (
    <div>
      <Image src="/path/to/book-cover.jpg" alt="Book Cover" width={150} height={200} />
      <div>
        <BookInfo />
      </div>
    </div>
  )
}
