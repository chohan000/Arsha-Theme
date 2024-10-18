import React from 'react'
import hero from './images/hero-img.png';

const Firstsec = () => {
  return (
    <>
        {/* {First Section} */}
        <div class="container-fluid first-sec d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-sm-12 mt-5">
                        <h1 class="text-light">Better Solutions For Your Business</h1>
                        <p class="text-light main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, sunt.</p>
                    </div>
                    <div class="col-lg-6 col-sm-12 mt-5">
                        <img src={hero} alt="" class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Firstsec
