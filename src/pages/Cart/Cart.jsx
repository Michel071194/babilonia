import { useContext} from "react"
import { CartCtx } from "../../context/CartContext"
import './style.css'
import CheckOut from "../checkout/CheckOut"
import { addDoc } from "firebase/firestore"
import { orderCollection } from "../../db/db"



const Cart = ()=>{
const { cart: cartProducts}= useContext(CartCtx)



const myCart = cartProducts.map(orderBooks => (
<ul className="cardDetailCart" >
  <div>
    <img  style={{width:'400px', height:"350px"}}  src={orderBooks.Image} alt="" />
    </div>
    <div className="caracteristicasCart">
    <p>{orderBooks.Name}</p> 
    <p>${orderBooks.Price}</p> 
    <p>{orderBooks.Description}</p> 
    </div>
     </ul>))

const totalPrice = cartProducts.reduce((total, item) => total + item.Price, 0);



  
  const myCartObjet = cartProducts.reduce((obj, item, index) => {
    obj[index] = {
      
      Name: item.Name,
      Price: item.Price,
      Description: item.Description
      
    };
    
      
    return obj;
    
  }, {});

const Total = cartProducts.reduce((total, item) => total + item.Price, 0);
myCartObjet.Total = Total;




  


const purchaseOrderFirebase= (event)=>{
   
   event.preventDefault();
   

addDoc(orderCollection, myCartObjet)
.then(docRef => {
  console.log('Document written with ID: ', docRef.id);
  alert("Tu compra fue realizada correctamente, su número de orden es: "+ docRef.id)
})
.catch(error => {
  console.error('Error adding document: ', error);
}
) };

return(
    
    <CheckOut>
    
    {
    !cartProducts.length?
    <h1>No hay productos</h1>:
    <div>
    <h1>Tu lista de compra:</h1>
    <ul className="cartDetail">
      {myCart}
    </ul>
    
    
    <p className="totalPrice">Total: ${totalPrice}</p>
   <div className="finalizarCompra"> <button onClick={purchaseOrderFirebase}>Finalizar compra</button>  </div>
  </div>
    }
     
    </CheckOut>
   
)

}

export default Cart