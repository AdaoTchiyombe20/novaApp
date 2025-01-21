export default function LoginStudent2() {
    return(
        <body>
            <main>
                <div class="container d-flex flex-column align-items-center justify-content-center shadow-lg p-5 mx-3" id="general">
                    <div class="login d-flex flex-column justify-content-center align-items-center">
                        <h1 class="text-info mb-0">Login</h1>
                        <small class="fs-6 fw-semibold text-secondary mt-0">Entre para continuar</small>
                    </div>
                    <div class="steps d-flex justify-content-center align-items-center mt-3">
                        <div class="step1 d-flex justify-content-center align-items-center text-info fw-semibold fs-5 rounded-circle" id="step">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        </div>
                        <div class="hr"></div>
                        <div class="d-flex justify-content-center align-items-center text-info fw-semibold fs-5 border border-2 border-info rounded-circle" id="step">
                            2
                        </div>
                        <hr/>
                        <div class="d-flex justify-content-center align-items-center text-info fw-semibold fs-5 border border-2 border-info rounded-circle" id="step">
                            3
                        </div>
                    </div>
                    <div class="desc d-flex flex-column justify-content-center align-items-center mt-2">
                        <p class="fw-semibold mb-0">Introduza o número do bilhete de identidade</p>
                        <p class="fw-semibold text-info mb-0">001234567LA012</p>
                    </div>
                    <div class="submit d-flex flex-column justify-content-center mt-3" id="buttons">
                        <input type="text" placeholder="Número de Bilhete" class="fw-semibold mb-2" id="transaction"/>
                        <button class="fw-semibold text-light text-bg-info d-flex align-items-center justify-content-between py-0">Submeter<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
                    </div>
                </div>
            </main>     
        </body>
    )
}