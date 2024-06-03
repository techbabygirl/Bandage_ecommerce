import { useEffect, useState } from 'react'
import BreadCrumbs from '../Components/sections/BreadCrumbs'
import StarRating from '../Components/utils/StarRating'
import { assets } from '../assets/asset'
import '../styles/cart.css'
import { useDispatch, useSelector } from 'react-redux'
import emptyCart from '../assets/empty-cart.svg'
import { incrementQuantity, removeItem } from '../app/slice/CartSlice'




const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  // const [cart, setCart] = useState(cartDetails)
  const [quantity, setQuantity] = useState(1);
  const [subTotalPrice, setSubTotalPrice] = useState();
  const [totalPrice, setTotalPrice] = useState(9);
  const [deliveryPrice, setDeliveryPrice] = useState(2.5);

  const product = incrementQuantity(8)
  console.log(product)

  if (!cart || cart.length === 0) {
    return <div>
      <img src={emptyCart} alt="" width={400} style={{
        margin: '2rem auto',
        display: 'block',
      }} />
      <h1 style={{
        textAlign: 'center',
        marginTop: '100px',
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#aaa',
        fontFamily: 'Poppins, sans-serif',

      }}>You don't have any item in your cart.</h1>
    </div>
  }

  // handle remove item
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item))
  }



  return (
    <div >
      <BreadCrumbs prevPage={'Shop'} currPage={'Cart'} />
      <div className="cart">
        <div className="cart-container">
          {/* SHOPPING CART */}
          <div className="shopping-cart">
            <h3 className="shopping-cart-title">Shopping Cart</h3>
            <div className="shopping-cart-items">
              <table>
                <thead>
                  <tr>
                    <th>Item details</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody >
                  {
                    cart?.map((product, index) => {
                      const { id, title, thumbnail, price, rating } = product

                      return (
                        < >

                          <tr className='cart-item'>
                            <td className='details'>
                              <img src={thumbnail} alt={title} />
                              <div>
                                <h4 className="title">{title}</h4>
                                <span className='status'>in stock</span>

                                <div className="rating">
                                  <StarRating rating={rating} />
                                  <span>{rating}</span>
                                </div>
                              </div>
                            </td>
                            <td className='quantity'>

                              {/* TODO: Replace the set quantity witht the actual cart product */}
                              <div className="quantity-container">
                                <button className="quantity-btn" onClick={() => setQuantity(quantity - 1)} disabled={quantity == 0}>-</button>
                                <span>{quantity}</span>

                                <button className="quantity-btn" onClick={() => { setQuantity(quantity + 1)}}>+</button>
                              </div>
                            </td>
                            <td className='price'>${Math.round(price * quantity)}</td>

                          </tr>

                          <tr className='delete' >
                            <td>
                              <button className="remove-item" onClick={()=>{handleRemoveItem(product)}}>
                                <img src={assets.del} alt="" />
                                <span>Remove</span>
                              </button>
                            </td>
                          </tr>
                        </>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
          {/* END OF SHOPPING CART */}

          {/* ORDER SUMMARY */}
          <div className="order-summary">
            <h3 className="order-summary-title">Order Summary</h3>

            <ul className="order-summary-items">
              <li>
                <h4>Delivery Charges</h4>
                <span>${deliveryPrice}</span>
              </li>

              <li>
                <h4>Subtotal Total</h4>
                <span>${subTotalPrice}</span>
              </li>

              <li className='total'>
                <h4>Total</h4>
                <span>${Math.round(subTotalPrice + deliveryPrice)}</span>
              </li>
            </ul>

            <div className="action">
              <button>Proceed to checkout</button>
              <div className="payment-means">
                <img src={assets.paystack} alt="" />
                <img src={assets.visa} alt="" />
                <img src={assets.mastercard} alt="" />
              </div>
            </div>
          </div>
          {/* END OF ORDER SUMMARY */}
        </div>
      </div>
    </div>
  )
}

export default Cart