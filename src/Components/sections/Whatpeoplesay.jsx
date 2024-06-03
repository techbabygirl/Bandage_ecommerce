import React from 'react'
import '../../styles/Whatpeoplesay.css'
import { assets } from '../../assets/asset'


const Whatpeoplesay = () => {
    return (
        <>
            <div className="whatpeoplesay">

                <div className="rating">
                    <h1>What they say about us</h1>

                    <div className="reviews">
                       <div><img src={assets.user_icon} alt="" /></div> 

                       <div><img src={assets.stars} alt="" /></div> 

                        <div className='reviewnote '>Banlate help you see how many more days you need to work to ,<br /> reach your finacial goal</div>

                       <div className='name'>Regina Miles</div>

                        <div className='designer '>Designer</div>
                    </div>
                </div>
                    

                <div className="people">
                    <div className="firstrow">
                        <img src={assets.unsplash5} alt="" />
                        <img src={assets.unsplash2} alt="" />
                        <img src={assets.unsplash3} alt="" />
                    </div>

                    <div className="secondrow">
                        <img src={assets.unsplash4} alt="" />
                        <img src={assets.unsplash5} alt="" />
                        <img src={assets.unsplash6} alt="" />
                    </div>

                    <div className="thirdrow">
                        <img src={assets.unsplash7} alt="" />
                        <img src={assets.unsplash8} alt="" />
                        <img src={assets.unsplash9} alt="" />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Whatpeoplesay