import React from 'react';
import { pedidos } from '../data/pedidos';

function DetallePedido({ usuario }) {
  const propios = pedidos.filter(p => p.idUsuario === usuario.id);

  return (
    <div>
      <h2>Detalle de tus pedidos</h2>
      <ul>
        {propios.map(p => (
          <li key={p.id}>
            Pedido #{p.id} - Fecha: {p.fecha} - Estado: {p.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetallePedido;
