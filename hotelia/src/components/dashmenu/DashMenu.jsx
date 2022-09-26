import './DashMenu.css';

import Hotelia from '../img/Hotelia horizontal blanco.svg';
import Angie from '../img/Angie Vargas.png'
import {Icon} from '../../components/icons/Icon';
import { faBed, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

function DashMenu() {
    return (

        <div class="nombre-dashboard">
            <div class="titulo-dashboard">
                <div class="imagenes">
                    <img src={Hotelia} alt="" />
                </div>
                <div class="imagenes_320">
                    <img src={Hotelia} alt="" />
                    <img class="img-Angie" src={Angie} alt="" />
                </div>
                <div class="datos-dash">
                    <h3>Angie Vargas</h3>
                    <p>angievargas2@gmail.com</p>
                </div>
            </div>
            <div class="habitaciones">
                <div class="reservas">
                    <Icon css='icon' icon={faBed}/>
                    <p>Habitaciones</p>
                </div>
                <div class="reservas">
                    <Icon css='icon' icon={faConciergeBell}/>
                    <p>Reservas</p>
                </div>
                <div class="reservas">
                    <Icon css='icon' icon={faBed}/>
                    <p>Habitaciones</p>
                </div>
                <div class="reservas">
                    <Icon css='icon' icon={faConciergeBell}/>
                    <p>Habitaciones</p>
                </div>
            </div>

            <div class="cerrarse">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <p>Cerrar sesión</p>
            </div>
        </div>
  
    );
}
export default DashMenu;