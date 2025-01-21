import styles from "./page.module.css";
import { FaArrowRight } from "react-icons/fa";
import folder from "../../../icons/folder.png";
import phone from "../../../icons/phone.png";
import file from "../../../icons/file.png";

export default function GetUserData() {
    return (
        <div className={styles.main}>
        {/* container forms - início */}
        <div className={styles.forms}>
        
        {/* dados pessoais - inicio */}
        <section className={styles.personalData}>
            <h2>
                Dados Pessoais
            </h2>
            <form >
                <span className={styles.name}>Nome</span>
                <span className={styles.surname}>Sobrenome</span>
                <span className={styles.date}>dd/mm/ano</span>
            </form>
        </section>
        {/* dados pessoais - fim */}

        {/* contactos -inicio */}
        <section className={styles.contacts}>
            <h2>
                Contactos
            </h2>

            <form >
               <input type="email" placeholder="Introduza o seu email" required/> 
               <input type="number" placeholder="Número de Telemóvel" required/> 
               <input type="number" placeholder="Número de Telemóvel (Opcional)" /> 
            </form>            
        </section>
        {/* contactos -fim */}

        {/* dados de inscrição - início*/}
        <section className={styles.registrationDetails}>
            <h2>
                Dados para a inscrição
            </h2>

            <form >
                <select >
                    <option value="1" disabled selected>Selecione a Instituição</option>
                    <option value="2">IPDDF</option>
                    <option value="3">Frei João Domingos</option>
                    <option value="4">Fermas</option>
                    <option value="5">Girassol</option>
                </select>
            </form>
        </section>
        {/* dados de inscrição - fim */}
        
        {/* botão sumit */}
        <button> Submeter <FaArrowRight /> </button>
        </div>
        {/* container forms - fim */}

        {/* container icons - início*/}
        <div className={styles.icons}>
            <img src={folder} alt="folder img" />
            <img src={phone} alt="phone img" />
            <img src={file} alt="file img" />
        </div>
        {/* container icons - fim*/}
        </div>
    )
}