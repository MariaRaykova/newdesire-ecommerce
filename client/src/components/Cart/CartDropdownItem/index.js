import {useState, useEffect} from "react"
import "../cart.scss"

const CartItem = (cartItem) => {
  const { product, count} = cartItem
    const [image, setImage] = useState(null)
    const [orderQuantity, setOrderQuantity] = useState(count)
    useEffect(()=>{
        product.images ? setImage(product.images[0]) : setImage([])
    },[])

  return (
    <div className="cartItemContainer">
    <img className="cartItemImage" src={image} alt='item' />
    <div className="itemDetailsContainer">
      <div>{product.name}</div>
      <div>
        {count} x ${product?.price}
      </div>
    </div>
  </div>
  )
 
}

export default CartItem;




