import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import RegisterPage from './RegisterPage';
import Principal from './principal';
import perfil from "./iconos/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396-Photoroom-modified.png";
const Header = () => {
  console.log("hola");
  return (
    <BrowserRouter>
      <header>
        <h1>BAR CHAFY</h1>
        <nav>
          <ul>
            <li><Link to="/principal">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/login"><img src={perfil} alt="logo" id='logo-perfil' /></Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route exact path="/principal" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerPage" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
