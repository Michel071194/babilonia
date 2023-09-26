import {Link} from 'react-router-dom'
import './style.css'

const Item = ({id, nombre, precio, descripcion, imgUrl})=>{
    return (
        <div className='cardProduct' > 
        <img  style={{width:'200px', height:"170px"}} src={imgUrl} />
        <p>{nombre}</p>
        <p>{descripcion}</p>
        <p>{precio}</p>
       
        <Link   to={`/Item/${id}`}>Detalles del producto</Link>
        
      </div>
    )
}

export default Item
