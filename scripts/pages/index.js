
/******************** HENTE ELEMENTER ********************/  


const continueBtn = document.querySelector(".continue-btn");
const startNewBtn = document.querySelector(".start-new-btn");
const startNewSection = document.querySelector(".start-new-section");
const continueSection = document.querySelector(".continue-section");
const continueSectionHeading = document.querySelector(".continue-section__heading");
const nameInput = document.querySelector(".name-input");
const submitNewNameBtn = document.querySelector(".submit-new-name-btn");
const existingPlayersBtnContainer = document.querySelector(".existing-players-btn-container");
const continueBtnContainer = document.querySelector(".continue-btn-container");


/******************** GENERELT ********************/  


startNewSection.style.display = "none";
continueSection.style.display = "none";


/******************** FUNKSJONER ********************/  


// Vise start-new-section når knapp trykkes
let showStartNewSection = () => {

    if (startNewSection.style.display === "none") {

        startNewSection.style.display = "flex";
        continueSection.style.display = "none";

    } else {

        startNewSection.style.display = "none"; 

    }
}


// Vise continue-section når knapp trykkes
let showContinueSection = () => {
    
    if (continueSection.style.display === "none") {

        continueSection.style.display = "block";

        if (localStorage.getItem("allPlayers")) {
            continueSectionHeading.innerHTML = "Her er alle eksisterende spillere, hvem vil du spille som?";
        } else {
            continueSectionHeading.innerHTML = "Det er ingen eksisterende spillere";
        }

        showExistingPlayers();

        startNewSection.style.display = "none";

    } else {

        continueSection.style.display = "none";
        
    }
}

startNewBtn.addEventListener("click", showStartNewSection);
continueBtn.addEventListener("click", showContinueSection);


/******************** LOCALSTORAGE ********************/  


// Lager array som inneholder alle spillere som har "laget bruker"
let players = [];

if (localStorage.getItem("allPlayers")) {

    players = JSON.parse(localStorage.getItem("allPlayers"));

} else {
    
    players = [];

}


// Lagre en ny spillers navn i LocalStorage, setter valgt spiller, går inn til info page
let saveName = () => {

    if (nameInput.value === "") {

        alert("Du må skrive inn ett navn, prøv igjen");
        
    } else {

        localStorage.setItem("chosenPlayer", nameInput.value);
        
        players.push(nameInput.value);

        localStorage.setItem("allPlayers", JSON.stringify(players));

        location.href = "info-page.html";
    }
}

submitNewNameBtn.addEventListener("click", saveName);


// Vise eksisterenede spillere (i form av knapper)
let showExistingPlayers = () => {

    existingPlayersBtnContainer.innerHTML = "";
    
    if (localStorage.getItem("allPlayers")) {

        let playersFromLocalStorage = JSON.parse(localStorage.getItem("allPlayers"));

        playersFromLocalStorage.forEach(player => {
        
            existingPlayersBtnContainer.innerHTML += `
                <button class="btn existing-player-btn" data-type="${player}">${player}</button>
            `;
    
        });
    }

    setChosenPlayer();
    
}


// Fjerner valgt spiller når siden lastes inn igjen
localStorage.removeItem("chosenPlayer");


// Setter valgt spiller, fra eksisterende spillere
const setChosenPlayer = () => {
    
    existingPlayersBtnContainer.querySelectorAll("button").forEach(button => {

        button.addEventListener("click", (e) => {

            let chosenPlayer = e.currentTarget.dataset.type;
            localStorage.setItem("chosenPlayer", chosenPlayer);

            continueBtnContainer.innerHTML = `<button class="btn btn--dark" onclick="location.href = 'info-page.html';">Fortsett som ${chosenPlayer}</button>`;

        })
    })
}






