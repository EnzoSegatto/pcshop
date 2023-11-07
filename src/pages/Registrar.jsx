import Menu from "./Menu.JSX"
import Footer from "../inter/Footer"
import IndividualIntervalsExample from "../inter/slide"
import BasicExample from "../inter/product"
import "../css/main.css"
import Registrar from"../inter/registrar"
import Cadastrar from "../inter/registrar"
import CadastroProdutos from "../inter/cadastro"

function Registrar(){
    return(
        <div>
            <header className="header">
                <Menu/>
            </header>

            <Cadastrar/>
   
            <Footer/>
        
        </div>
    )
 
}
export default Registrar;