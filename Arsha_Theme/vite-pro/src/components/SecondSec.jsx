import React from 'react'
import img1 from './images/why-us.png';

const SecondSec = () => {
  return (
    <>

    {/* {Second Section} */}

          <div class="container mt-5" id="about">
        <h1 class="text-clr text-center">ABOUT US</h1>
          <div class="row about-text">
            <div class="col-lg-6 col-sm-12 mt-5 d-flex justify-content-center align-items-center flex-column">
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, necessitatibus?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, necessitatibus?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, necessitatibus?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, necessitatibus?</p>
            </div>
            <div class="col-lg-6 col-sm-12 mt-5 d-flex justify-content-center align-items-center flex-column">
              
              <img src={img1} class="img-fluid about-pic" alt=""/>
            </div>
          </div>
      </div>
    <div class="container-fluid ">
      <div class="conatiner">
        <div class="row d-flex justify-content-center align-items-center mt-5 about-row">
          <div class="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
            <img src={img1} class="img-fluid about-pic" alt=""/>
          </div>
          <div class="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, necessitatibus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, necessitatibus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, necessitatibus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, necessitatibus?</p>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default SecondSec
