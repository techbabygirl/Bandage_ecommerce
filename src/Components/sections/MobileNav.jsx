import React, { useState } from 'react'
import { assets } from '../../assets/asset'
import { Link } from 'react-router-dom'

const MobileNav = () => {
  const [dropdown_icon, setdropdown] = useState(false)

  return (
    <div className='mobileNav'>
      <div className="mobileveiw">
        <div className='bandage'>
          <Link to={'/'}>
            Bandage
          </Link>
        </div>
        <div className="nav-icons">
          <div>
            <img src={assets.search_icon} alt="" />
          </div>
          <div className='mobileNavCart'>
            <Link to={'/cart'}>
            <img src={assets.addtocart_icon} alt="" />
            </Link>
          </div>
          <div>
            <img onClick={() => { setdropdown(prev => !prev) }} className='menuicon' src={assets.menu_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="menudropdowm">
        {dropdown_icon ? <p>home</p> : null}
        {dropdown_icon ? <p>product</p> : null}
        {dropdown_icon ? <p>pricing</p> : null}
        {dropdown_icon ? <p>contact</p> : null}
      </div>


    </div>


  )
}

export default MobileNav