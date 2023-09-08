import ItemListContainer from "../ItemListContainer/ItemListContainer";
import CartWidget from "../CartWidget/CartWidget";
import "./style.css";


const NavBar = () => {
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
      <p className="title">Papiros, libros desde siempre</p>
      <ItemListContainer></ItemListContainer>
    </div>
  );
};
export default NavBar;
