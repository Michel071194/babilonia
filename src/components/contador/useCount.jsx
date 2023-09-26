import { useState } from "react"

/*También se puede exportar por default*/
 export const useCount= ()=> {

 /*Dentro del hook que estoy creando puedo añadir otros hooks*/
    const [count, setCount]= useState(0)

  /*Utilizo la función setCount encerrada en dos constantes dif para 
  sumar o restar el conunt*/
    const increment= ()=> setCount(count + 1)
    const decrement= ()=> {
        if (count>=1)setCount(count - 1)}

 /*En el return que en este caso esta pasando JS aún se pasa como parametros
 counte, increment y decrement*/
    return{count, increment, decrement}
}


export default useCount