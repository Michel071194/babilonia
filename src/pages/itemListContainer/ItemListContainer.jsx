
import Layout from "../../components/Layout/Layout"
import NavBar from "../../components/navbar/NavBar"
import Item from "../../components/Item/Item"
import { useEffect, useState} from "react"
import {productos} from "../../components/products/products"
import { useParams, Link } from 'react-router-dom'
import "./style.css"

const ItemListContainer = ()=>{
    const [isLoading, setLoading]= useState(true)  
    const [products, setProducts] = useState([])
    const {category}=useParams()
   


useEffect(()=>{
   setTimeout(()=>{
    setProducts(productos)
   setLoading(false)
},2000)
}, []);


    return(
       <Layout>
       

      
        <NavBar title={'Tienda'}/>
        
        
       <div >
        <div className="cardMenu"> 
        <Link className="linkMenu" to={'/jewelery/${}'}>Joyería</Link>
        <Link  className="linkMenu" to={"/men's clothing/${}"}>Ropa de hombre</Link>
        <Link className="linkMenu" to={"/women's clothing/${}"}>Ropa de mujer</Link>
        <Link className="linkMenu" to={'/electronics/${}'}>Tecnología</Link>
        <Link className="linkMenu" to={'/'}>Todos los productos</Link>
        </div>
      <div className="itemListContainer">
     {isLoading ? 
       (<h1>Cargando...</h1>):
       products && !category ?(
         products.map((productos) => (
           <Item  key={products.id}
             id={productos.id} 
             nombre={productos.title}
             descripcion={productos.description} 
             precio={productos.price}
             imgUrl={productos.image}
            
       /> ))
          
         
         ):(
            products
        ?.filter((producto)=> producto.category=== category)
        .map((productos)=> (
            <Item key={products.id}
              id={productos.id} 
              nombre={productos.title}
              descripcion={productos.description} 
              precio={productos.price}
              imgUrl={productos.image}
              />
          ))
         )}
         
         </div>
     </div>
       
        
    
   

       </Layout>
    )
}



export default ItemListContainer