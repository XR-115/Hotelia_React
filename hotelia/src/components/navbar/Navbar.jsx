import './Navbar.css';
import Hotelia from '../img/Hotelia horizontal blanco.svg';

function Navbar() {
    return(
        <nav>
            <div class="logo">
                <img class="nav-icono" src={Hotelia} alt=""/>
                <i class="fa-solid fa-bars"></i>
            </div>

            <div class="menu" id="menu">
            <a href="indexGRID.html" class="item1">Inicio</a>
        </div> 
        </nav>
    );
}

export default Navbar;
