import React from "react";

function Contact() {
  return (
    <div>
      <body>
        <div class="py-1 top-wrap">
          <div class="container-xl">
            <div class="row justify-content-between">
              <div class="col-md topper d-flex mb-md-0 align-items-xl-center">
                <div class="text">
                  <p class="con">
                    <span>Free Call</span> <span>+1 234 456 78910</span>
                  </p>
                </div>
              </div>
              <div class="col-md topper d-flex mb-md-0 align-items-xl-center">
                <div class="text text-md-right">
                  <p class="con">
                    <a href="/">Facebook</a> <a href="/">Twitter</a>{" "}
                    <a href="/">Dribbble</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg  ftco-navbar-light">
          <div class="container-xl">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
              <span class="flaticon flaticon-compass"></span>
              <span class="">
                Directone <small>Directory and Listing</small>
              </span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="fa fa-bars"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="listing.html">
                    Listing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <p class="mb-0">
                <a href="/" class="btn btn-primary rounded">
                  <span class="ion-ios-add"></span> Add Listing
                </a>
              </p>
            </div>
          </div>
        </nav>
        <section
          class="hero-wrap hero-wrap-2"
          style="background-image: url('assets/images/bg_3.jpg');"
        >
          <div class="overlay"></div>
          <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-center">
              <div class="col-md-9 pt-5 text-center">
                <p class="breadcrumbs">
                  <span class="mr-2">
                    <a href="index.html">
                      Home <i class="fa fa-chevron-right"></i>
                    </a>
                  </span>{" "}
                  <span>
                    Contact <i class="fa fa-chevron-right"></i>
                  </span>
                </p>
                <h1 class="mb-0 bread">Contact us</h1>
              </div>
            </div>
          </div>
        </section>
        <section class="ftco-section ftco-no-pt ftco-no-pb">
          <div class="container-xl-fluid">
            <div class="row no-gutters justify-content-center">
              <div class="col-md-12">
                <div class="wrapper">
                  <div class="row g-0">
                    <div class="col-lg-6">
                      <div class="contact-wrap w-100 p-md-5 p-4">
                        <h3>Contact us</h3>
                        <p class="mb-4">
                          We're open for any suggestion or just to have a chat
                        </p>
                        <div class="row mb-4">
                          <div class="col-md-4">
                            <div class="dbox w-100 d-flex align-items-start">
                              <div class="text">
                                <p>
                                  <span>Address:</span> 198 West 21th Street,
                                  Suite 721 New York NY 10016
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="dbox w-100 d-flex align-items-start">
                              <div class="text">
                                <p>
                                  <span>Email:</span>{" "}
                                  <a href="/cdn-cgi/l/email-protection#ec85828a83ac9583999e9f859889c28f8381">
                                    <span
                                      class="__cf_email__"
                                      data-cfemail="563f383039162f392324253f22337835393b"
                                    >
                                      Ishankhaliwala312
                                    </span>
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="dbox w-100 d-flex align-items-start">
                              <div class="text">
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
                          class="contactForm"
                        >
                          <div class="row">
                            <div class="col-md-12">
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <input
                                  type="email"
                                  class="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <textarea
                                  name="message"
                                  class="form-control"
                                  id="message"
                                  cols="30"
                                  rows="4"
                                  placeholder="Create a message here"
                                ></textarea>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <input
                                  type="submit"
                                  value="Send Message"
                                  class="btn btn-primary"
                                />
                                <div class="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div class="w-100 social-media mt-5">
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
                    <div class="col-lg-6 d-flex align-items-stretch">
                      <div
                        class="img w-100"
                        style="background-image: url(assets/images/about.jpg);"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="ftco-footer">
          <div class="container-xl">
            <div class="row mb-5 pb-5 justify-content-between">
              <div class="col-md-6 col-lg">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2 logo d-flex">
                    <a
                      class="navbar-brand align-items-center"
                      href="index.html"
                    >
                      <span class="">
                        Directone <small>Directory and Listing</small>
                      </span>
                    </a>
                  </h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <ul class="ftco-footer-social list-unstyled mt-2">
                    <li>
                      <a href="/">
                        <span class="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-2">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">Explore</h2>
                  <ul class="list-unstyled">
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>About Us
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Account
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Listing
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Pricing
                        Packages
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Pricing
                        Packages
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-2">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">Quick Links</h2>
                  <ul class="list-unstyled">
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Terms
                        &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Privacy
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Feedbacks
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-2">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">Categories</h2>
                  <ul class="list-unstyled">
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Food &amp;
                        Drinks
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Hotels
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Shopping
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Beauty
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Fitness
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span class="fa fa-chevron-right mr-2"></span>Bar &amp;
                        Club
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg">
                <div class="ftco-footer-widget mb-4">
                  <h2 class="ftco-heading-2">Have a Questions?</h2>
                  <div class="block-23 mb-3">
                    <ul>
                      <li>
                        <span class="icon fa fa-map marker"></span>
                        <span class="text">
                          203 Fake St. Mountain View, San Francisco, California,
                          USA
                        </span>
                      </li>
                      <li>
                        <a href="/">
                          <span class="icon fa fa-phone"></span>
                          <span class="text">+ 9988776655</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span class="icon fa fa-paper-plane pr-4"></span>
                          <span class="text">
                            <span
                              class="__cf_email__"
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