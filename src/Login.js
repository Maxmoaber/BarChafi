
      // Login.js
import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <h2>Iniciar sesión</h2>
      <form>
        <label htmlFor="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Iniciar sesión</button>
      </form>
      <div className="link">
      <p>No tienes cuenta? <Link to="/RegisterPage">Registrarse</Link></p>
      </div>
    </div>
  );
};

export default Login;
     
