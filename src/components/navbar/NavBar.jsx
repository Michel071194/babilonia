import ItemListContainer from "../ItemListContainer/ItemListContainer";
import CartWidget from "../CartWidget/CartWidget";
import "./style.css";


const NavBar = (props) => {
  const {title}=props
  return (
    
    <div className="navBar">
      <div >
        <div>
          <CartWidget />
          
        </div>
        <div><p>
          0 <button>agregar</button>
        </p></div>
      </div>
      <h1 className="title">{title}</h1>
      
    </div>
  );
};
export default NavBar;
