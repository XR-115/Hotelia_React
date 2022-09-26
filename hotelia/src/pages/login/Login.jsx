import './Login.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from'../../components/footer/Footer';
import HoteliaNegro from '../../components/img/Hotelia horizontal negro.svg';
import {Icon} from '../../components/icons/Icon';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Login() {
    return(
        <div class="login">
            <Navbar />,
                <div class="formulario">
                    <form action="" class="form-login">
                        <img src={HoteliaNegro} alt=""/>
                        <div class="campos">
                            <div class="usuario-form">
                                <Icon css='icon' icon={faUser}/>
                            </div>
                        <div class="inputs-form">
                            <label for="">Usuario</label>
                            <input type="text"/>
                        </div>
                        
                        <div class="inputs-form">
                            <label for="">Contraseña</label>
                            <input type="password"/>
                        </div>
                        <div class="inputs-form">
                            <button class="enviar">Enviar</button>
                        </div>
                        <div class="inputs-form">
                            <label for="" class="recuperar">¿No tienes una cuenta?</label>
                            </div>
                        </div>
                    </form>
                </div>
            <Footer />
        </div>
    );
}
export default Login;
