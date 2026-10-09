import { useState } from "react";
import { Link } from "react-router";
import Books from "../../../utils/Books";
import Hansel from "../../../assets/Buku/Hansel and Gretel Book Cover.jpg";

export default function ProductList() {
  const [bookList, setBookList] = useState(Books);

  const handleAddBook = () => {
    const newBook = {
      id: bookList.length + 1,
      title: "Hansel and Gretel",
      author: "Grimm Brothers",
      year: 2026,
      description:
        "Petualangan menegangkan kakak beradik yang tersesat di hutan dan menemukan rumah permen misterius milik seorang penyihir.",
      image: Hansel,
    };
    setBookList([...bookList, newBook]);
  };

  return (
    <>
      <div className="album bg-primary">
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light text-white">Bookstore Album</h1>
              <p className="lead text-white">
                Koleksi buku terbaik pilihan kami. Temukan wawasan baru dan
                perluas pengetahuan Anda melalui bacaan berkualitas.
              </p>
              <p>
                <Link to="/books" className="btn btn-outline-light my-2 me-2">
                  Lihat Semua Koleksi
                </Link>
                <button
                  onClick={handleAddBook}
                  className="btn btn-success my-2"
                >
                  + Tambah Buku
                </button>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {bookList.map((book) => (
                <div className="col-md-4" key={book.id}>
                  <div className="card shadow-sm h-100">
                    <img
                      src={book.image}
                      width="auto"
                      height="350px"
                      alt={book.title}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5>{book.title}</h5>
                      <p className="card-text flex-grow-1">
                        {book.description}
                      </p>
                      <small className="text-muted mb-2">
                        by {book.author} • {book.year}
                      </small>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="btn-group">
                          <Link to="/books">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                          </Link>
                          <Link to="/books">
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                            >
                              Beli
                            </button>
                          </Link>
                        </div>
                        <small className="text-body-secondary">
                          {book.year}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}