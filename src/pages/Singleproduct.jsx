import { useNavigate, useParams } from "react-router-dom"
import { useGetSingleProductQuery } from "../app/services/dummyData"
import { useEffect } from "react"
import BreadCrumbs from "../Components/sections/BreadCrumbs"
import ImageSlider from "../Components/utils/ImageSlider"
import '../styles/SingleProdcut.css';
import StarRating from "../Components/utils/StarRating"
import { assets } from "../assets/asset"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../app/slice/CartSlice"

// localStorage.clear()


const Singleproduct = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isLoading } = useGetSingleProductQuery(id)
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  


  if (isLoading || !data) return <h1 style={{
    textAlign: "center",
    margin: '2rem',
  }}>Loading..</h1>

  // handle add to cart
  const addToCart = (product)=>{
     dispatch(addItem(product))
  }


  return (
    <div>
      <BreadCrumbs prevPage={'Home'} currPage={'Shop'} />

    {/* PRODUCT SECTION */}
    
      <div className="product">
        <div className="container">
          <ImageSlider />
          <div className="product-info">
            {
              data && (
                <div>
                  <h4>{data.title}</h4>
                  <div className="rating">
                    <StarRating rating={data.rating} />
                    <span>{data.rating} ({data.reviews.length})</span>
                  </div>

                  <h3 className="title">${data.price}</h3>
                  <h6><span>Availability: </span><span>{data.availabilityStatus}</span></h6>
                </div>
              )
            }

            <hr />

            <div className="actions">
              <button className="btn">Select Options</button>
              <div>
                <img src={assets.favorite_icon} alt="" />
                <img src={assets.addtocart_icon} alt="" onClick={()=>{addToCart(data)}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END OF PRODUCT SECTION */}

      
    </div>
  )
}

export default Singleproduct