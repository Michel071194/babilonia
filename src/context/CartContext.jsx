import { createContext, useState} from "react"

export const CartCtx= createContext()

const CartContext = ({children})=>{
  
    const [cart, setCart]= useState([])
    const [listBooks, setListBooks]= useState([])

    
    const addToCart = (idProduct)=>{
        const findBooks= listBooks.find(books=>books.id===idProduct)
        
        setCart([...cart, findBooks])
       
    }
   
    return(
        <CartCtx.Provider value={{cart, setCart, listBooks, setListBooks, addToCart }}>
         {children}
        </CartCtx.Provider>
    )
}

export default CartContext