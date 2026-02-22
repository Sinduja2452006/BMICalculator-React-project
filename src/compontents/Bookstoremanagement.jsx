import React, { useState } from "react";

function Bookstoremanagement() {
 const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [showBooks, setShowBooks] = useState(false);

  const handleAddBook = (e) => {
    e.preventDefault();

    if (!isbn || !title || !author || !price) {
      setError("Please fill in all fields.");
      return;
    }

    const newBook = { isbn, title, author, price };
    setBooks([...books, newBook]);

    setIsbn("");
    setTitle("");
    setAuthor("");
    setPrice("");
    setError("");
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h2>Bookstore Management App</h2>

      <form onSubmit={handleAddBook}>
        <div>
          <label>ISBN: </label>
          <input
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author: </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <button type="submit">Add Book</button>
          <button type="button" onClick={() => setShowBooks(!showBooks)}>
            {showBooks ? "Hide Books" : "View Books"}
          </button>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {showBooks && (
        <div style={{ marginTop: "20px" }}>
          <h3>Entered Books</h3>
          {books.length === 0 ? (
            <p>No books added yet.</p>
          ) : (
            <table
              border="1"
              cellPadding="8"
              style={{ borderCollapse: "collapse", width: "100%" }}
            >
              <thead>
                <tr style={{ backgroundColor: "#000000" }}>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={index}>
                    <td>{book.isbn}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>${book.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}



export default Bookstoremanagement;





