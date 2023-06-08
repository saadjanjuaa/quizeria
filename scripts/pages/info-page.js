import ArtistModule from "../modules/ArtistModule.js";
import AnimeModule from "../modules/AnimeModule.js";

/******************** HENTE ELEMENTER ********************/  


const personalizedWelcomeHeading = document.querySelector(".personalized-welcome-heading");
const musicInfoGridContainer = document.querySelector(".music-info-grid-container");
const animeInfoGridContainer = document.querySelector(".anime-info-grid-container");
const musicSearchInput = document.querySelector(".music-search-input");
const countryFilterInput = document.querySelector(".country-filter-input");
const musicBtn = document.querySelector(".music-btn");
const animeBtn = document.querySelector(".anime-btn");
const animeFilterSection = document.querySelector(".anime-filter-section");
const musicFilterSection = document.querySelector(".music-filter-section");
const animeSearchInput = document.querySelector(".anime-search-input");
const mainCharacterFilterInput = document.querySelector(".main-character-filter-input");
const continueToQuizBtn = document.querySelector(".continue-to-quiz-btn");


/******************** GENERELT ********************/  


localStorage.setItem("currentSubject", "music");


/******************** FUNKSJONER ********************/  


// Viser personalisert heading
let showPersonalizedHeading = () => {

    let currentPlayer = localStorage.getItem("chosenPlayer");

    personalizedWelcomeHeading.innerHTML = `Velkommen, ${currentPlayer}`;

}

showPersonalizedHeading();


// For å endre hvilket tema som vises
let changeToAnime = () => {

    musicInfoGridContainer.style.display = "none";
    animeInfoGridContainer.style.display = "grid";

    musicFilterSection.style.display = "none";
    animeFilterSection.style.display = "block";

    localStorage.removeItem("currentSubject");
    localStorage.setItem("currentSubject", "anime");

}

let changeToMusic = () => {

    animeInfoGridContainer.style.display = "none";
    musicInfoGridContainer.style.display = "grid";

    animeFilterSection.style.display = "none";
    musicFilterSection.style.display = "block";

    localStorage.removeItem("currentSubject");
    localStorage.setItem("currentSubject", "music");

}

animeBtn.onclick = changeToAnime;
musicBtn.onclick = changeToMusic;


// Viser musikk info (artist bokser)
let printMusicInfo = () => {

    let htmlTxt = "";

    printInfoBoxes(ArtistModule.getAll(), "music");

    musicInfoGridContainer.innerHTML += htmlTxt;

}

printMusicInfo();


// Viser anime info (anime bokser)
let printAnimeInfo = () => {

    let htmlTxt = "";

    printInfoBoxes(AnimeModule.getAll(), "anime");

    animeInfoGridContainer.innerHTML += htmlTxt;

}

printAnimeInfo();


// Vise søkeresultater for musikk/artister
let showSearchedMusic = () => {

    musicInfoGridContainer.innerHTML = "";

    let searchWord = musicSearchInput.value;

    const searchResult = ArtistModule.getAll().filter(artist => {
        return Object.values(artist).some(val => val.includes(searchWord));
    })
    
    printInfoBoxes(searchResult, "music");
    
}

musicSearchInput.addEventListener("input", showSearchedMusic);


// Vise søkeresultater for anime
let showSearchedAnime = () => {

    animeInfoGridContainer.innerHTML = "";

    const searchResult = AnimeModule.getAll().filter(anime => {
        return Object.values(anime).some(val => val.includes(animeSearchInput.value));
    })

    printInfoBoxes(searchResult, "anime");

}

animeSearchInput.addEventListener("input", showSearchedAnime);


// Viser artister filtrert på land de er fra
let showArtistsFilteredByCountry = () => {

    musicInfoGridContainer.innerHTML = "";

    let filterSelectResult = ArtistModule.getAll().filter(artist => {

        if (countryFilterInput.value === "Alle") {

            return ArtistModule.getAll(); 

        } 

        return artist.country === countryFilterInput.value; 
    }) 
    
    printInfoBoxes(filterSelectResult, "music");

}

countryFilterInput.addEventListener("input", showArtistsFilteredByCountry);


// Viser animes filtrert på hovedperson
let showAnimesFilteredByMainCharacter = () => {

    animeInfoGridContainer.innerHTML = "";

    let filterSelectResult = AnimeModule.getAll().filter(anime => {

        if (mainCharacterFilterInput.value === "Alle") {

            return AnimeModule.getAll(); 

        } 

        return anime.mainCharacter === mainCharacterFilterInput.value; 
    }) 

    printInfoBoxes(filterSelectResult, "anime");

}

mainCharacterFilterInput.addEventListener("input", showAnimesFilteredByMainCharacter);


// Gå til quiz side når man trykker på continue-to-quiz-btn 
continueToQuizBtn.onclick = function() {
    location.href = "quiz-page.html";
}


// Printer info boxer
function printInfoBoxes(array, subject) {

    switch (subject) {
        case "music": 
            array.forEach(artist => {
                musicInfoGridContainer.innerHTML += `
                
                    <article class="info-box">
                        <div class="info-box__image" style="background-image: url(images/${artist.image});"></div>
                        <h3 class="info-box__heading">${artist.name}</h3>
                        <p class="info-box__text">${artist.infoText}</p>
                    </article>
        
                `;
            })
        break;
        case "anime":    
            array.forEach(anime => {
                animeInfoGridContainer.innerHTML += `
                
                    <article class="info-box">
                        <div class="info-box__image" style="background-image: url(images/${anime.image});"></div>
                        <h3 class="info-box__heading">${anime.name}</h3>
                        <p class="info-box__text">${anime.infoText}</p>
                    </article>
        
                `;
            })
        break;
    }
}