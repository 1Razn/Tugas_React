import { Link } from "react-router";

export default function ProductList() {
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
                <Link to="/books" className="btn btn-light my-2 me-2">Lihat Semua Koleksi</Link>
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