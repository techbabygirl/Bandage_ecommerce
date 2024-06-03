import React from 'react'
import { assets } from '../../assets/asset'
import '../../styles/breadcrumbs.css';

const BreadCrumbs = ({prevPage, currPage}) => {
  return (
    <div className='breadcrumbs'>
        <div className="con">
            <p className="prev-page">{prevPage}</p>
            <img src={assets.grayNext} alt="" />
            <p className="curr-page">{currPage}</p>
        </div>
    </div>
  )
}

export default BreadCrumbs