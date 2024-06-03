import React from 'react'
import Funihighlight from '../Components/sections/Funihighlight'
import Bestsellerproducts from '../Components/sections/Bestsellerproduct'
import FeaturedPosts from '../Components/sections/FeaturedPosts'
import Service from '../Components/sections/Service'
import Whatpeoplesay from '../Components/sections/Whatpeoplesay'
import Calltoaction from '../Components/sections/Calltoaction'


const Landing = () => {
  return (
   <div className='landingpage'>
   <Funihighlight/>
   <Bestsellerproducts/> 
   <Service/>
   <FeaturedPosts />
   <Whatpeoplesay/>
   <Calltoaction/>
  

   </div>
  )
}

export default Landing;