import React from "react";

interface BookFormProps {
  formData: {
    title: string;
    author: string;
    pages: number;
    publisher: string;
    isbn: string;
    published_at: string;
    genre: string;
    cover_img: string;
    description: string;
  };

  handleFormChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;

  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function BookForm({ formData, handleFormChange, handleSubmit }: BookFormProps) {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form action="/books/new" method="POST" className="w-full max-w-lg bg-amber-950 p-8 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add New Book</h2>

        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1">Title:</label>
          <input type="text" id="title" name="title" className="border rounded p-2" value={formData.title} onChange={handleFormChange} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="author" className="mb-1">Author:</label>
          <input type="text" id="author" name="author" className="border rounded p-2" value={formData.author} onChange={handleFormChange} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="pages" className="mb-1">Pages:</label>
          <input type="number" id="pages" name="pages" className="border rounded p-2" value={formData.pages} onChange={handleFormChange} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="publisher" className="mb-1">Publisher:</label>
          <input type="text" id="publisher" name="publisher" className="border rounded p-2" value={formData.publisher} onChange={handleFormChange} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="isbn" className="mb-1">ISBN:</label>
          <input type="text" id="isbn" name="isbn" className="border rounded p-2" value={formData.isbn} onChange={handleFormChange} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="published_at" className="mb-1">Published At:</label>
          <input type="date" id="published_at" name="published_at" className="border rounded p-2" value={formData.published_at} onChange={handleFormChange} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="genre" className="mb-1">Genre:</label>
          <input type="text" id="genre" name="genre" className="border rounded p-2" value={formData.genre} onChange={handleFormChange} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="cover_img" className="mb-1">Cover Image:</label>
          <input type="text" id="cover_img" name="cover_img" className="border rounded p-2" value={formData.cover_img} onChange={handleFormChange} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="mb-1">Description:</label>
          <textarea id="description" name="description" rows={4} className="border rounded p-2" value={formData.description} onChange={handleFormChange}></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </div>
  );
}
