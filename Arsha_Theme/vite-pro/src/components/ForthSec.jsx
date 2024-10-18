import React from 'react'
import protfolio2 from './images/masonry-portfolio-2.jpg';
import protfolio9 from './images/masonry-portfolio-9.jpg';
import protfolio3 from './images/masonry-portfolio-3.jpg';

const ForthSec = () => {
  return (
    <>
        {/* {Forth Section} */}

    <div class="container mt-5" id="portfolio">
        <h1 class="text-clr text-center">PORTFOLIO</h1>
        <div class="row justify-content-evenly justify-content-center mt-5">
            <div class="col-lg-3 col-sm-12 mt-3">
                <img src={protfolio2} class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-3 col-sm-12 mt-3">
                <img src={protfolio3} class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-3 col-sm-12 mt-3">
                 <img src={protfolio9} class="img-fluid" alt=""/>
            </div>
        </div>
        <div class="row justify-content-evenly justify-content-center mt-5">
            <div class="col-lg-3 col-sm-12 mt-3">
                <img src={protfolio2} class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-3 col-sm-12 mt-3">
                 <img src={protfolio9} class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-3 col-sm-12 mt-3">
                <img src= {protfolio2} class="img-fluid" alt=""/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ForthSec
