import './Opiniones.css'
import Opinion from '../img/opinion.png';
import Opinion2 from '../img/opinion2.png';
function Opiniones() {
    return (

        <div class="opiniones" id="opiniones">
            <h1>Nuestros usuarios dicen...</h1>
            <div class="cards">
                <div class="opinion">
                    <img src={Opinion} alt="" />
                    <h3>Diego Rodriguez</h3>
                    <p class="Clasificacion"></p>
                    <label for="radio1">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4"></input>
                    <label for="radio2">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3"></input>
                    <label for="radio3">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2"></input>
                    <label for="radio4">★</label>
                    <input id="radio5" type="radio" name="estrellas" value="1"></input>
                    <label for="radio5">★</label>


                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis maiores atque nulla at,
                        pariatur
                        reiciendis.</p>

                </div>
                <div class="opinion">
                    <img src={Opinion2} alt="" />
                    <h3>Diana García</h3>
                    <i class="fa-solid fa-user-hair-buns"></i>
                    <label for="radio1">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4"></input>
                    <label for="radio2">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3"></input>
                    <label for="radio3">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2"></input>
                    <label for="radio4">★</label>
                    <input id="radio5" type="radio" name="estrellas" value="1"></input>
                    <label for="radio5">★</label>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis maiores atque nulla at,
                        pariatur
                        reiciendis.</p>
                </div>
                <div class="opinion">
                    <img src={Opinion} alt="" />
                    <h3>Diego Rodriguez</h3>
                    <label for="radio1">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4"></input>
                    <label for="radio2">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3"></input>
                    <label for="radio3">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2"></input>
                    <label for="radio4">★</label>
                    <input id="radio5" type="radio" name="estrellas" value="1"></input>
                    <label for="radio5">★</label>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis maiores atque nulla at,
                        pariatur
                        reiciendis.</p>

                </div>
            </div>
        </div>
    )
}
export default Opiniones