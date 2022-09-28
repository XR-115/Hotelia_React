import './Navbar.css';
import Hotelia from '../img/Hotelia horizontal blanco.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav class="navbar">
            <div class="logo">
                <img class="nav-icono" src={Hotelia} alt=""/>
                <i class="fa-solid fa-bars"></i>
            </div>

            <div class="menu-nav" id="menu">
             <Link to="/" class="item1">Inicio</Link>
            </div> 
        </nav>
    );
}

export default Navbar;
