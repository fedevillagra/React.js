import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../cart/CartContext'
import { ThemeContext } from '../cart/CartView'

const CartWidget = () => {

const {totalProductosCarrito} = useContext(CartContext)

const context = useContext(ThemeContext)
const {open, setOpen} = context

  return (
    <div className="ml-4 flow-root lg:ml-6">
        <button onClick={() => setOpen(true)} className="group -m-2 flex items-center p-2">
            <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              {totalProductosCarrito()}
            </span>
            <span className="sr-only">items in cart, view bag</span>
        </button>
    </div>
  )
}
export default CartWidget