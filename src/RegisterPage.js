// RegisterPage.js
import React from 'react';
import './registerPage.css';

const RegisterPage = () => {
  return (
    <div className="container">
      <h2>Registro</h2>
      <form>


        <label htmlFor="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="Correo">Correo:</label>
        <input type="correo" id="correo" name="correo" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="password">Confirmar Contraseña:</label>
        <input type="password" id="password2" name="password" required />

        <button type="submit">Registrarse</button>
      </form>
      <div className="link">
        <p>Ya tienes cuenta? <a href="/login">Iniciar sesión</a></p>
      </div>
    </div>
  );
};

export default RegisterPage;