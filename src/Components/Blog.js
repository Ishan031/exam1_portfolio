import React from "react";

function Blog() {
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
                <a href="/">Facebook</a> <a href="/">Twitter</a>
                {"{"}" "{"}"}
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
          <span className="flaticon flaticon-compass" />
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
          <span className="fa fa-bars" /> Menu
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
              <a className="nav-link active" href="blog.html">
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
              <span className="ion-ios-add" /> Add Listing
            </a>
          </p>
        </div>
      </div>
    </nav>
    <section
      className="hero-wrap hero-wrap-2"
      style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
    >
      <div className="overlay" />
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 pt-5 text-center">
            <p className="breadcrumbs">
              <span className="mr-2">
                <a href="index.html">
                  Home <i className="fa fa-chevron-right" />
                </a>
              </span>
              {"{"}" "{"}"}
              <span>
                Blog <i className="fa fa-chevron-right" />
              </span>
            </p>
            <h1 className="mb-0 bread">Our Blog</h1>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section bg-light">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-3 d-flex">
            <div
              className="blog-entry justify-content-end"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <a
                href="blog-single.html"
                className="block-20 img d-flex align-items-end"
                style={{ backgroundImage: 'url("images/image_1.jpg")' }}
              >
                <div className="list-team d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <h3 className="ml-2 mb-0">John Dorf</h3>
                  </div>
                  <div className="text-right">
                    <span className="ion-ios-heart-empty" />
                  </div>
                </div>
              </a>
              <div className="text">
                <p className="meta">
                  <span>Dec. 06, 2020</span>
                  <a href="/">3 Comments</a>
                </p>
                <h3 className="heading mb-3">
                  <a href="/">Explore The Best Restaurant in New York</a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div
              className="blog-entry justify-content-end"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={200}
            >
              <a
                href="blog-single.html"
                className="block-20 img d-flex align-items-end"
                style={{ backgroundImage: 'url("images/image_2.jpg")' }}
              >
                <div className="list-team d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <h3 className="ml-2 mb-0">John Dorf</h3>
                  </div>
                  <div className="text-right">
                    <span className="ion-ios-heart-empty" />
                  </div>
                </div>
              </a>
              <div className="text">
                <p className="meta">
                  <span>Dec. 06, 2020</span>
                  <a href="/">3 Comments</a>
                </p>
                <h3 className="heading mb-3">
                  <a href="/">Explore The Best Restaurant in New York</a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div
              className="blog-entry justify-content-end"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <a
                href="blog-single.html"
                className="block-20 img d-flex align-items-end"
                style={{ backgroundImage: 'url("images/image_3.jpg")' }}
              >
                <div className="list-team d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <h3 className="ml-2 mb-0">John Dorf</h3>
                  </div>
                  <div className="text-right">
                    <span className="ion-ios-heart-empty" />
                  </div>
                </div>
              </a>
              <div className="text">
                <p className="meta">
                  <span>Dec. 06, 2020</span>
                  <a href="/">3 Comments</a>
                </p>
                <h3 className="heading mb-3">
                  <a href="/" mb-3="">
                    Explore The Best Restaurant in New York
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div
              className="blog-entry justify-content-end"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <a
                href="blog-single.html"
                className="block-20 img d-flex align-items-end"
                style={{ backgroundImage: 'url("images/image_4.jpg")' }}
              >
                <div className="list-team d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <h3 className="ml-2 mb-0">John Dorf</h3>
                  </div>
                  <div className="text-right">
                    <span className="ion-ios-heart-empty" />
                  </div>
                </div>
              </a>
              <div className="text">
                <p className="meta">
                  <span>Dec. 06, 2020</span>
                  <a href="/">3 Comments</a>
                </p>
                <h3 className="heading mb-3">
                  <a href="/" mb-3="">
                    Explore The Best Restaurant in New York
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div
              className="blog-entry justify-content-end"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <a
                href="blog-single.html"
                className="block-20 img d-flex align-items-end"
                style={{ backgroundImage: 'url("images/image_5.jpg")' }}
              >
                <div className="list-team d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <h3 className="ml-2 mb-0">John Dorf</h3>
                  </div>
                  <div className="text-right">
                    <span className="ion-ios-heart-empty" />
                  </div>
                </div>
              </a>
              <div className="text">
                <p className="meta">
                  <span>Dec. 06, 2020</span>
                  <a href="/">3 Comments</a>
                </p>
                <h3 className="heading mb-3">
                  <a href="/">Explore The Best Restaurant in New York</a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div
              className="blog-entry justify-content-end"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={200}
            >
              <a
                href="blog-single.html"
                className="block-20 img d-flex align-items-end"
                style={{ backgroundImage: 'url("images/image_6.jpg")' }}
              >
                <div className="list-team d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <h3 className="ml-2 mb-0">John Dorf</h3>
                  </div>
                  <div className="text-right">
                    <span className="ion-ios-heart-empty" />
                  </div>
                </div>
              </a>
              <div className="text">
                <p className="meta">
                  <span>Dec. 06, 2020</span>
                  <a href="/">3 Comments</a>
                </p>
                <h3 className="heading mb-3">
                  <a href="/">Explore The Best Restaurant in New York</a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div
              className="blog-entry justify-content-end"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <a
                href="blog-single.html"
                className="block-20 img d-flex align-items-end"
                style={{ backgroundImage: 'url("images/image_7.jpg")' }}
              >
                <div className="list-team d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <h3 className="ml-2 mb-0">John Dorf</h3>
                  </div>
                  <div className="text-right">
                    <span className="ion-ios-heart-empty" />
                  </div>
                </div>
              </a>
              <div className="text">
                <p className="meta">
                  <span>Dec. 06, 2020</span>
                  <a href="/">3 Comments</a>
                </p>
                <h3 className="heading mb-3">
                  <a href="/" mb-3="">
                    Explore The Best Restaurant in New York
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div
              className="blog-entry justify-content-end"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <a
                href="blog-single.html"
                className="block-20 img d-flex align-items-end"
                style={{ backgroundImage: 'url("images/image_8.jpg")' }}
              >
                <div className="list-team d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <h3 className="ml-2 mb-0">John Dorf</h3>
                  </div>
                  <div className="text-right">
                    <span className="ion-ios-heart-empty" />
                  </div>
                </div>
              </a>
              <div className="text">
                <p className="meta">
                  <span>Dec. 06, 2020</span>
                  <a href="/">3 Comments</a>
                </p>
                <h3 className="heading mb-3">
                  <a href="/" mb-3="">
                    Explore The Best Restaurant in New York
                  </a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <div className="block-27">
              <ul>
                <li>
                  <a href="/">&lt;</a>
                </li>
                <li className="active">
                  <span>1</span>
                </li>
                <li>
                  <a href="/">2</a>
                </li>
                <li>
                  <a href="/">3</a>
                </li>
                <li>
                  <a href="/">4</a>
                </li>
                <li>
                  <a href="/">5</a>
                </li>
                <li>
                  <a href="/">&gt;</a>
                </li>
              </ul>
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
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-instagram" />
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
                    <span className="fa fa-chevron-right mr-2" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-chevron-right mr-2" />
                    Account
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-chevron-right mr-2" />
                    Listing
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-chevron-right mr-2" />
                    Pricing Packages
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-chevron-right mr-2" />
                    Pricing Packages
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
                    <span className="fa fa-chevron-right mr-2" />
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-chevron-right mr-2" />
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-chevron-right mr-2" />
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-chevron-right mr-2" />
                    Feedbacks
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
                    <span className="fa fa-chevron-right mr-2" />
                    Food &amp; Drinks
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-chevron-right mr-2" />
                    Hotels
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-chevron-right mr-2" />
                    Shopping
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-chevron-right mr-2" />
                    Beauty
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-chevron-right mr-2" />
                    Fitness
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fa fa-chevron-right mr-2" />
                    Bar &amp; Club
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
                    <span className="icon fa fa-map marker" />
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <a href="/">
                      <span className="icon fa fa-phone" />
                      <span className="text">+2 392 3929 210</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span className="icon fa fa-paper-plane pr-4" />
                      <span className="text">
                        <span
                          className="__cf_email__"
                          data-cfemail="046d6a626b447d6b7176606b69656d6a2a676b69"
                        >
                          [email&nbsp;protected]
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

export default Blog;
