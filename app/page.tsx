'use client'
import { useState, useEffect } from 'react';
import BookCard from './components/book/BookCard';
import BookInfo from './components/book/BookInfo';
import Button from './components/button';
import BookForm from './components/bookform';

type Book = {
  ID: number;
  CoverImg?: string;
  Title?: string;
  Author?: string;
  Pages?: number;
};

export default function Page() {
  const [showForm, setShowForm] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    pages: 0,
    publisher: '',
    isbn: '',
    published_at: '',
    genre: '',
    cover_img: '',
    description: ''
  });

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // only include if your backend uses cookies
      });
      const data = await res.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  const handleAddNewBookClick = () => setShowForm(!showForm);

  const handleCloseForm = () => setShowForm(false);
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const submitBookForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend API
    console.log("Form submitted with data:", formData);
    // Reset form after submission
    setFormData({
      title: '',
      author: '',
      pages: 0,
      publisher: '',
      isbn: '',
      published_at: '',
      genre: '',
      cover_img: '',
      description: ''
    });
  };

  return (
    <div>
      <h1>Book Page</h1>
      <Button onClick={() => handleAddNewBookClick()}>
        {showForm ? "Hide Form" : "Add New Book"}
        {/* Toggle text based on form visibility */}
      </Button>

      {showForm && <div className="fixed inset-0 bg-black opacity-50 z-2"></div>}       
      {/* Create button to toggle form */}
      <div className="-bottom-48 w-100 z-4 absolute">
        {showForm && <BookForm formData={formData} handleFormChange={handleFormChange} handleSubmit={submitBookForm} handleClose={handleCloseForm}/>}
      </div>

      <div className="flex flex-wrap gap-4">
        {
          books.map((book) => (
              <BookCard key={book.ID as number}>
                <BookInfo
                  id={book.ID as number}
                  coverImage={book.CoverImg ?? ""}
                  title={book.Title ?? "Unknown Title"}
                  author={book.Author ?? "Unknown Author"}
                  pages={book.Pages ?? 0}
                />
              </BookCard>
            ))
        }
      </div>
    </div>
  )
}
