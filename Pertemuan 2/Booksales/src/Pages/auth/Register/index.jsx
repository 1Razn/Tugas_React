import { Link } from "react-router";

export default function Register() {
  return (
    <>
      <div className="modal modal-sheet position-static d-block p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
        <div className="modal-dialog">
          <div className="modal-content rounded-4 shadow">
            <div className="d-flex justify-content-start mx-3 mt-1">
              <Link to="/">
                <button className="w-auto mb-2 my-2 btn btn-md rounded-3" type="submit">
                  <i className="fa fa-arrow-left" style={{ color: "#69686e" }}></i>
                </button>
              </Link>
            </div>
            <div className="modal-header p-3 pb-4 border-bottom-0 d-flex justify-content-center">
              <h1 className="fw-bold mb-0 fs-2">Register</h1>
            </div>

            <div className="modal-body p-5 pt-0">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">
                  Register
                </button>

                <div className="d-flex justify-content-center align-items-center">
                  <small className="text-body-secondary">
                    If you already have an account,
                  </small>

                  <Link to="/login" className="">
                    <p className="text-body-secondary m-0 ps-1" style={{ fontSize: "14px" }}>
                      Login
                    </p>
                  </Link>
                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-center">
                  <h2 className="fs-5 fw-bold mb-4">Or use a third-party</h2>
                </div>

                <div className="d-inline-flex justify-content-center align-items-center w-100">
                  <button className="py-2 mb-2 btn btn-outline-secondary rounded-3 me-2 ms-2" type="button">
                    <i className="fab fa-google"></i>
                  </button>

                  <button className="py-2 mb-2 btn btn-outline-primary rounded-3 me-2 ms-2" type="button">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button className="py-2 mb-2 btn btn-outline-dark rounded-3 me-2 ms-2" type="button">
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}