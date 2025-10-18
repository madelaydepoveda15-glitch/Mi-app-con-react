function Navbar({ usuario, setVista, setUsuario }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <span className="navbar-brand">Bienvenido, {usuario.nombre} ({usuario.rol})</span>
      <div className="navbar-nav">
        {usuario.rol === "admin" && (
          <button className="btn btn-outline-light mx-1" onClick={() => setVista("admin")}>Panel Admin</button>
        )}
        <button className="btn btn-outline-light mx-1" onClick={() => setVista("accesorios")}>Accesorios</button>
        <button className="btn btn-outline-light mx-1" onClick={() => setVista("pedidos")}>Pedidos</button>
        <button className="btn btn-outline-light mx-1" onClick={() => setVista("detalle")}>Detalle Pedido</button>
        <button className="btn btn-danger mx-1" onClick={() => setUsuario(null)}>Cerrar sesión</button>
      </div>
    </nav>
  );
}

export default Navbar;
