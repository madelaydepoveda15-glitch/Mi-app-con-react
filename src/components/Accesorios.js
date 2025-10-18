import React from 'react';
import { accesorios } from '../data/accesorios';

function Accesorios() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Lista de Accesorios</h2>
      <div className="row">
        {accesorios.map(acc => (
          <div key={acc.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{acc.nombre}</h5>
                <p className="card-text">{acc.marca} - {acc.categoria}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accesorios;

