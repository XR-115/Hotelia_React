import './Dashboard.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import DashMenu from '../../components/dashmenu/DashMenu';
import Señora from '../../components/img/señora.png';

function Dashboard() {
    return (
        <div class="Dash">
            <Navbar />
            <div class='contenedor-dashboard'>
                <DashMenu />
                <div class="dashboard">
                    <div class="titulo-dasboard">
                        <h1>Bienvenido, Angie Vargas</h1>
                    </div>
                    <div class="contenido-dashboard">

                        <div class="foto-perfil">
                            <img src={Señora} alt=""/>
                                <div class="subir">
                                    <i id="subir-remove" class="fa-solid fa-file-arrow-up"></i>
                                    <i class="fa-solid fa-download"></i>
                                </div>
                                <div id="subir-remove" class="cambiar-contra">
                                    <p>Cambiar <br/> contraseña</p>
                                </div>
                        </div>
                        
                        


                        <div class="columna2-dash">
                            <label for="">Tipo Documento</label>
                            <div class="informacion-dashboard">
                                <p>Cédula de ciudadanía</p>
                            </div>
                            <label for="">Nombres</label>
                            <div class="informacion-dashboard">
                                <p>Angie Camila</p>
                            </div>

                            <label for="">Fecha nacimiento</label>
                            <div class="informacion-dashboard">
                                <p>10/08/1976</p>
                            </div>

                            <label for="">Género</label>
                            <div class="informacion-dashboard-genero">
                                <input type="radio" name="genero" id="" value="1" checked/><label for=""> Mujer</label>
                                    <input type="radio" name="genero" id="" value="2"/><label for=""> Hombre</label>
                                        <input type="radio" name="genero" id="" value="3"/><label for=""> Otro</label>
                                        </div>

                                        <label for="">Email</label>
                                        <div class="informacion-dashboard">
                                            <p>angievargas2@gmail.com</p>
                                        </div>

                                    </div>



                                    <div class="columna3-dash">
                                        <label for="">Número de documento</label>
                                        <div class="informacion-dashboard">
                                            <p>1025417456</p>
                                        </div>

                                        <label for="">Apellidos</label>
                                        <div class="informacion-dashboard">
                                            <p>Vargas Pinzón</p>
                                        </div>

                                        <label for="">País de origen</label>
                                        <div class="informacion-dashboard">
                                            <p>Colombia</p>
                                        </div>

                                        <label for="">Telefono de contacto</label>
                                        <div class="informacion-dashboard">
                                            <p>3135207460</p>
                                        </div>

                                    </div>
                                    <div class="dash-contra">
                                        <div class="boton-actualizar">
                                            <button class="actualizar">Actualizar</button>
                                        </div>

                                        <label for="">Contraseña</label>
                                        <div class="informacion-dashboard">
                                            <p></p>
                                        </div>



                                        <div class="boton-actualizar">
                                            <button class="cambiara">Cambiar</button>
                                        </div>
                                    </div>
                                    <div class="padd-contras">
                                        <label for="">Confirmar contraseña</label>
                                        <div class="informacion-dashboard">

                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>

                );
}

                export default Dashboard;