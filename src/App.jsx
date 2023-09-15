import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import NavBar from './components/NavBar/NavBar'


function App() {
 
  return (
    <main>
     <NavBar title={'Odisea'}/>
    
     <ItemListContainer titList={'Menú'}/>
    </main>
  )
}

export default App
