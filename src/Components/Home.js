import React from "react";

function Home() {
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
                  <a href="/#">Facebook</a> <a href="/#">Twitter</a>{" "}
                  <a href="/#">Dribbble</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg  ftco-navbar-light">
        <div className="container-xl">
          <a className="navbar-brand d-flex align-items-center" href="/index.html">
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
                <a className="nav-link active" href="/index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/listing.html">
                  Listing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog.html">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact.html">
                  Contact
                </a>
              </li>
            </ul>
            <p className="mb-0">
              <a href="/#" className="btn btn-primary rounded">
                <span className="ion-ios-add" /> Add Listing
              </a>
            </p>
          </div>
        </div>
      </nav>
      <section
        className="hero-wrap"
        style={{ backgroundImage: 'url("assets/images/bg_1.jpg")' }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-lg-8 text-center pb-5">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <h1 className="">Let's Explore Your Awesome City</h1>
                  <p>
                    Find great places to stay, eat, shop, or visit from local
                    experts.
                  </p>
                </div>
              </div>
              <form action="#" className="search-property-1 mt-md-5">
                <div className="row g-0">
                  <div className="col-md d-flex">
                    <div className="form-group p-3">
                      <div className="form-field">
                        <div className="icon">
                          <span className="fa fa-search" />
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
                          <span className="ion-ios-pin" />
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
                            <span className="fa fa-chevron-down" />
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
                          href="/#"
                          className="btn btn-primary d-block w-100 d-flex align-items-center justify-content-center py-3"
                        >
                          <span>
                            <i className="ion-ios-search" /> Search
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pt ftco-no-pb bg-light">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-12 services-wrap">
              <div className="row g-3">
                <div
                  className="col-md-4 col-lg-2 text-center d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1000}
                >
                  <a href="/#" className="services">
                    <div className="icon">
                      <span className="flaticon-food-and-drink" />
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
                  data-aos-delay={200}
                  data-aos-duration={1000}
                >
                  <a href="/#" className="services active">
                    <div className="icon">
                      <span className="flaticon-review" />
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
                  data-aos-delay={300}
                  data-aos-duration={1000}
                >
                  <a href="/#" className="services">
                    <div className="icon">
                      <span className="flaticon-online-shopping" />
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
                  data-aos-delay={400}
                  data-aos-duration={1000}
                >
                  <a href="/#" className="services">
                    <div className="icon">
                      <span className="flaticon-cream" />
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
                  data-aos-delay={400}
                  data-aos-duration={1000}
                >
                  <a href="/#" className="services">
                    <div className="icon">
                      <span className="flaticon-diet" />
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
                  data-aos-delay={400}
                  data-aos-duration={1000}
                >
                  <a href="/#" className="services">
                    <div className="icon">
                      <span className="flaticon-night-club" />
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
                  data-aos-delay={100}
                  data-aos-duration={1000}
                >
                  <a href="/#" className="services">
                    <div className="icon">
                      <span className="flaticon-joystick" />
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
                  data-aos-delay={200}
                  data-aos-duration={1000}
                >
                  <a href="/#" className="services">
                    <div className="icon">
                      <span className="flaticon-meeting-point" />
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
                  data-aos-delay={300}
                  data-aos-duration={1000}
                >
                  <a href="/#" className="services">
                    <div className="icon">
                      <span className="flaticon-amusement-park" />
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
                  data-aos-delay={400}
                  data-aos-duration={1000}
                >
                  <a href="/#" className="services">
                    <div className="icon">
                      <span className="flaticon-cinema" />
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
                  data-aos-delay={400}
                  data-aos-duration={1000}
                >
                  <a href="/#" className="services">
                    <div className="icon">
                      <span className="flaticon-sport" />
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
                  data-aos-delay={400}
                  data-aos-duration={1000}
                >
                  <a href="/#" className="services">
                    <div className="icon">
                      <span className="flaticon-healthy-food" />
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
              data-aos-duration={1000}
            >
              <span className="subheading">Our Listing</span>
              <h2 className="mb-4">Popular Listing</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="listing-wrap">
                <a
                  href="/images/list-1.jpg"
                  className="img img-property d-flex align-items-center justify-content-center glightbox"
                  style={{ backgroundImage: 'url("assets/images/list-1.jpg")' }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search" />
                  </div>
                </a>
                <div className="text text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-food-and-drink" />
                  </div>
                  <span className="subheading">Food &amp; Drinks</span>
                  <h3>
                    <a href="/#">Japanese Restaurant</a>
                  </h3>
                  <ul className="">
                    <li>
                      <p>
                        <span className="ion-ios-pin" /> Suite 721 New York NY 10016
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-phone" /> +00 123 456 7890
                      </p>
                    </li>
                  </ul>
                  <div className="info-wrap2 d-flex align-items-center">
                    <p className="review">
                      <span className="rev">
                        Review <small>5.0/5</small>
                      </span>{" "}
                      <span className="ico ion-ios-star" />
                      <small>(100)</small>
                    </p>
                    <p className="heart">
                      <a
                        href="/#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-heart-empty" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="listing-wrap">
                <a
                  href="/images/list-2.jpg"
                  className="img img-property d-flex align-items-center justify-content-center glightbox"
                  style={{ backgroundImage: "url(images/list-2.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search" />
                  </div>
                </a>
                <div className="text text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-review" />
                  </div>
                  <span className="subheading">Hotel</span>
                  <h3>
                    <a href="/#">Harbor Lights Hotel</a>
                  </h3>
                  <ul className="">
                    <li>
                      <p>
                        <span className="ion-ios-pin" /> Suite 721 New York NY 10016
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-phone" /> +00 123 456 7890
                      </p>
                    </li>
                  </ul>
                  <div className="info-wrap2 d-flex align-items-center">
                    <p className="review">
                      <span className="rev">
                        Review <small>5.0/5</small>
                      </span>{" "}
                      <span className="ico ion-ios-star" />
                      <small>(100)</small>
                    </p>
                    <p className="heart">
                      <a
                        href="/#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-heart-empty" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="listing-wrap">
                <a
                  href="/images/list-3.jpg"
                  className="img img-property d-flex align-items-center justify-content-center glightbox"
                  style={{ backgroundImage: "url(images/list-3.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search" />
                  </div>
                </a>
                <div className="text text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-online-shopping" />
                  </div>
                  <span className="subheading">Shopping</span>
                  <h3>
                    <a href="/#">MS Center Mall of Asia</a>
                  </h3>
                  <ul className="">
                    <li>
                      <p>
                        <span className="ion-ios-pin" /> Suite 721 New York NY 10016
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-phone" /> +00 123 456 7890
                      </p>
                    </li>
                  </ul>
                  <div className="info-wrap2 d-flex align-items-center">
                    <p className="review">
                      <span className="rev">
                        Review <small>5.0/5</small>
                      </span>{" "}
                      <span className="ico ion-ios-star" />
                      <small>(100)</small>
                    </p>
                    <p className="heart">
                      <a
                        href="/#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-heart-empty" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="listing-wrap">
                <a
                  href="/images/list-4.jpg"
                  className="img img-property d-flex align-items-center justify-content-center glightbox"
                  style={{ backgroundImage: "url(images/list-4.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search" />
                  </div>
                </a>
                <div className="text text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-food-and-drink" />
                  </div>
                  <span className="subheading">Gym Fitness</span>
                  <h3>
                    <a href="/#">Maxout Fitness Gym</a>
                  </h3>
                  <ul className="">
                    <li>
                      <p>
                        <span className="ion-ios-pin" /> Suite 721 New York NY 10016
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-phone" /> +00 123 456 7890
                      </p>
                    </li>
                  </ul>
                  <div className="info-wrap2 d-flex align-items-center">
                    <p className="review">
                      <span className="rev">
                        Review <small>5.0/5</small>
                      </span>{" "}
                      <span className="ico ion-ios-star" />
                      <small>(100)</small>
                    </p>
                    <p className="heart">
                      <a
                        href="/#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-heart-empty" />
                      </a>
                    </p>
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
                className="img w-100"
                style={{ backgroundImage: "url(images/intro.jpg)" }}
              />
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
                      <a href="/#" className="btn btn-darken py-3 px-4">
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
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-8 heading-section text-center mb-5"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <span className="subheading">Listing</span>
              <h2 className="mb-4">Our Listing</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="listing-wrap">
                <a
                  href="/images/list-5.jpg"
                  className="img img-property d-flex align-items-center justify-content-center glightbox"
                  style={{ backgroundImage: "url(images/list-5.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search" />
                  </div>
                </a>
                <div className="text text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-food-and-drink" />
                  </div>
                  <span className="subheading">Beauty</span>
                  <h3>
                    <a href="/#">Japanese Restaurant</a>
                  </h3>
                  <ul className="">
                    <li>
                      <p>
                        <span className="ion-ios-pin" /> Suite 721 New York NY 10016
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-phone" /> +00 123 456 7890
                      </p>
                    </li>
                  </ul>
                  <div className="info-wrap2 d-flex align-items-center">
                    <p className="review">
                      <span className="rev">
                        Review <small>5.0/5</small>
                      </span>{" "}
                      <span className="ico ion-ios-star" />
                      <small>(100)</small>
                    </p>
                    <p className="heart">
                      <a
                        href="/#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-heart-empty" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="listing-wrap">
                <a
                  href="/images/list-6.jpg"
                  className="img img-property d-flex align-items-center justify-content-center glightbox"
                  style={{ backgroundImage: "url(images/list-6.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search" />
                  </div>
                </a>
                <div className="text text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-review" />
                  </div>
                  <span className="subheading">Bar &amp; Club</span>
                  <h3>
                    <a href="/#">Harbor Lights Hotel</a>
                  </h3>
                  <ul className="">
                    <li>
                      <p>
                        <span className="ion-ios-pin" /> Suite 721 New York NY 10016
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-phone" /> +00 123 456 7890
                      </p>
                    </li>
                  </ul>
                  <div className="info-wrap2 d-flex align-items-center">
                    <p className="review">
                      <span className="rev">
                        Review <small>5.0/5</small>
                      </span>{" "}
                      <span className="ico ion-ios-star" />
                      <small>(100)</small>
                    </p>
                    <p className="heart">
                      <a
                        href="/#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-heart-empty" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="listing-wrap">
                <a
                  href="/images/list-7.jpg"
                  className="img img-property d-flex align-items-center justify-content-center glightbox"
                  style={{ backgroundImage: "url(images/list-7.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search" />
                  </div>
                </a>
                <div className="text text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-online-shopping" />
                  </div>
                  <span className="subheading">Circus</span>
                  <h3>
                    <a href="/#">MS Center Mall of Asia</a>
                  </h3>
                  <ul className="">
                    <li>
                      <p>
                        <span className="ion-ios-pin" /> Suite 721 New York NY 10016
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-phone" /> +00 123 456 7890
                      </p>
                    </li>
                  </ul>
                  <div className="info-wrap2 d-flex align-items-center">
                    <p className="review">
                      <span className="rev">
                        Review <small>5.0/5</small>
                      </span>{" "}
                      <span className="ico ion-ios-star" />
                      <small>(100)</small>
                    </p>
                    <p className="heart">
                      <a
                        href="/#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-heart-empty" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="listing-wrap">
                <a
                  href="/images/list-8.jpg"
                  className="img img-property d-flex align-items-center justify-content-center glightbox"
                  style={{ backgroundImage: "url(images/list-8.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search" />
                  </div>
                </a>
                <div className="text text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-food-and-drink" />
                  </div>
                  <span className="subheading">Theater</span>
                  <h3>
                    <a href="/#">Maxout Fitness Gym</a>
                  </h3>
                  <ul className="">
                    <li>
                      <p>
                        <span className="ion-ios-pin" /> Suite 721 New York NY 10016
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-phone" /> +00 123 456 7890
                      </p>
                    </li>
                  </ul>
                  <div className="info-wrap2 d-flex align-items-center">
                    <p className="review">
                      <span className="rev">
                        Review <small>5.0/5</small>
                      </span>{" "}
                      <span className="ico ion-ios-star" />
                      <small>(100)</small>
                    </p>
                    <p className="heart">
                      <a
                        href="/#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-heart-empty" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="listing-wrap">
                <a
                  href="/images/list-9.jpg"
                  className="img img-property d-flex align-items-center justify-content-center glightbox"
                  style={{ backgroundImage: "url(images/list-9.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search" />
                  </div>
                </a>
                <div className="text text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-food-and-drink" />
                  </div>
                  <span className="subheading">Theater</span>
                  <h3>
                    <a href="/#">Japanese Restaurant</a>
                  </h3>
                  <ul className="">
                    <li>
                      <p>
                        <span className="ion-ios-pin" /> Suite 721 New York NY 10016
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-phone" /> +00 123 456 7890
                      </p>
                    </li>
                  </ul>
                  <div className="info-wrap2 d-flex align-items-center">
                    <p className="review">
                      <span className="rev">
                        Review <small>5.0/5</small>
                      </span>{" "}
                      <span className="ico ion-ios-star" />
                      <small>(100)</small>
                    </p>
                    <p className="heart">
                      <a
                        href="/#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-heart-empty" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="listing-wrap">
                <a
                  href="/images/list-10.jpg"
                  className="img img-property d-flex align-items-center justify-content-center glightbox"
                  style={{ backgroundImage: "url(images/list-10.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search" />
                  </div>
                </a>
                <div className="text text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-review" />
                  </div>
                  <span className="subheading">Sports</span>
                  <h3>
                    <a href="/#">Harbor Lights Hotel</a>
                  </h3>
                  <ul className="">
                    <li>
                      <p>
                        <span className="ion-ios-pin" /> Suite 721 New York NY 10016
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-phone" /> +00 123 456 7890
                      </p>
                    </li>
                  </ul>
                  <div className="info-wrap2 d-flex align-items-center">
                    <p className="review">
                      <span className="rev">
                        Review <small>5.0/5</small>
                      </span>{" "}
                      <span className="ico ion-ios-star" />
                      <small>(100)</small>
                    </p>
                    <p className="heart">
                      <a
                        href="/#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-heart-empty" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="listing-wrap">
                <a
                  href="/images/list-11.jpg"
                  className="img img-property d-flex align-items-center justify-content-center glightbox"
                  style={{ backgroundImage: "url(images/list-11.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search" />
                  </div>
                </a>
                <div className="text text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-online-shopping" />
                  </div>
                  <span className="subheading">Games</span>
                  <h3>
                    <a href="/#">MS Center Mall of Asia</a>
                  </h3>
                  <ul className="">
                    <li>
                      <p>
                        <span className="ion-ios-pin" /> Suite 721 New York NY 10016
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-phone" /> +00 123 456 7890
                      </p>
                    </li>
                  </ul>
                  <div className="info-wrap2 d-flex align-items-center">
                    <p className="review">
                      <span className="rev">
                        Review <small>5.0/5</small>
                      </span>{" "}
                      <span className="ico ion-ios-star" />
                      <small>(100)</small>
                    </p>
                    <p className="heart">
                      <a
                        href="/#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-heart-empty" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="listing-wrap">
                <a
                  href="/images/list-12.jpg"
                  className="img img-property d-flex align-items-center justify-content-center glightbox"
                  style={{ backgroundImage: "url(images/list-12.jpg)" }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search" />
                  </div>
                </a>
                <div className="text text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-food-and-drink" />
                  </div>
                  <span className="subheading">Places</span>
                  <h3>
                    <a href="/#">Maxout Fitness Gym</a>
                  </h3>
                  <ul className="">
                    <li>
                      <p>
                        <span className="ion-ios-pin" /> Suite 721 New York NY 10016
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-phone" /> +00 123 456 7890
                      </p>
                    </li>
                  </ul>
                  <div className="info-wrap2 d-flex align-items-center">
                    <p className="review">
                      <span className="rev">
                        Review <small>5.0/5</small>
                      </span>{" "}
                      <span className="ico ion-ios-star" />
                      <small>(100)</small>
                    </p>
                    <p className="heart">
                      <a
                        href="/#"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="ion-ios-heart-empty" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
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
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div
                className="img w-100"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              />
            </div>
            <div
              className="col-md-7 py-5 heading-section"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1000}
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
                      data-aos-duration={1000}
                    >
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count1" className="counter" data-count={50}>
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
                      data-aos-delay={100}
                      data-aos-duration={1000}
                    >
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count2" className="counter" data-count={210}>
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
                      data-aos-delay={200}
                      data-aos-duration={1000}
                    >
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count2" className="counter" data-count={450}>
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
                      data-aos-delay={300}
                      data-aos-duration={1000}
                    >
                      <div className="text">
                        <span className="d-block number gradient-text">
                          <span id="count2" className="counter" data-count={100}>
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
              data-aos-duration={1000}
            >
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Happy People</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={100}
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
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_1.jpg)",
                          }}
                        />
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
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_2.jpg)",
                          }}
                        />
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
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_3.jpg)",
                          }}
                        />
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
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_1.jpg)",
                          }}
                        />
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
                          className="user-img"
                          style={{
                            backgroundImage: "url(images/person_2.jpg)",
                          }}
                        />
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
      <section className="img v-section ftco-section">
        <div className="overlay" />
        <div className="container-xl">
          <div className="row justify-content-center">
            <div
              className="col-md-8 heading-section heading-section-white text-center mb-5"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <span className="subheading">Let's Find Out</span>
              <h2 className="mb-4">How It Works</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div
                className="vid-img img d-flex align-items-center justify-content-center"
                style={{ backgroundImage: "url(images/bg_2.jpg)" }}
              >
                <a
                  href="/https://vimeo.com/115041822"
                  className="icon-video glightbox d-flex align-items-center justify-content-center"
                >
                  <span className="ion-ios-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="row m-md-5 mt-4 pt-lg-4">
            <div className="col-md-3 d-flex align-items-stretch">
              <div
                className="services text-center"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1000}
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-review" />
                </div>
                <div className="text">
                  <h2>
                    1. Choose A <br />
                    Category
                  </h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div
                className="services text-center"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1000}
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-review" />
                </div>
                <div className="text">
                  <h2>
                    2. Find What You <br />
                    Want
                  </h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div
                className="services text-center"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1000}
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-review" />
                </div>
                <div className="text">
                  <h2>
                    3. Select The Best <br />
                    Place
                  </h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div
                className="services text-center"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1000}
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-review" />
                </div>
                <div className="text">
                  <h2>
                    4. Explore The <br />
                    Place
                  </h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center mb-5">
            <div
              className="col-md-7 heading-section text-center"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <span className="subheading">Our Blog</span>
              <h2>Recent Blog</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 d-flex">
              <div
                className="blog-entry justify-content-end"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <a
                  href="/blog-single.html"
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
                    <span>Dec. 05, 2020</span>
                    <a href="/#">3 Comments</a>
                  </p>
                  <h3 className="heading mb-3">
                    <a href="/#">Explore The Best Restaurant in New York</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
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
                  href="/blog-single.html"
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
                    <span>Dec. 05, 2020</span>
                    <a href="/#">3 Comments</a>
                  </p>
                  <h3 className="heading mb-3">
                    <a href="/#">Explore The Best Restaurant in New York</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
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
                  href="/blog-single.html"
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
                    <span>Dec. 05, 2020</span>
                    <a href="/#">3 Comments</a>
                  </p>
                  <h3 className="heading mb-3">
                    <a href="/#" mb-3="">
                      Explore The Best Restaurant in New York
                    </a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
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
                  href="/blog-single.html"
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
                    <span>Dec. 05, 2020</span>
                    <a href="/#">3 Comments</a>
                  </p>
                  <h3 className="heading mb-3">
                    <a href="/#" mb-3="">
                      Explore The Best Restaurant in New York
                    </a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
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
                  <a className="navbar-brand align-items-center" href="/index.html">
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
                    <a href="/#">
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
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
                    <a href="/#">
                      <span className="fa fa-chevron-right mr-2" />
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <span className="fa fa-chevron-right mr-2" />
                      Account
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <span className="fa fa-chevron-right mr-2" />
                      Listing
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <span className="fa fa-chevron-right mr-2" />
                      Pricing Packages
                    </a>
                  </li>
                  <li>
                    <a href="/#">
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
                    <a href="/#">
                      <span className="fa fa-chevron-right mr-2" />
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <span className="fa fa-chevron-right mr-2" />
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <span className="fa fa-chevron-right mr-2" />
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="/#">
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
                    <a href="/#">
                      <span className="fa fa-chevron-right mr-2" />
                      Food &amp; Drinks
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <span className="fa fa-chevron-right mr-2" />
                      Hotels
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <span className="fa fa-chevron-right mr-2" />
                      Shopping
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <span className="fa fa-chevron-right mr-2" />
                      Beauty
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <span className="fa fa-chevron-right mr-2" />
                      Fitness
                    </a>
                  </li>
                  <li>
                    <a href="/#">
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
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon fa fa-phone" />
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="icon fa fa-paper-plane pr-4" />
                        <span className="text">
                          <span
                            className="__cf_email__"
                            data-cfemail="523b3c343d122b3d2720363d3f333b3c7c313d3f"
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

export default Home;
