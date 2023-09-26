import { useEffect, useState } from 'react'
import {  useParams} from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import NavBar from '../../components/navbar/NavBar'
import {productos} from "../../components/products/products"
import {Link} from 'react-router-dom'
import {useCount} from '../../components/contador/useCount'
import './style.css'

  const ItemDetail = () => {
    const { idProduct } = useParams();
    const [products, setProducts] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {count, increment, decrement}= useCount()
    const buscarProd= productos.find((prod)=> prod.id=== parseInt(idProduct))

    useEffect(() => {
      setTimeout(()=>{
        console.log(buscarProd)
        setProducts(buscarProd);
        setIsLoading(false);
      }, 2000)
    },[])   
  
    return (
      <div>
        <div>
      <Layout>
        <NavBar title={'Detalle del producto'}></NavBar>
        {isLoading ? <h1>Cargando...</h1> : 
        <ul className='cardDetalle'>
          <li>
           <img  style={{width:'300px', height:"300px"}}  src={products.image} alt="" />
           <p>{products.title}</p> 
           <p>${products.price}</p> 
           <p>{products.description}</p>
            
            </li>
            <div className='sectorCount'>
            <p>{count}</p>
       <button   onClick={()=>increment()}>sumar</button>
      <button    onClick={()=>decrement()}>restar</button>
           </div>
           <div>
           <Link to={'/'} >Volver al inicio</Link> 
           </div>
            </ul>}
      </Layout>
    </div>
      </div>
    );
  };
  
export default ItemDetail;