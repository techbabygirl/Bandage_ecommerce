import React from 'react'
import "../../styles/Bestsellerproduct.css"
import { assets } from '../../assets/asset'
import { Link } from 'react-router-dom'
import { useGetLimitedProductsQuery } from '../../app/services/dummyData'




const Bestsellerproduct = () => {

  const {data, isLoading} = useGetLimitedProductsQuery(8)
  

    if(isLoading) {
      console.log('lodaing..')
      return <h1 style={{
      textAlign: "center",
      margin: '2rem',
    }}>Loading..</h1>}
  

  return (
    <>
      <div className='Bestsellerproduct'>
        {/* CONTAINER */}
        <div className="container">
          {/* texts */}
          <div className="texts">
            <h4>Featured Products</h4>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between.</p>
          </div>
          {/* end of texts */}

          {/* products */}
          <div className="products">

            {
              data.products?.map((product, index) => {

                const { title, price, discountPercentage, category, id, thumbnail} = product

                return (
                  <Link to={`/product/${id}`} key={id}>
                    <div className="product">
                      <div className="product-img">
                        <img src={thumbnail} alt={title} />
                      </div>

                      <div className="product-info">
                        <h5>{title}</h5>
                        <span className='category'>{category}</span>
                        <h5 className='prices'>
                          <span className='initialPrice'>${price}</span>
                          <span className='discountedPrice'>${discountPercentage}</span>
                        </h5>
                      </div>
                    </div>
                  </Link>
                );
              })
            }
          </div>
          {/* end of products */}

          {/* CTA */}
          <div className='cta'>
            <button>LOAD MORE PRODUCTS</button>
          </div>
          {/* END OF CTA */}
        </div>
        {/* END OF CONTAINER */}
      </div>

      <div>



      </div>
    </>

  )
}

export default Bestsellerproduct