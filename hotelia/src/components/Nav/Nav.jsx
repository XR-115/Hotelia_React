import './Nav.css';
import logo from './Hotelia horizontal blanco.svg';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav">
          <header>
          <nav class="navIndex">
        <div class="logo">
             <img class="nav-icono" src={logo} alt=""/> 
            <i class="fa-solid fa-bars"></i>
        </div>

        <div class="menu">
            <a href="Index.html" class="item">Inicio</a>
            <a href="#ubicacion" class="item">Ubícanos</a>
            <a href="#opiniones" class="item">Opiniones</a>
          
       
              <Link to="/Login" class="item">
                <button class="navbar-button" >
                <i class="fa-solid fa-user"></i> Iniciar Sesión
                </button>
              </Link>
            
        </div>
    </nav>
              </header>
        </div>
      );
  }
  
  export default Nav;