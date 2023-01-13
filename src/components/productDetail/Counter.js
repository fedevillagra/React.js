import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../cart/CartContext"

const Counter = ({itemDetail}) => {

    const {addToCart} = useContext(CartContext)
    const handleAddToCart = () => {
      addToCart(itemDetail,count)
    }

    const [count, setCount] = useState(1)

    const add = () => { (count < itemDetail.stock) && setCount( (c) => c + 1) }
    const less = () => { (count > 1) && setCount((c) => c - 1) }

  return (
    <div>
        <div className="input-group">
            <div className="btn btn-ghost" onClick={less}>-</div>
            <span className="bg-white">{count}</span>
            <div className="btn btn-ghost" onClick={add}>+</div>
        </div>
        <Link
            to={"/"}
            onClick={handleAddToCart}
            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to bag
        </Link>
    </div>
  )
}
export default Counter