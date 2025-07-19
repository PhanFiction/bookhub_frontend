'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

type Book = {
  ID: number | string;
  Title: string;
  Author: string;
  Pages: number;
  Publisher: string;
  ISBN: string;
  PublishedAt: string;
  Genre: string;
  CoverImg: string;
  Description: string;
};

export default function SingleBookPage() {
  const [bookData, setBookData] = useState<Book>({
    ID: 0,
    Title: '',
    Author: '',
    Pages: 0,
    Publisher: '',
    ISBN: '',
    PublishedAt: '',
    Genre: '',
    CoverImg: '',
    Description: ''
  });
  
  const params = useParams();
  const bookId = params.id;

  useEffect(() => {
    const fetchBookDetails = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${bookId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // only include if your backend uses cookies
      });

      if (!res.ok) {
        console.error('Failed to fetch book details');
        return;
      }

      const data = await res.json();
      setBookData(data);
    };

    fetchBookDetails();
  }, [bookId]);

  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Details</h1>

      <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-8 items-start">
        {/* Book Cover */}
        <div className="flex-shrink-0 mx-auto md:mx-0 flex flex-col items-start gap-4">
          <Image
            src={bookData.CoverImg}
            alt={bookData.Title}
            width={200}
            height={300}
            className="rounded-lg shadow-md"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition duration-200"
            onClick={() => console.log('Book saved:', bookData.Title)}
          >
            Save Book
          </button>
        </div>

        {/* Book Info */}
        <div className="text-base text-gray-800 space-y-3">
          <h2 className="text-2xl font-semibold">{bookData.Title}</h2>
          <p><span className="font-medium"><strong>Author:</strong></span> {bookData.Author}</p>
          <p><span className="font-medium"><strong>Pages:</strong></span> {bookData.Pages}</p>
          <p><span className="font-medium"><strong>Publisher:</strong></span> {bookData.Publisher}</p>
          <p><span className="font-medium"><strong>ISBN:</strong></span> {bookData.ISBN}</p>
          <p><span className="font-medium"><strong>Published At:</strong></span> {bookData.PublishedAt}</p>
          <p><span className="font-medium"><strong>Genre:</strong></span> {bookData.Genre}</p>
          <p><span className="font-medium"><strong>Description:</strong></span> {bookData.Description}</p>
        </div>
      </div>
    </div>
  )
}
