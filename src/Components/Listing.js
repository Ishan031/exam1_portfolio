import React from "react";

function Listing() {
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
                  <a className="nav-link active" href="listing.html">
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
                    Listing <i className="fa fa-chevron-right"></i>
                  </span>
                </p>
                <h1 className="mb-0 bread">Our Listing</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pb bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 mb-5 pb-md-3 heading-section">
                <div className="text-center w-100">
                  <h2 className="mb-3">Let's Explore Your Awesome City</h2>
                </div>
                <form action="#" className="search-property-1 mt-md-4">
                  <div className="row g-0">
                    <div className="col-md d-flex">
                      <div className="form-group p-3 border-0">
                        <div className="form-field">
                          <div className="icon">
                            <span className="fa fa-search"></span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="What are you looking for?"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md d-flex">
                      <div className="form-group p-3">
                        <div className="form-field">
                          <div className="icon">
                            <span className="ion-ios-pin"></span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Location"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md d-flex">
                      <div className="form-group p-3">
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon">
                              <span className="fa fa-chevron-down"></span>
                            </div>
                            <select name="" id="" className="form-control">
                              <option value="">All Categories</option>
                              <option value="">Food &amp; Drinks</option>
                              <option value="">Hotel</option>
                              <option value="">Shopping</option>
                              <option value="">Beauty</option>
                              <option value="">Fitness</option>
                              <option value="">Bar &amp; Club</option>
                              <option value="">Games</option>
                              <option value="">Places</option>
                              <option value="">Circus</option>
                              <option value="">Theater</option>
                              <option value="">Sports</option>
                              <option value="">Health</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md d-flex">
                      <div className="form-group d-flex w-100 border-0">
                        <div className="form-field w-100 align-items-center d-flex align-items-stretch">
                          <a
                            href="/"
                            className="btn btn-primary d-block w-100 d-flex align-items-center justify-content-center py-3"
                          >
                            <span>
                              <i className="ion-ios-search"></i> Search
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-md-12">
                <div className="row g-3">
                  <div
                    className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <a href="/" className="services">
                      <div className="icon">
                        <span className="flaticon-food-and-drink"></span>
                      </div>
                      <div className="text">
                        <h2>Food &amp; Drink</h2>
                        <p className="list">
                          <span>103</span> Listings
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    <a href="/" className="services active">
                      <div className="icon">
                        <span className="flaticon-review"></span>
                      </div>
                      <div className="text">
                        <h2>Hotels</h2>
                        <p className="list">
                          <span>40</span> Listings
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    <a href="/" className="services">
                      <div className="icon">
                        <span className="flaticon-online-shopping"></span>
                      </div>
                      <div className="text">
                        <h2>Shopping</h2>
                        <p className="list">
                          <span>100</span> Listings
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    <a href="/" className="services">
                      <div className="icon">
                        <span className="flaticon-cream"></span>
                      </div>
                      <div className="text">
                        <h2>Beauty</h2>
                        <p className="list">
                          <span>36</span> Listings
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    <a href="/" className="services">
                      <div className="icon">
                        <span className="flaticon-diet"></span>
                      </div>
                      <div className="text">
                        <h2>Fitness</h2>
                        <p className="list">
                          <span>30</span> Listings
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    <a href="/" className="services">
                      <div className="icon">
                        <span className="flaticon-night-club"></span>
                      </div>
                      <div className="text">
                        <h2>Bar &amp; Club</h2>
                        <p className="list">
                          <span>12</span> Listings
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <a href="/" className="services">
                      <div className="icon">
                        <span className="flaticon-joystick"></span>
                      </div>
                      <div className="text">
                        <h2>Games</h2>
                        <p className="list">
                          <span>103</span> Listings
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    <a href="/" className="services">
                      <div className="icon">
                        <span className="flaticon-meeting-point"></span>
                      </div>
                      <div className="text">
                        <h2>Places</h2>
                        <p className="list">
                          <span>40</span> Listings
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    <a href="/" className="services">
                      <div className="icon">
                        <span className="flaticon-amusement-park"></span>
                      </div>
                      <div className="text">
                        <h2>Circus</h2>
                        <p className="list">
                          <span>100</span> Listings
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    <a href="/" className="services">
                      <div className="icon">
                        <span className="flaticon-cinema"></span>
                      </div>
                      <div className="text">
                        <h2>Theater</h2>
                        <p className="list">
                          <span>36</span> Listings
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    <a href="/" className="services">
                      <div className="icon">
                        <span className="flaticon-sport"></span>
                      </div>
                      <div className="text">
                        <h2>Sports</h2>
                        <p className="list">
                          <span>30</span> Listings
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    <a href="/" className="services">
                      <div className="icon">
                        <span className="flaticon-healthy-food"></span>
                      </div>
                      <div className="text">
                        <h2>Health</h2>
                        <p className="list">
                          <span>12</span> Listings
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-md-8 heading-section text-center mb-5"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="subheading">Listing</span>
                <h2 className="mb-4">Our Listing</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="listing-wrap">
                <a
  href="images/list-1.jpg"
  classNameName="img img-property d-flex align-items-center justify-content-center glightbox"
  style={{ backgroundImage: "url(assets/images/list-1.jpg)" }}
>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </a>
                  <div className="text text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-food-and-drink"></span>
                    </div>
                    <span className="subheading">Food &amp; Drinks</span>
                    <h3>
                      <a href="/">Japanese Restaurant</a>
                    </h3>
                    <ul className="">
                      <li>
                        <p>
                          <span className="ion-ios-pin"></span> Suite 721 New York
                          NY 10016
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-phone"></span> +00 123 456 7890
                        </p>
                      </li>
                    </ul>
                    <div className="info-wrap2 d-flex align-items-center">
                      <p className="review">
                        <span className="rev">
                          Review <small>5.0/5</small>
                        </span>{" "}
                        <span className="ico ion-ios-star"></span>
                        <small>(100)</small>
                      </p>
                      <p className="heart">
                        <a
                          href="/"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="ion-ios-heart-empty"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="listing-wrap">
                <a
  href="images/list-2.jpg"
  classNameName="img img-property d-flex align-items-center justify-content-center glightbox"
  style={{ backgroundImage: "url(assets/images/list-2.jpg)" }}
>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </a>
                  <div className="text text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-review"></span>
                    </div>
                    <span className="subheading">Hotel</span>
                    <h3>
                      <a href="/">Harbor Lights Hotel</a>
                    </h3>
                    <ul className="">
                      <li>
                        <p>
                          <span className="ion-ios-pin"></span> Suite 721 New York
                          NY 10016
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-phone"></span> +00 123 456 7890
                        </p>
                      </li>
                    </ul>
                    <div className="info-wrap2 d-flex align-items-center">
                      <p className="review">
                        <span className="rev">
                          Review <small>5.0/5</small>
                        </span>{" "}
                        <span className="ico ion-ios-star"></span>
                        <small>(100)</small>
                      </p>
                      <p className="heart">
                        <a
                          href="/"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="ion-ios-heart-empty"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="listing-wrap">
                <a
  href="images/list-3.jpg"
  classNameName="img img-property d-flex align-items-center justify-content-center glightbox"
  style={{ backgroundImage: "url(assets/images/list-3.jpg)" }}
>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </a>
                  <div className="text text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-online-shopping"></span>
                    </div>
                    <span className="subheading">Shopping</span>
                    <h3>
                      <a href="/">MS Center Mall of Asia</a>
                    </h3>
                    <ul className="">
                      <li>
                        <p>
                          <span className="ion-ios-pin"></span> Suite 721 New York
                          NY 10016
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-phone"></span> +00 123 456 7890
                        </p>
                      </li>
                    </ul>
                    <div className="info-wrap2 d-flex align-items-center">
                      <p className="review">
                        <span className="rev">
                          Review <small>5.0/5</small>
                        </span>{" "}
                        <span className="ico ion-ios-star"></span>
                        <small>(100)</small>
                      </p>
                      <p className="heart">
                        <a
                          href="/"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="ion-ios-heart-empty"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="listing-wrap">
                <a
  href="images/list-4.jpg"
  classNameName="img img-property d-flex align-items-center justify-content-center glightbox"
  style={{ backgroundImage: "url(assets/images/list-4.jpg)" }}
>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </a>
                  <div className="text text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-food-and-drink"></span>
                    </div>
                    <span className="subheading">Gym Fitness</span>
                    <h3>
                      <a href="/">Maxout Fitness Gym</a>
                    </h3>
                    <ul className="">
                      <li>
                        <p>
                          <span className="ion-ios-pin"></span> Suite 721 New York
                          NY 10016
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-phone"></span> +00 123 456 7890
                        </p>
                      </li>
                    </ul>
                    <div className="info-wrap2 d-flex align-items-center">
                      <p className="review">
                        <span className="rev">
                          Review <small>5.0/5</small>
                        </span>{" "}
                        <span className="ico ion-ios-star"></span>
                        <small>(100)</small>
                      </p>
                      <p className="heart">
                        <a
                          href="/"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="ion-ios-heart-empty"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="listing-wrap">
                <a
  href="images/list-5.jpg"
  classNameName="img img-property d-flex align-items-center justify-content-center glightbox"
  style={{ backgroundImage: "url(assets/images/list-5.jpg)" }}
>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </a>
                  <div className="text text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-food-and-drink"></span>
                    </div>
                    <span className="subheading">Beauty</span>
                    <h3>
                      <a href="/">Japanese Restaurant</a>
                    </h3>
                    <ul className="">
                      <li>
                        <p>
                          <span className="ion-ios-pin"></span> Suite 721 New York
                          NY 10016
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-phone"></span> +00 123 456 7890
                        </p>
                      </li>
                    </ul>
                    <div className="info-wrap2 d-flex align-items-center">
                      <p className="review">
                        <span className="rev">
                          Review <small>5.0/5</small>
                        </span>{" "}
                        <span className="ico ion-ios-star"></span>
                        <small>(100)</small>
                      </p>
                      <p className="heart">
                        <a
                          href="/"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="ion-ios-heart-empty"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="listing-wrap">
                <a
  href="images/list-6.jpg"
  classNameName="img img-property d-flex align-items-center justify-content-center glightbox"
  style={{ backgroundImage: "url(assets/images/list-6.jpg)" }}
>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </a>
                  <div className="text text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-review"></span>
                    </div>
                    <span className="subheading">Bar &amp; Club</span>
                    <h3>
                      <a href="/">Harbor Lights Hotel</a>
                    </h3>
                    <ul className="">
                      <li>
                        <p>
                          <span className="ion-ios-pin"></span> Suite 721 New York
                          NY 10016
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-phone"></span> +00 123 456 7890
                        </p>
                      </li>
                    </ul>
                    <div className="info-wrap2 d-flex align-items-center">
                      <p className="review">
                        <span className="rev">
                          Review <small>5.0/5</small>
                        </span>{" "}
                        <span className="ico ion-ios-star"></span>
                        <small>(100)</small>
                      </p>
                      <p className="heart">
                        <a
                          href="/"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="ion-ios-heart-empty"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="listing-wrap">
                <a
  href="images/list-7.jpg"
  classNameName="img img-property d-flex align-items-center justify-content-center glightbox"
  style={{ backgroundImage: "url(assets/images/list-7.jpg)" }}
>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </a>
                  <div className="text text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-online-shopping"></span>
                    </div>
                    <span className="subheading">Circus</span>
                    <h3>
                      <a href="/">MS Center Mall of Asia</a>
                    </h3>
                    <ul className="">
                      <li>
                        <p>
                          <span className="ion-ios-pin"></span> Suite 721 New York
                          NY 10016
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-phone"></span> +00 123 456 7890
                        </p>
                      </li>
                    </ul>
                    <div className="info-wrap2 d-flex align-items-center">
                      <p className="review">
                        <span className="rev">
                          Review <small>5.0/5</small>
                        </span>{" "}
                        <span className="ico ion-ios-star"></span>
                        <small>(100)</small>
                      </p>
                      <p className="heart">
                        <a
                          href="/"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="ion-ios-heart-empty"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="listing-wrap">
                <a
  href="images/list-8.jpg"
  classNameName="img img-property d-flex align-items-center justify-content-center glightbox"
  style={{ backgroundImage: "url(assets/images/list-8.jpg)" }}
>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </a>
                  <div className="text text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-food-and-drink"></span>
                    </div>
                    <span className="subheading">Theater</span>
                    <h3>
                      <a href="/">Maxout Fitness Gym</a>
                    </h3>
                    <ul className="">
                      <li>
                        <p>
                          <span className="ion-ios-pin"></span> Suite 721 New York
                          NY 10016
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-phone"></span> +00 123 456 7890
                        </p>
                      </li>
                    </ul>
                    <div className="info-wrap2 d-flex align-items-center">
                      <p className="review">
                        <span className="rev">
                          Review <small>5.0/5</small>
                        </span>{" "}
                        <span className="ico ion-ios-star"></span>
                        <small>(100)</small>
                      </p>
                      <p className="heart">
                        <a
                          href="/"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="ion-ios-heart-empty"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <div className="listing-wrap">
                <a
  href="images/list-9.jpg"
  classNameName="img img-property d-flex align-items-center justify-content-center glightbox"
  style={{ backgroundImage: "url(assets/images/list-9.jpg)" }}
>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </a>
                  <div className="text text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-food-and-drink"></span>
                    </div>
                    <span className="subheading">Theater</span>
                    <h3>
                      <a href="/">Japanese Restaurant</a>
                    </h3>
                    <ul className="">
                      <li>
                        <p>
                          <span className="ion-ios-pin"></span> Suite 721 New York
                          NY 10016
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-phone"></span> +00 123 456 7890
                        </p>
                      </li>
                    </ul>
                    <div className="info-wrap2 d-flex align-items-center">
                      <p className="review">
                        <span className="rev">
                          Review <small>5.0/5</small>
                        </span>{" "}
                        <span className="ico ion-ios-star"></span>
                        <small>(100)</small>
                      </p>
                      <p className="heart">
                        <a
                          href="/"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="ion-ios-heart-empty"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <div className="listing-wrap">
                <a
  href="images/list-10.jpg"
  classNameName="img img-property d-flex align-items-center justify-content-center glightbox"
  style={{ backgroundImage: "url(assets/images/list-10.jpg)" }}
>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </a>
                  <div className="text text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-review"></span>
                    </div>
                    <span className="subheading">Sports</span>
                    <h3>
                      <a href="/">Harbor Lights Hotel</a>
                    </h3>
                    <ul className="">
                      <li>
                        <p>
                          <span className="ion-ios-pin"></span> Suite 721 New York
                          NY 10016
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-phone"></span> +00 123 456 7890
                        </p>
                      </li>
                    </ul>
                    <div className="info-wrap2 d-flex align-items-center">
                      <p className="review">
                        <span className="rev">
                          Review <small>5.0/5</small>
                        </span>{" "}
                        <span className="ico ion-ios-star"></span>
                        <small>(100)</small>
                      </p>
                      <p className="heart">
                        <a
                          href="/"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="ion-ios-heart-empty"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <div className="listing-wrap">
                <a
  href="images/list-11.jpg"
  classNameName="img img-property d-flex align-items-center justify-content-center glightbox"
  style={{ backgroundImage: "url(assets/images/list-11.jpg)" }}
>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </a>
                  <div className="text text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-online-shopping"></span>
                    </div>
                    <span className="subheading">Games</span>
                    <h3>
                      <a href="/">MS Center Mall of Asia</a>
                    </h3>
                    <ul className="">
                      <li>
                        <p>
                          <span className="ion-ios-pin"></span> Suite 721 New York
                          NY 10016
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-phone"></span> +00 123 456 7890
                        </p>
                      </li>
                    </ul>
                    <div className="info-wrap2 d-flex align-items-center">
                      <p className="review">
                        <span className="rev">
                          Review <small>5.0/5</small>
                        </span>{" "}
                        <span className="ico ion-ios-star"></span>
                        <small>(100)</small>
                      </p>
                      <p className="heart">
                        <a
                          href="/"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="ion-ios-heart-empty"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <div className="listing-wrap">
                <a
  href="images/list-12.jpg"
  classNameName="img img-property d-flex align-items-center justify-content-center glightbox"
  style={{ backgroundImage: "url(assets/images/list-12.jpg)" }}
>
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-search"></span>
                    </div>
                  </a>
                  <div className="text text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-food-and-drink"></span>
                    </div>
                    <span className="subheading">Places</span>
                    <h3>
                      <a href="/">Maxout Fitness Gym</a>
                    </h3>
                    <ul className="">
                      <li>
                        <p>
                          <span className="ion-ios-pin"></span> Suite 721 New York
                          NY 10016
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="fa fa-phone"></span> +00 123 456 7890
                        </p>
                      </li>
                    </ul>
                    <div className="info-wrap2 d-flex align-items-center">
                      <p className="review">
                        <span className="rev">
                          Review <small>5.0/5</small>
                        </span>{" "}
                        <span className="ico ion-ios-star"></span>
                        <small>(100)</small>
                      </p>
                      <p className="heart">
                        <a
                          href="/"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <span className="ion-ios-heart-empty"></span>
                        </a>
                      </p>
                    </div>
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
                              data-cfemail="2e474048416e57415b5c4a41434f4740004d4143"
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

export default Listing;
