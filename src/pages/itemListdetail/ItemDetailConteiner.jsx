import { useContext, useEffect, useState } from 'react'
import {  useParams} from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { Ring } from '@uiball/loaders'


import {Link} from 'react-router-dom'

import './style.css'

import { CartCtx } from '../../context/CartContext'
import {db} from '../../db/db'
import { doc, getDoc } from 'firebase/firestore'
import ItemList from '../../components/ItemList/ItemList'


  const ItemDetail = () => {
    const { idProduct } = useParams();
    const [books, setBooks] = useState({});
    const [isLoading, setIsLoading] = useState(true);
   
   
    const {addToCart} = useContext(CartCtx) 
   
    useEffect(() => {

     const productRef= doc(db, "Librería", idProduct)
     getDoc(productRef).then((response)=>{
      if (response.exists()){
        const libro = {id: response.id, ...response.data()}
        setBooks(libro)
        setIsLoading(false)}
        else {
          alert("Libro no encontrado")
          
        }
     })

     
       
        
    },[idProduct])

    
      
    
     

   const detail = <ul className='cardDetail'>
   
    <div>
    <img  style={{width:'440px', height:"440px"}}  src={books.Image} alt="" />
    </div>
    <div className='caracteristicas'>
    <p>{books.Name}</p> 
    <p>{books.Description}</p>
    <p>Precio:${books.Price}</p> 
    
    <div className='divAgregarAlCarrito'>
    <button onClick={()=> addToCart(books.id)}>Añadir al carrito</button>

    <Link className='enlace' to={'/'}>Volver al inicio</Link>
    </div>
    </div>
     
     </ul>
  
  
    return (

      
      <Layout>
        <h1 className='titleDetail'> Detalle del producto </h1>
        <ItemList>
        {isLoading ? <Ring size={55} speed={4} className='ring' color="#231F20" /> :  <p>{detail}</p> 
         } </ItemList>
      </Layout>
    
    );
  };
  
export default ItemDetail;