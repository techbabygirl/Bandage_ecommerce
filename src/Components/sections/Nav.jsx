import React from 'react'
import { assets } from '../../assets/asset.js'
import "../../styles/Nav.css"
import MobileNav from './MobileNav.jsx'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            {/* FIRST NAV  */}
            <div className="firstnav">

                <div className='contactinfo'>
                    <div><img src={assets.phone_icon} alt="" className='nav-icon' /><span>(225) 555-0118</span></div>
                    <div><img src={assets.email_icon} alt="" className='nav-icon' /><span> michelle.rivera@example.com</span></div>
                </div>

                <div className='text'>Follow Us  and get a chance to win 80% off</div>

                <div className='socials'>
                    <p>Follow us : </p>
                    <div className='socialimg'>
                        <div><img src={assets.instagram_icon} alt="" className='nav-icon' /></div>
                        <div><img src={assets.video_icon} alt="" className='nav-icon' /></div>
                        <div><img src={assets.fb_icon} alt="" className='nav-icon' /></div>
                        <div><img src={assets.twitter_icon} alt="" className='nav-icon' /></div>
                    </div>


                </div>
            </div>

            {/* SECOND NAV */}
            <div className="secondnav">
                {/* logo */}
                <p className='bandage'>
                    <Link to={'/'}>
                        Bandage
                    </Link>
                </p>

                <div className='navinfos'>
                    {/* nav menu */}
                    <div className="navcontent">
                        <p >Home</p>
                        <p>Shop <img src={assets.dropdown_icon} alt="" /></p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Contact</p>
                        <p>Page</p>
                    </div>

                    {/* second nav icons */}
                    <div className='navicons'>
                        <div >
                            <img src={assets.user_icon} alt="" />
                            <span>Login / Register</span>
                        </div>
                        <div>
                            <img src={assets.search_icon} alt="" />
                        </div>
                        <div className='nav-cart'>
                            <Link to={'/cart'}>
                            <img src={assets.addtocart_icon} alt="" />
                            <span>1</span>
                            </Link>
                        </div>
                        <div className='nav-wishlist'>
                            <img src={assets.favorite_icon} alt="" />
                            <span>1</span>
                        </div>
                    </div>
                </div>

            </div>
            {/* MOBILE NAV COMPONENET */}
            <MobileNav />








        </>
    )
}

export default Nav