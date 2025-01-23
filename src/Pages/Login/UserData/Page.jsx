//importação das imgs dos icons
import folder from "../../../icons/folder.png";
import phone from "../../../icons/phone.png";
import file from "../../../icons/file.png";

//importação dos estados
import { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function GetUserDataLogin() {

    const navigate = useNavigate();

    const [institute,setInstitute] = useState();
    const [course,setCourse] = useState();

    // pegar as inputs com dados para o usuário iserir
    const {getEmail, setGetEmail}= useState();
    const {getPhone, setGetPhone} = useState();
    const {getPhoneOptional, setGetPhoneOptional} = useState();

    //pegar o botão submeter
    const submeter = useRef();


    //Objecto dos cursos e vagas
    const registroInstitute = [
        {
            curso: ["Robótica","Contabilidade e gestão" , "Finanças" , "Gestão Empresarial"],
            vagas: [30,42,13,64]
        },
        {
            curso: ["Informática","Bioquímica", "Contabilidade" , "Finanças"],
            vagas: [20,30,60,14]
        },
        {
            curso: ["Contabilidade e gestão","Máquinas e Motores" , "Gestão Empresarial" , "Direito"],
            vagas: [3,23,33,54]
        },
        {
            curso: ["Informática","Contabilidade e gestão" , "Gestão Empresarial" , "Robótica"],
            vagas: [38,12,33,84]
        },
    ];
    //fUnção que Pega instituição
    function getInstitute(e){
        const value = e.target.value;
        setInstitute(value);
        setCourse('');
    }
    //função que retorna os curos de uma instituição
     function getCurso() {
        if (institute==2) {
          const { curso} = registroInstitute[0]; 
          return (curso.map((vl, ind) => (
            <option key={ind} value={ind}>
              {vl}
            </option>
          )))
        }
        if (institute == 3) {
          const { curso } = registroInstitute[1]; 
          return curso.map((vl, ind) => (
            <option key={ind} value={ind}>
              {vl}
            </option>
          ));
        }
        if (institute == 4) {
          const { curso } = registroInstitute[3]; 
          return curso.map((vl, ind) => (
            <option key={ind} value={ind}>
              {vl}
            </option>
          ));
        }
        if (institute == 5) {
          const { curso } = registroInstitute[4]; 
          return curso.map((vl, ind) => (
            <option key={ind} value={ind}>
              {vl}
            </option>
          ));
        }
        else
        return null;
    }
    //Função que retorna o curso
    function getCourse(e) {
        const value = e.target.value;
        setCourse(value);
    }
    //Função que pega a quantidade de vagas dos cursos
    function getVagas() {
        if(course==0){
            const {vagas} = registroInstitute[0];
            return (
                <input type="number" value={vagas[0]} placeholder="Número de vagas" className={course ? "col-lg-8 col-md-9 col-sm-11 fw-semibold mb-2" : "d-none"} id="inputs" disabled/>
            )
        }
        if(course==1){
            const {vagas} = registroInstitute[1];
            return (
                <input type="number" value={vagas[1]} placeholder="Número de vagas" className={course ? "col-lg-8 col-md-9 col-sm-11 fw-semibold mb-2" : "d-none"} id="inputs" disabled/>
            )
        }
        if(course==2){
            const {vagas} = registroInstitute[2];
            return (
                <input type="number" value={vagas[2]} placeholder="Número de vagas" className={course ? "col-lg-8 col-md-9 col-sm-11 fw-semibold mb-2" : "d-none"} id="inputs" disabled/>
            )
        }
        if(course==3){
            const {vagas} = registroInstitute[3];
            return (
                <input type="number" value={vagas[3]} placeholder="Número de vagas" className={course ? "col-lg-8 col-md-9 col-sm-11 fw-semibold mb-2" : "d-none"} id="inputs" disabled/>
            )
        }
    }

    function submitValues() {
        // if(!getEmail && !getPhone)
        // navigate("/teste")
        // else {
        //     alert("Preencha os campos!")
        // }

        console.log(getEmail)
        console.log(getPhone)
        console.log(getPhoneOptional)
    }
    return (
    <body>
        <main className="py-5">
            <div className="container d-flex flex-column justify-content-center shadow-lg p-5 mx-3" id="general">
                <div className="login d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-info mb-0">Login</h1>
                    <small className="fs-6 fw-semibold text-secondary mt-0">Entre para continuar</small>
                </div>
                <div className="steps d-flex justify-content-center align-items-center mt-3">
                    <div className="step1 d-flex justify-content-center align-items-center text-info fw-semibold fs-5 rounded-circle" id="step">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    </div>
                    <div className="hr"></div>
                    <div className="step1 d-flex justify-content-center align-items-center text-info fw-semibold fs-5 rounded-circle" id="step">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    </div>
                    <div className="hr"></div>
                    <div className="d-flex justify-content-center align-items-center text-info fw-semibold fs-5 border border-2 border-info rounded-circle" id="step">
                        3
                    </div>
                </div>
                <div className="desc d-flex flex-column justify-content-center align-items-center mt-2 mb-4">
                    <p className="fw-semibold fs-5 text-dark mb-0">Confirme os seus dados</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center" id="registration">
                    <div id="personalData" className="w-100 mb-3">
                        <div id="personalUp" className="d-flex justify-content-between align-items-center w-100 mb-3">
                            <h2 className="text-dark">Dados Pessoais</h2>
                            <img src={folder} alt="folder"/>
                        </div>
                        <div id="personalDataInputs">
                            <div className="row">
                                <input type="text" value={getEmail} onChange={()=> setGetEmail(getEmail)} placeholder="Nome" className="col-lg-8 col-md-9 col-sm-11 fw-semibold mb-2" id="inputs" disabled/>
                                <input type="text" value={getPhone} onChange={()=> setGetPhone(getPhone)} placeholder="Sobrenome" className="col-lg-8 col-md-9 col-sm-11 fw-semibold mb-2" id="inputs" disabled/>
                                <input type="text" value={getPhoneOptional} onChange={()=> setGetPhoneOptional(getPhoneOptional)} placeholder="dd/mm/ano" className="col-lg-8 col-md-9 col-sm-11 fw-semibold mb-2" id="inputs" disabled/>
                            </div>
                        </div>
                    </div>
                    <div id="contacts" className="w-100 mb-3">
                        <div id="contactsUp" className="d-flex justify-content-between align-items-center w-100 mb-3">
                            <h2 className="text-dark">Contactos</h2>
                            <img src={phone} alt="phone" className="border rounded-circle"/>
                        </div>
                        <div id="contactsInputs">
                            <div className="row">
                                <input type="email" required placeholder="Introduza o seu email" className="col-lg-8 col-md-9 col-sm-11 fw-semibold mb-2" id="inputs"/>
                                <input type="number" required maxlength="9" min="9000000000" max="999999999" placeholder="Número de telemóvel" className="col-lg-8 col-md-9 col-sm-11 fw-semibold mb-2" id="inputs"/>
                                <input type="number" maxlength="9" min="9000000000" max="999999999" placeholder="Número de telemóvel (Opcional)" className="col-lg-8 col-md-9 col-sm-11 fw-semibold mb-2" id="inputs"/>
                            </div>
                        </div>
                    </div>
                    <div id="registrationData" className="w-100">
                        <div id="registrationUp" className="d-flex justify-content-between align-items-center w-100 mb-3">
                            <h2 className="text-dark">Dados de inscrição</h2>
                            <img src={file} alt="file"/>
                        </div>
                        <div id="registrationInputs">
                            <div className="row">
                                <select id="institute" onChange={getInstitute} className="col-lg-8 col-md-9 col-sm-11 cursor-pointer mb-2">
                                    <option value="" className="fw-semibold" disabled selected>Selecione a instituição</option>
                                    <option value="2">Instituto Médio De Economia de Luanda (IMEL)</option>
                                    <option value="3">Instituo Médio de Saúde (IMS)</option>
                                    <option value="4">Instituto Politécnico Insutrial de Luanda (IPIL)</option>
                                    <option value="5">Instituto De Telecomunicações de Luanda (ITEL)</option>
                                </select>

                                <select id="course" onChange={getCourse} className={institute ? 'col-lg-8 col-md-9 col-sm-11 cursor-pointer mb-2' : 'd-none'}>
                                <option value="" className="fw-semibold" disabled selected>Selecione o curso</option>
                                {getCurso()}
                                </select>
                                {getVagas()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="submit d-flex flex-column justify-content-center mt-3" id="buttons">
                    <button ref={submeter} className="fw-semibold text-light text-bg-info d-flex align-items-center justify-content-between py-0" onClick={submitValues}>Submeter<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
                </div>
            </div>
        </main>
    </body>
    )
}