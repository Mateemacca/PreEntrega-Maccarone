import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'tailwindcss/tailwind.css';
import Index from './components/Index';
function App() {
 

  return (
    <>
     <NavBar />
     <ItemListContainer greeting="Hola, bienvenido a mi tienda en linea" />
     <Index />
    </>
  )
}

export default App
