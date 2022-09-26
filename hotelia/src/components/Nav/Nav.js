import './Nav.css';
import logo from './Hotelia horizontal blanco.svg';
function Nav() {
    return (
        <div className="nav">
          <header >
          <nav>
        <div class="logo">
             <img class="nav-icono" src={logo}>
                </img>
            <i class="fa-solid fa-bars"></i>
        </div>

        <div class="menu">
            <a href="Index.html" class="item">Inicio</a>
            <a href="#ubicacion" class="item">Ubícanos</a>
            <a href="#opiniones" class="item">Opiniones</a>
          
            <a href="login.html" class="items"><button class="navbar-button"><i class="fa-solid fa-user"></i> Iniciar
                    Sesión</button></a>
        </div>
    </nav>
              </header>
        </div>
      );
  }
  
  export default Nav;