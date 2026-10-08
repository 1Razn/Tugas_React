import { Link } from "react-router";

export default function Hero() {
  return (
    <>
      <div className="container my-5 border rounded shadow p-5 bg-light">
        <div className="row">
          <div className="col-md-8">
            <div className="hero-content">
              <h1 className="fw-bold mb-4">Hansel and Gretel - Petualangan Kakak Beradik</h1>
              <p className="mb-4">Mengisahkan tentang dua bersaudara yang ditelantarkan di dalam hutan karena kemiskinan keluarga mereka. Saat tersesat, mereka menemukan rumah permen milik penyihir jahat yang kemudian mengurung Hansel untuk digemukkan dan dimakan. Namun, berkat kecerdikan Gretel, mereka berhasil mendorong penyihir itu ke dalam oven dan pulang membawa harta karun.</p>
              <Link to="/books" className="btn btn-primary btn-md me-3 px-4">Buy now</Link>
              <Link to="/books" className="btn btn-outline-dark btn-md px-4">Detail</Link>
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
