import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar bg-dark border-bottom border-body fixed-top bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Portfolio
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{color:'white !important'}}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto" style={{alignItems:'start', paddingLeft:'15px'}}>
            <li class="nav-item h6">
              <a class="nav-link" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li class="nav-item h6">
              <a class="nav-link" href="/moreinfo">
                More Info
              </a>
            </li>
            <li class="nav-item h6">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li class="nav-item h6">
              <a class="nav-link disabled" aria-disabled="true">
                My Works!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
