import './App.css'
import 'tailwindcss/tailwind.css';
import Navigation from './routes/Navigation';
import CartContext from './context/CartContext';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <CartContext >
    <Navigation />
    
    <Toaster />
    </CartContext>
    </>
  )
}

export default App
