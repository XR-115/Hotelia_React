
import Registrar from '../../components/Registrar/Registrar';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/Nav/Nav';

function Form(){
    return (
        <div>
          <Nav 
            inicio="Inicio"
            />
          <Registrar />
          <Footer/>
        </div>
      );
 }

 export default Form;
