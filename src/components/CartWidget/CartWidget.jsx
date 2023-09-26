import "./style.css"
import {FaCartArrowDown} from 'react-icons/Fa'

const CartWidget = (props)=> {
   
    return ( 
    <div className="cartWidget" >
        <FaCartArrowDown className="imgCart" size={30}/>
       <div >{props.children}</div> 
       </div>
    )
}



export default CartWidget