import './style/bootstrap.css';
import './style/Abarrotes.css';
import Header from './components/Header'
import Ventas from './components/Ventas'
import Inventario from './components/Inventario'
import Mercancia from './components/Mercancia'
import Adeudos from './components/Adeudos'
import Proveedores from './components/Proveedores'
import Mas_Vendidos from './components/Mas_Vendidos'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      
      <Footer/>
    </div>
  );
}

export default App;
