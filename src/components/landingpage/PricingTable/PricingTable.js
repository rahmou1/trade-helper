import React from "react";

function PricingTable() {
  return (
    <div className="container-xxl py-6" id="pricing">
      <div className="container">
        <div
          className="mx-auto text-center wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxwidth: 600 }}
        >
          <h1 className="mb-3">Pricing Plan</h1>
          <p className="mb-5">
            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
            labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
            sit clita duo justo
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="price-item rounded overflow-hidden">
              <div className="bg-dark p-4">
                <h4 className="text-white mt-2">Standard</h4>
                <div className="text-white">
                  <span className="align-top fs-4 fw-bold">$</span>
                  <h1 className="d-inline display-6 text-primary mb-0">
                    {" "}
                    29.99
                  </h1>
                  <span className="align-baseline">/ Month</span>
                </div>
              </div>
              <div className="p-4">
                <div className="d-flex justify-content-between mb-3">
                  <span>HTML5 & CSS3</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Bootstrap v5</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Responsive Layout</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Cross-browser Support</span>
                  <i className="fa fa-times text-danger pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Remove Author's Credit</span>
                  <i className="fa fa-times text-danger pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>PHP & Ajax Contact Form</span>
                  <i className="fa fa-times text-danger pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>6 Months Free Support</span>
                  <i className="fa fa-times text-danger pt-1"></i>
                </div>
                <a
                  href="#contact"
                  className="btn btn-dark rounded-pill py-2 px-4 mt-3"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="price-item rounded overflow-hidden">
              <div className="bg-primary p-4">
                <h4 className="text-white mt-2">Professional</h4>
                <div className="text-white">
                  <span className="align-top fs-4 fw-bold">$</span>
                  <h1 className="d-inline display-6 text-dark mb-0"> 49.99</h1>
                  <span className="align-baseline">/ Month</span>
                </div>
              </div>
              <div className="p-4">
                <div className="d-flex justify-content-between mb-3">
                  <span>HTML5 & CSS3</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Bootstrap v5</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Responsive Layout</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Cross-browser Support</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Remove Author's Credit</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>PHP & Ajax Contact Form</span>
                  <i className="fa fa-times text-danger pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>6 Months Free Support</span>
                  <i className="fa fa-times text-danger pt-1"></i>
                </div>
                <a
                  href="#contact"
                  className="btn btn-primary rounded-pill py-2 px-4 mt-3"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="price-item rounded overflow-hidden">
              <div className="bg-dark p-4">
                <h4 className="text-white mt-2">Ultimate</h4>
                <div className="text-white">
                  <span className="align-top fs-4 fw-bold">$</span>
                  <h1 className="d-inline display-6 text-primary mb-0">
                    {" "}
                    79.99
                  </h1>
                  <span className="align-baseline">/ Month</span>
                </div>
              </div>
              <div className="p-4">
                <div className="d-flex justify-content-between mb-3">
                  <span>HTML5 & CSS3</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Bootstrap v5</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Responsive Layout</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Cross-browser Support</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Remove Author's Credit</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>PHP & Ajax Contact Form</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>6 Months Free Support</span>
                  <i className="fa fa-check text-success pt-1"></i>
                </div>
                <a
                  href="#contact"
                  className="btn btn-dark rounded-pill py-2 px-4 mt-3"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTable;
