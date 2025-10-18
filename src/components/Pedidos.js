import React, { useState } from 'react';

function Pedidos({ usuario }) {
  const [pedidos, setPedidos] = useState([
    { id: 1, idUsuario: usuario.id, fecha: "2025-10-17", estado: "Pendiente" }
  ]);

  const [nuevoEstado, setNuevoEstado] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [confirmarId, setConfirmarId] = useState(null);

  // 🟢 Crear nuevo pedido
  const crearPedido = () => {
    const nuevoPedido = {
      id: pedidos.length + 1,
      idUsuario: usuario.id,
      fecha: new Date().toISOString().split("T")[0],
      estado: "Pendiente"
    };
    setPedidos([...pedidos, nuevoPedido]);
  };

  // ✏️ Iniciar edición
  const editarPedido = (id, estadoActual) => {
    setEditandoId(id);
    setNuevoEstado(estadoActual);
  };

  // ✅ Guardar edición
  const guardarEdicion = () => {
    setPedidos(pedidos.map(p =>
      p.id === editandoId ? { ...p, estado: nuevoEstado } : p
    ));
    setEditandoId(null);
    setNuevoEstado("");
  };

  // ❌ Confirmar eliminación
  const eliminarPedido = (id) => {
    setPedidos(pedidos.filter(p => p.id !== id));
    setConfirmarId(null);
  };

  const propios = pedidos.filter(p => p.idUsuario === usuario.id);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Mis pedidos</h2>
      <button className="btn btn-success btn-sm mb-3" onClick={crearPedido}>
        ➕ Crear nuevo pedido
      </button>

      <ul className="list-group">
        {propios.map(p => (
          <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>Pedido #{p.id}</strong> - Fecha: {p.fecha} - Estado:{" "}
              {editandoId === p.id ? (
                <>
                  <input
                    className="form-control form-control-sm d-inline-block w-auto mx-2"
                    value={nuevoEstado}
                    onChange={e => setNuevoEstado(e.target.value)}
                  />
                  <button className="btn btn-primary btn-sm mx-1" onClick={guardarEdicion}>Guardar</button>
                </>
              ) : (
                <>
                  <span className="mx-2">{p.estado}</span>
                  <button className="btn btn-warning btn-sm mx-1" onClick={() => editarPedido(p.id, p.estado)}>Editar</button>
                </>
              )}
            </div>

            <div>
              {confirmarId === p.id ? (
                <>
                  <span className="text-danger mx-2">¿Eliminar?</span>
                  <button className="btn btn-danger btn-sm mx-1" onClick={() => eliminarPedido(p.id)}>Sí</button>
                  <button className="btn btn-secondary btn-sm mx-1" onClick={() => setConfirmarId(null)}>No</button>
                </>
              ) : (
                <button className="btn btn-danger btn-sm mx-1" onClick={() => setConfirmarId(p.id)}>Eliminar</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pedidos;



