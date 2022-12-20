import React from "react";

function Contact() {
  return (
    <div className="container-xxl py-6" id="contact">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-3">Get In Touch</h1>
            <p className="mb-4">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.{" "}
              <a href="https://htmlcodex.com/contact-form">Download Now</a>.
            </p>
            <div className="d-flex mb-4">
              <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                <i className="fa fa-phone-alt"></i>
              </div>
              <div className="ms-3">
                <p className="mb-2">Call Us</p>
                <h5 className="mb-0">+012 345 6789</h5>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="ms-3">
                <p className="mb-2">Mail Us</p>
                <h5 className="mb-0">info@example.com</h5>
              </div>
            </div>
            <div className="d-flex mb-0">
              <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <div className="ms-3">
                <p className="mb-2">Our Office</p>
                <h5 className="mb-0">123 Street, New York, USA</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 150 }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary rounded-pill py-3 px-5"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
