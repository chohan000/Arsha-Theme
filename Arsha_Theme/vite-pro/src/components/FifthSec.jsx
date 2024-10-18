import React from 'react'
import team1 from './images/team-1.jpg';
import team2 from './images/team-2.jpg';
import team3 from './images/team-3.jpg';
import team4 from './images/team-4.jpg';

const FifthSec = () => {
  return (
   <>

    {/* {Fifth Section} */}

         <div class="container team-bg mt-5" id="team">
            <h1 class="text-clr text-center">TEAM</h1>
            <div class="row justify-content-evenly align-items-center mt-5  ">
                <div class="col-lg-5 col-sm-12 d-flex justify-content-between align-items-center team-card mt-3 ">
                <img src={team1} class="img-fluid team-pic" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae non, totam blanditiis illo maiores.</p>
                </div>
                <div class="col-lg-5 col-sm-12 d-flex justify-content-center align-items-center team-card mt-3">
                <img src={team2} alt="" class="img-fluid team-pic"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae non, totam blanditiis illo maiores.</p>
                </div>
            </div>
            <div class="row justify-content-evenly align-items-center mt-5">
                <div class="col-lg-5 col-sm-12 d-flex justify-content-center align-items-center team-card mt-3">
                <img src={team3} class="img-fluid team-pic" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae non, totam blanditiis illo maiores.</p>
                </div>
                <div class="col-lg-5 col-sm-12 d-flex justify-content-center align-items-center team-card mt-3">
                <img src={team4} alt="" class="img-fluid team-pic"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae non, totam blanditiis illo maiores.</p>
                </div>
            </div>
        </div>
   </>
  )
}

export default FifthSec
