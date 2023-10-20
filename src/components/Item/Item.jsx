import {Link} from 'react-router-dom'
import './style.css'

const Item = ({id, nombre, precio, descripcion, imgUrl})=>{
   /*  se utilizan eventos para escuchar el click, son eventos sinteticos de react
   */ 
  

    return (
        <div className='cardProduct' > 
        <img  style={{width:'370px', height:"320px"}} src={imgUrl} />
        <p>{nombre}</p>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <Link className='itemBook'  to={`/Item/${id}`}>Detalles del libro</Link>
       
        
      </div>
    )
}

export default Item
