import './App.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg py-2 sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 text-primary d-flex align-items-center" href="/">
          <i className="fa-solid fa-book" style={{ color: 'rgb(0, 145, 255)' }}></i>
          BookStore
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link px-3 fw-medium" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3 fw-medium" href="#">Books</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3 fw-medium" href="#Team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3 fw-medium" href="#Contact">Contact</a>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <button type="button" className="btn btn-outline-primary px-4">Login</button>
            <button type="button" className="btn btn-primary px-4">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <>
      <div className="container my-5 border rounded shadow p-5 bg-light">
        <div className="row">
          <div className="col-md-8">
            <div className="hero-content">
              <h1 className="fw-bold mb-4">Hansel and Gretel - Petualangan Kakak Beradik</h1>
              <p className="mb-4">Mengisahkan tentang dua bersaudara yang ditelantarkan di dalam hutan karena kemiskinan keluarga mereka. Saat tersesat, mereka menemukan rumah permen milik penyihir jahat yang kemudian mengurung Hansel untuk digemukkan dan dimakan. Namun, berkat kecerdikan Gretel, mereka berhasil mendorong penyihir itu ke dalam oven dan pulang membawa harta karun.</p>
              <a href="#" className="btn btn-primary btn-md me-3 px-4">Buy now</a>
              <a href="#" className="btn btn-outline-dark btn-md px-4">Detail</a>
            </div>
          </div>
          <div className="col-md-4">
            <img src="../src/assets/Hansel and Gretel Book Cover.jpg" alt="Books" className="img-fluid rounded ms-5" style={{ width: '230px', height: 'auto' }} />
          </div>
        </div>
      </div >
    </>
  )
}

function Album() {
  return (
    <>
      <div className="album bg-primary">
        <section className="py-3 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light text-white">Bookstore Album</h1>
              <p className="lead text-white">
                Koleksi buku terbaik pilihan kami. Temukan wawasan baru dan perluas pengetahuan Anda melalui bacaan berkualitas.
              </p>
              <p>
                <a href="#" className="btn btn-light my-2 me-2">Lihat Semua Koleksi</a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col-md-4" >
                <div className="card shadow-sm h-100">
                  <img src="../src/assets/Dragon Treasure.jpg" width='auto' height='350px' alt="" />
                  <div className="card-body d-flex flex-column">
                    <h5>The Dragon Treasure</h5>
                    <p className="card-text flex-grow-1">Petualangan seorang pangeran muda untuk menemukan harta karun  yang dijaga oleh seekor naga.</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-primary">Beli</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4" >
                <div className="card shadow-sm h-100">
                  <img src="../src/assets/Ugly Duck.jpg" width='auto' height='350px' alt="" />
                  <div className="card-body d-flex flex-column">
                    <h5>The Ugly Duck</h5>
                    <p className="card-text flex-grow-1">seekor anak itik malang yang diejek karena buruk rupa, hingga akhirnya ia tumbuh dewasa menjadi seekor angsa yang sangat cantik.</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-primary">Beli</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4" >
                <div className="card shadow-sm h-100">
                  <img src="../src/assets/Jack and Bean.jpg" width='auto' height='350px' alt="" />
                  <div className="card-body d-flex flex-column">
                    <h5>Jack and Beanstalk</h5>
                    <p className="card-text flex-grow-1">Anak laki-laki yang menemukan benih ajaib yang mana benih itu memberi jalan untuk ke tempat raksasa.</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-primary">Beli</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Team() {
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
                    <a href="https://github.com/1Razn" className="btn btn-sm btn-outline-primary" target='_blank'>
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/faisa-al-farrel-88b063311?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="btn btn-sm btn-outline-primary" target='_blank'>
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://instagram.com/al_frrel" className="btn btn-sm btn-outline-primary" target='_blank'>
                      <i className="fab fa-instagram"></i>
                    </a>
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

function Contact() {
  return (
    <>
      <section id='Contact' className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Contact Us</h1>
            <p className="lead text-muted">Get in touch with us</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4 shadow-lg">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                  </div>
                  <h5 className="card-title fw-bold">Address</h5>
                  <p className="card-text text-muted">
                    Jl. Mawar No. 123<br />
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 shadow-lg">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-envelope fa-2x text-primary"></i>
                  </div>
                  <h5 className="card-title fw-bold">Email</h5>
                  <p className="card-text text-muted">
                    contact@bookstore.com<br />
                    support@bookstore.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 shadow-lg">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="fas fa-phone fa-2x text-primary"></i>
                  </div>
                  <h5 className="card-title fw-bold">Phone</h5>
                  <p className="card-text text-muted">
                    +62 812********<br />
                    Monday-Friday 9am-6pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="bg-primary text-white py-4">
        <div className="container text-center">
          <p className="mb-0">&copy; 2024 Bookstore. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Album />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;