import {Link}  from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget";
/*import useCount from "../contador/useCount";*/
import {FcShop} from 'react-icons/Fc'
import "./style.css";
import { useContext } from 'react';
/*import { ThemeContext } from '../../App';*/


const NavBar = (props) => {
  const {title}=props
  /*const {contador, setContador}= useContext(ThemeContext)*/
  /*Clase 26/9 sustituimos el primer contador que usaba useCount por uno global con
  useContext*/
 /* const {count, increment, decrement}= useCount()*/
    
  return (
    
    <div className="navBar">
      <div  >
        <Link to={'/cart'}>
          <CartWidget className="childrens_cartWidget"/>
          </Link>  
           
        </div>
        <Link to={'/'} className='title'>{title}</Link>
        <Link to={'/'}><FcShop size={60}/></Link>
        
    </div>
  );
};
export default NavBar;



/*h1>{contador}</h1>
       <button onClick={()=>setContador(contador+1)}>sumar</button>
       <button onClick={()=>setContador(contador - 1)}>restar</button> primer ejmplo de use context*/