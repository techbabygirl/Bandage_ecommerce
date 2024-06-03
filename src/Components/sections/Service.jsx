import React from 'react'
import { assets } from '../../assets/asset.js'
import "../../styles/services.css"


const Service = () => {
  return (
    <>
      <div className="bestServices">
       
          <div className='featuredpost'>
            <p>Featured services</p>
            <h2>THE BEST SERVICES</h2>
            <p>problem trying to resolve the conflict between</p>
          </div>

          <div className='servicescolumn'>
            <div className="content easyWins">
              <div><img src={assets.bookreader} alt="" /></div>
              <h2>Easy Wins</h2>
              <div>enjoy your best looking smile  now</div>
            </div>

            <div className=" content conreate">
              <div><img src={assets.concrete} alt="" /></div>
              <h2 >Concreate</h2>
              <div>Dafalcate is most focused in helping you discover your most beautiful smiles</div>
            </div>

            <div className=" content Hack growth">
              <div><img src={assets.hackGrowth} alt="" /></div>
              <h2>Hack Growth</h2>
              <div>Overcame any hundle or any other problem</div>
            </div>


          </div>


     

      </div>


    </>
  )
}

export default Service