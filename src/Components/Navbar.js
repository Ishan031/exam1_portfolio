import React from "react";

function Navbar() {
  return (
    <div>
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
              <a href="/" className="btn btn-primary rounded">
                <span className="ion-ios-add"></span> Add Listing
              </a>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
