import './Registrar.css'
import reg from './Hotelia horizontal blanco.svg';



function Registrar() {
    return ( 


    <div className='Registrar'>

<div class="boddy-registro">

    <div class="contenedor-registro">
        <div class="titulo-registro">
             <img src={reg}> 
             </img> 
            <h1>Eres más que bienvenido</h1>
        </div>
  <div class="formulario-registro">
            <form action="" class="form-regis">
                <h1>Regístrate</h1>
                <div class="contenido-registro">

                    <div class="columna1">
                        <label for="">Tipo Documento
                            <select class="input-sombra" name="" id="">
                                <option hidden selected>Escoja una opción</option>
                                <option value="1">Opción 1</option>
                                <option value="2">Opción 2</option>
                                <option value="3">Opción 3</option>
                            </select>
                        </label>

                        <label for="">Número de documento
                            <input class="input-sombra" type="number"/>
                        </label>
                    </div>

                    <div class="columna1">
                        <label for="">Nombre
                            <input class="input-sombra" type="text"/>
                        </label>

                        <label for="">Apellidos
                            <input class="input-sombra" type="text"/>
                        </label>
                    </div>

                    <div class="columna1">
                        <label for="">Fecha de nacimiento
                            <input class="input-sombra" type="date" name="" id=""/>
                        </label>
                        <label for="">Género
                            <div class="genero">
                                <input type="radio" name="genero" id="" value="1"/><label for=""> Mujer</label>
                                <input type="radio" name="genero" id="" value="2"/><label for=""> Hombre</label>
                                <input type="radio" name="genero" id="" value="3"/><label for=""> Otro</label>
                            </div>
                        </label>
                    </div>

                    <div class="columna1">
                        <label for="">Email
                            <input class="input-sombra" type="email"/>
                        </label>

                        <label for="">Telefono de contacto
                            <input class="input-sombra" type="tel"/>
                        </label>
                    </div>

                    <div class="columna1">
                        <label for="">País de origen
                            <select name="" id="">
                                <option value="1">Opción 1</option>
                                <option value="2">Opción 2</option>
                                <option value="3">Opción 3</option>
                            </select>
                        </label>
                       
                            <label for="">Foto
                                <input type="file" value=""/>
                            </label>
                       
                    </div>

                    <div class="columna1">
                        <label for="">Contraseña
                            <input class="input-sombra" type="Password"/>
                        </label>

                        <label for="">Confirmar contraseña
                            <input class="input-sombra" type="Password"/>
                        </label>
                    </div>

                    <div class="aceptar">
                        <input type="checkbox"/>Acepto Términos y Condiciones
                    </div>
                    <div class="boton-reg">
                        <button class="enviar">Ingresar</button>
                    </div>
              </div>
            </form>
            </div>

    </div>

  
</div>
    </div>
   

    );

}
export default Registrar;