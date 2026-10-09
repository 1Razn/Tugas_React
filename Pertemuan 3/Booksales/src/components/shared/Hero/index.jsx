import { Link } from "react-router";
import Books from "../../../utils/Books";

export default function Hero() {
  const Hero = Books.find((book) => book.id === 1);

  return (
    <>
      <div className="container my-5 border rounded shadow p-5 bg-light">
        <div className="row">
          <div className="col-md-8">
            <div className="hero-content">
              <h1 className="fw-bold mb-4">{Hero.title} - Petualangan Kakak Beradik</h1>
              <p className="mb-4">{Hero.sinopsis}</p>
              <Link to="/books" className="btn btn-primary btn-md me-3 px-4">Buy now</Link>
              <Link to="/books" className="btn btn-outline-dark btn-md px-4">Detail</Link>
            </div>
          </div>
          <div className="col-md-4">
            <img src={Hero.image} alt={Hero.title} className="img-fluid rounded ms-5" style={{ width: '230px', height: 'auto' }} />
          </div>
        </div>
      </div >
    </>
  )
}
