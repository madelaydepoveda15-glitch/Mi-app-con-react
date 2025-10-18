import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import Navbar from './components/Navbar';
import Accesorios from './components/Accesorios';
import Pedidos from './components/Pedidos';
import DetallePedido from './components/DetallePedido';
import AdminPanel from './components/AdminPanel';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [vista, setVista] = useState("inicio");
  const [mostrarLogo, setMostrarLogo] = useState(true);

  // ⏳ Ocultar logo después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => setMostrarLogo(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // 🟦 Mostrar logo de bienvenida
  if (mostrarLogo) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Bienvenida a TiendaAccesorios</p>
        </header>
      </div>
    );
  }

  // 🔐 Mostrar login si no hay sesión
  if (!usuario) return <Login setUsuario={setUsuario} />;

  // 🧩 Mostrar sistema según rol y vista
  return (
    <div>
      <Navbar usuario={usuario} setVista={setVista} setUsuario={setUsuario} />
      {usuario.rol === "admin" && vista === "admin" && <AdminPanel />}
      {vista === "accesorios" && <Accesorios />}
      {vista === "pedidos" && <Pedidos usuario={usuario} />}
      {vista === "detalle" && <DetallePedido usuario={usuario} />}
    </div>
  );
}

export default App;

