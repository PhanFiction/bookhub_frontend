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

  const handleCloseForm = () => {
    setShowForm(false);
  }

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
