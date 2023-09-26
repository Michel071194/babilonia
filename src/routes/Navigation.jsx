import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {ItemListContainer, ItemListDetailConteiner} from '../pages'

const Navigation= ()=>{

    const routes= createBrowserRouter([
      {
        path:'/',
        element:<ItemListContainer/>
      },
      {
        path:'/Item/:idProduct',
        element: <ItemListDetailConteiner/>
      }, 
      {
        path:'/:category/:id',
        element: <ItemListContainer/>
      } 
      
    ])


    return(
       <RouterProvider  router={routes}/>
    )
}


export default Navigation