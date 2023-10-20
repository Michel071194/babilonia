import Navigation from './routes/Navigation'
import './App.css'
import CartContext from './context/CartContext'



 


function App() {

  
 
  return (
    <CartContext>
    <Navigation/>
    </CartContext>
  )
}

export default App



/* El primer ejemplo de useContext que se usó fue desde app
<ThemeContext.Provider  value={{contador, setContador,hello /*En la prop value se le pasa
  info para que la tengan todos los hijos}}>
  <Navigation/>
  </ThemeContext.Provider>*/