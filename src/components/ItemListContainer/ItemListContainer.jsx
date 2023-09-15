import './style.css'
const ItemListContainer= (props)=>{
    const {titList}=props
    return(
        <div className='menu'>
            
            <div>
            <h2>{titList}</h2>
            <button>Inicio</button>
            <button>Ofertas</button>
            <button>Catalogo</button>
            <button>Mis preferencias</button>
            </div>
        </div>
    )
}




export default ItemListContainer