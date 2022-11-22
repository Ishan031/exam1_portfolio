import React from "react";

function About() {
  return (
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
                <a className="nav-link active" href="about.html">
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
                <a className="nav-link" href="contact.html">
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
  style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
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
                  About us <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-about-section ftco-no-pt ftco-no-pb">
        <div className="container-xl">
          <div className="row g-xl-5">
            <div
              className="col-md-5 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div
  classNameName="img w-100"
  style={{ backgroundImage: "url(images/about.jpg)" }}
></div>
            </div>
            <div
              className="col-md-7 py-5 heading-section"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="py-md-5">
                <span className="subheading">Welcome to Directone</span>
                <h2 className="mb-4">Directone A Directory &amp; Listing</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <div className="row py-5 g-2">
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                    <div
                      className="counter-wrap"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count1" className="counter" data-count="50">
                            0
                          </span>
                        </span>
                        <p>Years of Experienced</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                    <div
                      className="counter-wrap"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count2" className="counter" data-count="210">
                            0
                          </span>
                          K+
                        </span>
                        <p>Total Listing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                    <div
                      className="counter-wrap"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                    >
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count2" className="counter" data-count="450">
                            0
                          </span>
                        </span>
                        <p>Company Staf</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                    <div
                      className="counter-wrap"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                    >
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count2" className="counter" data-count="100">
                            0
                          </span>
                        </span>
                        <p>Happy People</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section testimony-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center pb-4">
            <div
              className="col-md-7 text-center heading-section"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Happy People</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="carousel-testimony">
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                      <div
  classNameName="user-img"
  style={{ backgroundImage: "url(images/person_1.jpg)" }}
></div>
                        <div className="pl-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                      <div
  classNameName="user-img"
  style={{ backgroundImage: "url(images/person_2.jpg)" }}
></div>
                        <div className="pl-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                      <div
  classNameName="user-img"
  style={{ backgroundImage: "url(images/person_3.jpg)" }}
></div>
                        <div className="pl-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                      <div
  classNameName="user-img"
  style={{ backgroundImage: "url(images/person_1.jpg)" }}
></div>
                        <div className="pl-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                      <div
  classNameName="user-img"
  style={{ backgroundImage: "url(images/person_2.jpg)" }}
></div>
                        <div className="pl-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-intro bg-light">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-stretch">
            <div
  classNameName="img w-100"
  style={{ backgroundImage: "url(images/intro.jpg)" }}
></div>
            </div>
            <div className="col-md-8 aside-stretch aside">
              <div className="row py-md-4">
                <div className="col-md-8 d-flex align-items-center ">
                  <div className="text pt-5 pb-md-5 pb-3 pl-md-5 px-4">
                    <div className="subheading">Special Offers</div>
                    <h2>We Have Special Offers Every Now and Then</h2>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                  <div className="px-4 px-md-0 pb-4 pb-md-0">
                    <p>
                      <a href="/" className="btn btn-darken py-3 px-4">
                        Show Special Offers
                      </a>
                    </p>
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
                  <a className="navbar-brand align-items-center" href="index.html">
                    <span className="">
                      Directone <small>Directory and Listing</small>
                    </span>
                  </a>
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
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
                      <span className="fa fa-chevron-right mr-2"></span>Terms &amp;
                      Conditions
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
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="icon fa fa-paper-plane pr-4"></span>
                        <span className="text">
                          <span
                            className="__cf_email__"
                            data-cfemail="8de4e3ebe2cdf4e2f8ffe9e2e0ece4e3a3eee2e0"
                          >
                            [email&#160;protected]
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
  );
}

export default About;
