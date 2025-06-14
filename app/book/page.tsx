'use client'
import { useState } from "react";
import BookCard from "../components/book/BookCard";
import BookInfo from "../components/book/BookInfo";
import { fakeBookData } from "../utils/fakeData";
import Button from "../components/button";
import BookForm from "../components/bookform";

export default function BookPage() {
  const [showForm, setShowForm] = useState(false);
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

  const handleAddNewBookClick = () => setShowForm(!showForm);

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

      {/* Create button to toggle form */}
      <div className="mb-4">
        <Button onClick={() => handleAddNewBookClick()}>
          {showForm ? "Hide Form" : "Add New Book"}
          {/* Toggle text based on form visibility */}
        </Button>
        {showForm && <BookForm formData={formData} handleFormChange={handleFormChange} handleSubmit={submitBookForm}/>}
      </div>

      <div className="flex flex-wrap gap-4">
        {
          fakeBookData.map((book) => (
              <BookCard key={book.id as number}>
                <BookInfo
                  id={book.id as number}
                  coverImage={book.coverImage ?? ""}
                  title={book.title ?? "Unknown Title"}
                  author={book.author ?? "Unknown Author"}
                  pages={book.pages ?? 0}
                />
              </BookCard>
            ))
        }
      </div>
    </div>
  )
}
