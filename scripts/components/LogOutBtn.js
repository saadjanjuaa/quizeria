const logOutBtnTemplate = document.createElement("template");

logOutBtnTemplate.innerHTML = `

    <style>
    
        .log-out-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 0.1rem 0.4rem;
            font-size: 0.6rem;
        }

        @media (min-width: 577px) /* Tablet */ {

            .log-out-btn {
                padding: 0.2rem 0.5rem;
                font-size: 0.7rem; 
            }
        }

        @media (min-width: 971px) /* Desktop */ {

            .log-out-btn {
                padding: 0.4rem 0.9rem;
                font-size: 0.9rem; 
            }
        }
       
    </style>


    <div>
        <button class="btn log-out-btn">Logg ut <i class="fas fa-sign-out-alt"></i></button>
    </div>

`;


class LogOutBtn extends HTMLElement {

    constructor() {
        super() 

        this.appendChild(logOutBtnTemplate.content.cloneNode(true));

        const logOutBtn = document.querySelector(".log-out-btn");

        logOutBtn.onclick = function() {
            location.href = "index.html"
        }
    }
}

window.customElements.define("log-out-btn-template", LogOutBtn);
