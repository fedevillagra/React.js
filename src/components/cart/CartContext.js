import {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (product, count) => { 
        const inCart = cart.find(item => item.id == product.id)
        
        if(inCart){
            const filteredProducts = cart.filter(item => item.id != product.id)
                setCart([
                    ...filteredProducts,
                    {
                        ...inCart,
                        quantity: inCart.quantity + count
                    }
                ])
                
        }else{
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: count
                }
            ]) 
            console.log(product.stock);
            //setCart( cart => cart.concat(product))
        }
     }

     const totalProductosCarrito = () => {
        //return cart.length
        return cart.reduce((acc, product) => acc+product.quantity,0)
     }

     const totalPrecioCarrito = () => {
        return (cart.reduce((acc, product) => acc+product.quantity*product.price,0))
     }

     const emptyCart = () => {
        setCart([])
     }

     const delateProductById = (id) => {
        const newCart = cart.filter(item=>item.id != id);
        setCart(newCart);
        (newCart.length === 0) && (window.location.href = "/");
     }

  return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        totalProductosCarrito,
        totalPrecioCarrito,
        emptyCart,
        delateProductById
    }}>
        {children}
    </CartContext.Provider>
  )
}
