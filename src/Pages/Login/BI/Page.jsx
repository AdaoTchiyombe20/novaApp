import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginStudent2() {
    const navigate = useNavigate();
    const [bi, setBit] = useState();

    function handleSubmit(e) {
        const form = e.target.closest("form");
        console.log(bi);
        if(form.checkValidity()) 
            navigate("/login-user");
        else
            form.reportValidity();
    }

    return(
        <body className="body">
            <main>
                <div className="container d-flex flex-column align-items-center justify-content-center shadow-lg p-5 mx-3" id="general">
                    <div className="login d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-info mb-0">Login</h1>
                        <small className="fs-6 fw-semibold text-secondary mt-0">Entre para continuar</small>
                    </div>
                    <div className="steps d-flex justify-content-center align-items-center mt-3">
                        <div className="step1 d-flex justify-content-center align-items-center text-info fw-semibold fs-5 rounded-circle" id="step">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        </div>
                        <div className="hr"></div>
                        <div className="d-flex justify-content-center align-items-center text-info fw-semibold fs-5 border border-2 border-info rounded-circle" id="step">
                            2
                        </div>
                        <hr/>
                        <div className="d-flex justify-content-center align-items-center text-info fw-semibold fs-5 border border-2 border-info rounded-circle" id="step">
                            3
                        </div>
                    </div>
                    <div className="desc d-flex flex-column justify-content-center align-items-center mt-2">
                        <p className="fw-semibold mb-0">Introduza o número do bilhete de identidade</p>
                        <p className="fw-semibold text-info mb-0">001234567LA012</p>
                    </div>
                    <form className="submit d-flex flex-column justify-content-center mt-3" id="buttons" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Número de Bilhete" className="fw-semibold mb-2" id="transaction" value={bi} onChange={()=>{setBit(bi)}} required/>
                        <button className="fw-semibold text-light text-bg-info d-flex align-items-center justify-content-between py-0">Submeter<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
                    </form>
                </div>
            </main>     
        </body>
    )
}