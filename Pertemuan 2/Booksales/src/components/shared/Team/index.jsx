import { Link } from "react-router"

export default function Team() {
  return (
    <>
      <section id='Team' className="py-5 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Our Team</h1>
            <p className="lead text-white">Meet our talented team member</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-4 col-lg-3 bg-light rounded shadow p-3 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <img
                  src="../src/assets/Gundam.svg"
                  alt="Profile"
                  className="card-img-top"
                  style={{ height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-2">Faisa Al Farrel</h5>
                  <span className="badge bg-primary mb-3">Fullstack Developer</span>
                  <p className="card-text text-muted small">
                    Berminat untuk menjadi seorang Fullstack Developer, dan ingin mengembangkan kemampuan dalam bidang pengembangan web.
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <Link to="https://github.com/1Razn" className="btn btn-sm btn-outline-primary" target='_blank'>
                      <i className="fab fa-github"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/faisa-al-farrel-88b063311?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="btn btn-sm btn-outline-primary" target='_blank'>
                      <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link to="https://instagram.com/al_frrel" className="btn btn-sm btn-outline-primary" target='_blank'>
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}