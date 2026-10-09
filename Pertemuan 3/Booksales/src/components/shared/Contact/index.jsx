export default function Contact() {
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