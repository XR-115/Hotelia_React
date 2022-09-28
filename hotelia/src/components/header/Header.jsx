import './Header.css'
import imagen2 from './Hotelia negro vertical.svg';
import Iframe from 'react-iframe';
import Opiniones from '../opiniones/Opiniones';

function Header() {
    return (

        
    <div className='Header'>
 <div class="bienvenida">

<h1>Lorem ipsum dolor sit amet consectetur, <br></br>adipisicing elit. Optio, dolore?
</h1>

</div>



<div class="inform">
<p>Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en un contexto de
    lujo donde interactüan los negocios, el ocio y el descanso, gracias a su
    estratégica ubicación rodeada de bancos, restaurantes de alta cocina, centros
    comerciales, almacenes de lujo y emblemáticos parques para aprovechar la
    naturaleza entre la ciudad caminay y hacer un poco de deporte al aire libre están
    el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño,
    ponemos a tu disposición una oferta gastronómica tan sofisticada como
    saludable a base de productos locales, cargados de lo mejor de la tradición
    colombiana.</p>
 <img src={imagen2} alt=""> 
 </img>
</div>



<section id="features">
<h2 class="features-title">Razones por las que disfrutarás quedarte con nosotros</h2>
<div class="features-description">
    <div class="feature feature-blue">
        <i class="fa-solid fa-bell-concierge"></i>
        <p>Lorem ipsum dolor</p>
    </div>
    <div class="feature feature-black">
        <i class="fa-solid fa-bed"></i>
        <p>Lorem ipsum dolor</p>
    </div>
    <div class="feature feature-blue">
        <i class="fa-solid fa-wifi"></i>
        <p>Lorem ipsum dolor</p>
    </div>
    <div class="feature feature-black">
        <i class="fa-solid fa-dumbbell"></i>
        <p>Lorem ipsum dolor</p>
    </div>
</div>
</section>

<div class="ubicacion" id="ubicacion">
        <h1>Ubícanos</h1>
         <Iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15906.343374195563!2d-74.05873476573484!3d4.6676871946426095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1659020142299!5m2!1ses-419!2sco"
            width="900" height="400" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"/>
        <h2>AVENIDA CARRERA 8, #12A-42,BOGOTÁ D.C, COLOMBIA</h2>
        <h3>+57 601 4567899</h3>
    </div>
    
    <Opiniones/> 


    </div>
    
    

    );

}
export default Header;