import React from 'react'
import { assets } from '../../assets/asset'
import "../../styles/Funihighlight.css"

const Funihighlight = () => {

    return (
        <>
            <div className='funicontainer'>

                <div className="funihighlight">

                    {/* funi left  */}
                    <div className="funiLeft grid-item one ">
                        
                        <div className="overlay-text">
                            <h5>5 item</h5>
                            <h4>FUNITURE</h4>
                            <p>read more </p>
                        </div>

                    </div>
                    {/* end of funi left  */}


                    {/* funi right  */}
                    <div className="funiRight">

                        {/* funi Right Top  */}

                        <div className="funiRightTop">
                            <div className="grid-item two">
                                {/* <img src={assets.floweverse_icon} alt="" /> */}
                                <div className="overlay-text">
                                    <h5>5 item</h5>
                                    <h4>FUNITURE</h4>
                                    <p>read more </p>
                                </div>
                            </div>
                        </div>
                        {/* End of funi Right Top  */}

                        {/* Funi Right Bottom */}

                        <div className="funiRightBottom">
                            <div className="grid-item three">
                                {/* <img src={assets.cardcover6_icon} alt="" /> */}
                                <div className="overlay-text">
                                    <h5>5 item</h5>
                                    <h4>FUNITURE</h4>
                                    <p>read more </p>
                                </div>
                            </div>

                            <div className="grid-item four">
                                {/* <img src={assets.cardcover_icon} alt="" /> */}
                                <div className="overlay-text">
                                    <h5>5 item</h5>
                                    <h4>FUNITURE</h4>
                                    <p>read more </p>
                                </div>
                            </div>
                        </div>
                        {/* End of Funi Right Bottom */}

                    </div>
                    {/* end of funi right */}

                </div>
            </div>

        </>
    )
}

export default Funihighlight