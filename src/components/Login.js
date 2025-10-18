import React, { useState } from 'react';
import { usuarios } from '../data/usuarios';

function Login({ setUsuario }) {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = usuarios.find(u => u.email === email && u.contrasena === contrasena);
    if (user) {
      setUsuario(user);
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Iniciar sesión</h3>

              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={contrasena}
                  onChange={e => setContrasena(e.target.value)}
                  placeholder="••••••••"
                />
              </div>

              <div className="d-grid">
                <button className="btn btn-primary" onClick={handleLogin}>
                  Ingresar
                </button>
              </div>

              {error && (
                <div className="alert alert-danger mt-3 text-center" role="alert">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
