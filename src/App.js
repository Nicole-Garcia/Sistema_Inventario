import React from 'react';

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
      <table>
        <tr>
          <td><Ventas/></td>
          <td><Inventario/></td>
          <td><Mercancia/></td>
        </tr>
        <tr>
          <td><Adeudos/></td>
          <td><Proveedores/></td>
          <td><Mas_Vendidos/></td>
        </tr>
      </table>
      <Footer/>
    </div>
  );
}

export default App;
