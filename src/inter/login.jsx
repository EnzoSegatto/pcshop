import "../css/login.css"

function login(){
    return (
    <div class ="Vali">
    <h1 >usuario
</h1>
	<form>
        <div class="email">
		    <label for="email">email
</label>
		    <input type="email" id="email" name="email"></input>
        </div>
        <div class="senha">
            <label for="email">senha
</label>
		    <input type="senha" id="senha" name="senha" ></input>
        </div>
        <div className="button">
		    <button tittle="solid" type="submit" class="oo" >Enviar</button>
        </div>

	</form>
    </div>
    )
      
   }
   export default login;