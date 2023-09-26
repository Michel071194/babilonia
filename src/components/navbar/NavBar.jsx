import {Link}  from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget";
import useCount from "../contador/useCount";
import {FcShop} from 'react-icons/Fc'
import "./style.css";


const NavBar = (props) => {
  const {title}=props
  
  
  const {count, increment, decrement}= useCount()
  return (
    
    <div className="navBar">
      <div  >
          <CartWidget className="childrens_cartWidget">
           <div className='count'>
           <h1>{count}</h1>
       <button onClick={()=>increment()}>sumar</button>
       <button onClick={()=>decrement()}>restar</button>
           </div>
           </CartWidget> 
        </div>
        <div className='title'>{title}</div>
        <Link to={'/'}><FcShop size={60}/></Link>
        
    </div>
  );
};
export default NavBar;
