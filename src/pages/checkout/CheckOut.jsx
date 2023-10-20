import Layout from "../../components/Layout/Layout"
import { Link } from "react-router-dom"


const CheckOut= ({children})=>{
    return(
        <Layout>
             <Link style={{alignContent:"center", textDecoration:"none"}} to={'/'} >Seguir comprando</Link>
            {children}
            
           
            
            </Layout>
        
    )
}


export default CheckOut