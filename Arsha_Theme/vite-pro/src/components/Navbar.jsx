import React from 'react'

const Navbar = () => {
  return (
    <>
    {/* {Navbar Section} */}
        <div class="container-fluid nav-sec">
      <div class="container">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand " href="#">ARSHA</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto">
                <li class="nav-item ">
                  <a class="nav-link "  aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#service">Service</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#team">Team</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#pricing">Pricing</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact</a>
                </li>
              <button class="btn all-button" type="button">Get Started</button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
     </div>
    </>
  )
}

export default Navbar
