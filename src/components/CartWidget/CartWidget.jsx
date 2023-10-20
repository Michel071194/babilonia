import { useContext } from "react"
import "./style.css"
import {FaCartArrowDown} from 'react-icons/Fa'
import { CartCtx } from "../../context/CartContext"
import { Badge} from '@mui/material'

const CartWidget = ()=> {
   const {cart}= useContext(CartCtx)
    return ( 
   
        <Badge badgeContent={cart.length} color="primary">
  <FaCartArrowDown size={30}/>
</Badge>
       
    )
}



export default CartWidget