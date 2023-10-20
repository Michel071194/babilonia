
import NavBar from "../navbar/NavBar"


const Layout = (props)=>{
  
     return(
      <div>
        <NavBar title={'Babilonia'}/>
        {props.children}
      </div>
     )
    
}


export default Layout