import Image from "next/image";

export default function Book() {
  return (
    <div>
      <Image src="/path/to/book-cover.jpg" alt="Book Cover" width={150} height={200} />
      <div>
        <h1>Book</h1>
        <p>Book details will be displayed here.</p>
        <p>350 Pages</p>
      </div>
    </div>
  )
}
