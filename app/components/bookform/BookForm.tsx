export default function BookForm() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form action="/books/new" method="POST" className="w-full max-w-lg bg-amber-950 p-8 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add New Book</h2>

        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1">Title:</label>
          <input type="text" id="title" name="title" className="border rounded p-2" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="author" className="mb-1">Author:</label>
          <input type="text" id="author" name="author" className="border rounded p-2" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="pages" className="mb-1">Pages:</label>
          <input type="number" id="pages" name="pages" className="border rounded p-2" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="publisher" className="mb-1">Publisher:</label>
          <input type="text" id="publisher" name="publisher" className="border rounded p-2" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="isbn" className="mb-1">ISBN:</label>
          <input type="text" id="isbn" name="isbn" className="border rounded p-2" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="published_at" className="mb-1">Published At:</label>
          <input type="date" id="published_at" name="published_at" className="border rounded p-2" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="genre" className="mb-1">Genre:</label>
          <input type="text" id="genre" name="genre" className="border rounded p-2" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="cover_img" className="mb-1">Cover Image:</label>
          <input type="text" id="cover_img" name="cover_img" className="border rounded p-2" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="mb-1">Description:</label>
          <textarea id="description" name="description" rows={4} className="border rounded p-2"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded">
          Add Book
        </button>
      </form>
    </div>
  );
}
