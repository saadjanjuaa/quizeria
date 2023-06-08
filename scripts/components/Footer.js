const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `

    <style>
    
        footer {
            position: fixed;
            bottom: 0;
            width: 100vw;
            background-color: rgba(126, 163, 236, 0.8);
        }

        .footer-text {
            font-size: 0.7rem;
            color: white;
            text-align: center;
            padding: 0.5rem;
        }

        @media (min-width: 577px) /* Tablet */ {

            .footer-text {
                font-size: 0.8rem;
                padding: 0.9rem;
            }
        }
    
        @media (min-width: 971px) /* Desktop */ {
    
            .footer-text {
                font-size: 1rem;
                padding: 1.2rem;
            }
        }

    </style>


    <footer>
        <p class="footer-text">© Quizeria | 2021</p>
    </footer>

`;


class Footer extends HTMLElement {

    constructor() {
        super(); 

        this.appendChild(footerTemplate.content.cloneNode(true));

    }
}

window.customElements.define("footer-template", Footer);
