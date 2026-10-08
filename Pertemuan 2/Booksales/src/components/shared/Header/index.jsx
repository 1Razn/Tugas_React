import { Link, NavLink } from "react-router"

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg py-2 sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4 text-primary d-flex align-items-center" to="/">
            <i className="fa-solid fa-book" style={{ color: 'rgb(0, 145, 255)' }}></i>
            BookStore
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link px-3 fw-medium" to="/" end>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3 fw-medium" to="/books">Books</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3 fw-medium" to="/team">Team</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3 fw-medium" to="/contact">Contact</NavLink>
              </li>
            </ul>

            <div className="d-flex gap-2">
              <NavLink to="/login">
                <button type="button" className="btn btn-outline-primary px-4">Login</button>
              </NavLink>
              <NavLink to="/register">
                <button type="button" className="btn btn-primary px-4">Register</button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}