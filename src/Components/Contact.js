import React from "react";

function Contact() {
  return (
    <div>
      <body>
        <div className="py-1 top-wrap">
          <div className="container-xl">
            <div className="row justify-content-between">
              <div className="col-md topper d-flex mb-md-0 align-items-xl-center">
                <div className="text">
                  <p className="con">
                    <span>Free Call</span> <span>+1 234 456 78910</span>
                  </p>
                </div>
              </div>
              <div className="col-md topper d-flex mb-md-0 align-items-xl-center">
                <div className="text text-md-right">
                  <p className="con">
                    <a href="/">Facebook</a> <a href="/">Twitter</a>{" "}
                    <a href="/">Dribbble</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg  ftco-navbar-light">
          <div className="container-xl">
            <a className="navbar-brand d-flex align-items-center" href="index.html">
              <span className="flaticon flaticon-compass"></span>
              <span className="">
                Directone <small>Directory and Listing</small>
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="listing.html">
                    Listing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <p className="mb-0">
                <a href="/" className="btn btn-primary rounded">
                  <span className="ion-ios-add"></span> Add Listing
                </a>
              </p>
            </div>
          </div>
        </nav>
        <section
  classNameName="hero-wrap hero-wrap-2"
  style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}
>
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
              <div className="col-md-9 pt-5 text-center">
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <a href="index.html">
                      Home <i className="fa fa-chevron-right"></i>
                    </a>
                  </span>{" "}
                  <span>
                    Contact <i className="fa fa-chevron-right"></i>
                  </span>
                </p>
                <h1 className="mb-0 bread">Contact us</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pt ftco-no-pb">
          <div className="container-xl-fluid">
            <div className="row no-gutters justify-content-center">
              <div className="col-md-12">
                <div className="wrapper">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3>Contact us</h3>
                        <p className="mb-4">
                          We're open for any suggestion or just to have a chat
                        </p>
                        <div className="row mb-4">
                          <div className="col-md-4">
                            <div className="dbox w-100 d-flex align-items-start">
                              <div className="text">
                                <p>
                                  <span>Address:</span> 198 West 21th Street,
                                  Suite 721 New York NY 10016
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="dbox w-100 d-flex align-items-start">
                              <div className="text">
                                <p>
                                  <span>Email:</span>{" "}
                                  <a href="/cdn-cgi/l/email-protection#ec85828a83ac9583999e9f859889c28f8381">
                                    <span
                                      className="__cf_email__"
                                      data-cfemail="563f383039162f392324253f22337835393b"
                                    >
                                      Ishankhaliwala312
                                    </span>
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="dbox w-100 d-flex align-items-start">
                              <div className="text">
                                <p>
                                  <span>Phone:</span>{" "}
                                  <a href="tel://1234567920">+ 9988776655</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <form
                          id="contactForm"
                          name="contactForm"
                          className="contactForm"
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  cols="30"
                                  rows="4"
                                  placeholder="Create a message here"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="submit"
                                  value="Send Message"
                                  className="btn btn-primary"
                                />
                                <div className="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="w-100 social-media mt-5">
                          <h3>Follow us here</h3>
                          <p>
                            <a href="/">Facebook</a>
                            <a href="/">Twitter</a>
                            <a href="/">Instagram</a>
                            <a href="/">Dribbble</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-stretch">
                    <div
  classNameName="img w-100"
  style={{ backgroundImage: "url(assets/images/about.jpg)" }}
></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="ftco-footer">
          <div className="container-xl">
            <div className="row mb-5 pb-5 justify-content-between">
              <div className="col-md-6 col-lg">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2 logo d-flex">
                    <a
                      className="navbar-brand align-items-center"
                      href="index.html"
                    >
                      <span className="">
                        Directone <small>Directory and Listing</small>
                      </span>
                    </a>
                  </h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <ul className="ftco-footer-social list-unstyled mt-2">
                    <li>
                      <a href="/">
                        <span className="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Explore</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>About Us
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Account
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Listing
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Pricing
                        Packages
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Pricing
                        Packages
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Quick Links</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Terms
                        &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Privacy
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Feedbacks
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Categories</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Food &amp;
                        Drinks
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Hotels
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Shopping
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Beauty
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Fitness
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="fa fa-chevron-right mr-2"></span>Bar &amp;
                        Club
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li>
                        <span className="icon fa fa-map marker"></span>
                        <span className="text">
                          203 Fake St. Mountain View, San Francisco, California,
                          USA
                        </span>
                      </li>
                      <li>
                        <a href="/">
                          <span className="icon fa fa-phone"></span>
                          <span className="text">+ 9988776655</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span className="icon fa fa-paper-plane pr-4"></span>
                          <span className="text">
                            <span
                              className="__cf_email__"
                              data-cfemail="dcb5b2bab39ca5b3a9aeb8b3b1bdb5b2f2bfb3b1"
                            >
                              Ishankhaliwala312@gmail.com
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default Contact;
