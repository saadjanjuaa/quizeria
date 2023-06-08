import AnimeQuestionModule from "../modules/AnimeQuestionModule.js";
import ArtistQuestionModule from "../modules/ArtistQuestionModule.js";

/******************** HENTE ELEMENTER ********************/  


const questionHeading = document.querySelector(".question-heading");
const currentPointsHeading = document.querySelector(".current-points-heading");
const currentQuestionHeading = document.querySelector(".current-question-heading");
const answerBtnsContainer = document.querySelector(".answer-btns-container");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const quitBtn = document.querySelector(".quit-btn");
const backToInfoPageBtn = document.querySelector(".back-to-info-page-btn");
const animeBtn = document.querySelector(".anime-btn");
const musicBtn = document.querySelector(".music-btn");


/******************** VARIABLER ********************/  


const totalQuestions = 5;
let currentPlayersPointsAnime = 0;
let currentPlayersPointsMusic = 0;
let currentAnimeQuestion = 0;
let currentMusicQuestion = 0;


/******************** FUNKSJONER ********************/  


// Viser spørsmål og svar alternativer
let showQuestionHeading = () => {

    let currentSubject = localStorage.getItem("currentSubject");
    answerBtnsContainer.innerHTML = "";
    nextQuestionBtn.style.display = "none";

    if (currentSubject === "anime") {

        questionHeading.innerHTML = AnimeQuestionModule.getAll()[currentAnimeQuestion].question;

        currentPointsHeading.innerHTML = `Poeng: ${currentPlayersPointsAnime}`;  
        currentQuestionHeading.innerHTML = `Spørsmål: ${currentAnimeQuestion + 1} av ${totalQuestions}`;

        AnimeQuestionModule.getAll()[currentAnimeQuestion].options.forEach(option => {

            answerBtnsContainer.innerHTML += `
                <button data-answer="${option.rightAnswer}" class="btn answer-btn">${option.answerOption}</button>
            `;

        })

    } else {

        questionHeading.innerHTML = ArtistQuestionModule.getAll()[currentMusicQuestion].question;

        currentPointsHeading.innerHTML = `Poeng: ${currentPlayersPointsMusic}`;
        currentQuestionHeading.innerHTML = `Spørsmål: ${currentMusicQuestion + 1} av ${totalQuestions}`;  
        
        ArtistQuestionModule.getAll()[currentMusicQuestion].options.forEach(option => {
            
            answerBtnsContainer.innerHTML += `
                <button data-answer="${option.rightAnswer}" class="btn answer-btn">${option.answerOption}</button>
            `;

        })

    }

    rightOrWrongAnswer();

}

showQuestionHeading();


// For å endre til anime spørsmål
let changeToAnime = () => {

    if (currentAnimeQuestion != 0) {

        currentPointsHeading.innerHTML = `Poeng: ${currentPlayersPointsAnime}`;  

    } else {

        currentPointsHeading.innerHTML = "";

    }

    if (totalQuestions === currentAnimeQuestion) {

        currentPlayersPointsAnime = 0;
        currentAnimeQuestion = 0;
        currentPointsHeading.innerHTML = "";

    }
  
    
    localStorage.setItem("currentSubject", "anime");
    showQuestionHeading();
    quitBtn.style.display = "none";

}


// For å endre til musikk spørsmål
let changeToMusic = () => {

    if (currentMusicQuestion != 0) {

        currentPointsHeading.innerHTML = `Poeng: ${currentPlayersPointsMusic}`;  

    } else {

        currentPointsHeading.innerHTML = "";

    }

    if (totalQuestions === currentMusicQuestion) {

        currentPlayersPointsMusic = 0;
        currentMusicQuestion = 0;
        currentPointsHeading.innerHTML = "";

    }

    localStorage.setItem("currentSubject", "music");
    showQuestionHeading();
    quitBtn.style.display = "none";
}

animeBtn.onclick = changeToAnime;
musicBtn.onclick = changeToMusic;



// Viser "Videre" knappen etter man har trykket på ett svar alternativ
let showNextBtn = () => {

    if (currentMusicQuestion !== totalQuestions || currentAnimeQuestion !== totalQuestions) {

        nextQuestionBtn.style.display = "block";
        nextQuestionBtn.addEventListener("click", showQuestionHeading);

    } 
}



// Lytter og ser om det alternativet man velger er riktig eller galt
function rightOrWrongAnswer() {

    answerBtnsContainer.querySelectorAll("button").forEach(button => {

        button.addEventListener("click", (e) => {

            showNextBtn();
            let currentSubject = localStorage.getItem("currentSubject");

            if (e.currentTarget.dataset.answer === "false") {

                e.currentTarget.style.backgroundColor = "red";
                
                if (currentSubject === "anime") {
                    currentAnimeQuestion++;
                    checkIfLastQuestion(currentPlayersPointsAnime, currentAnimeQuestion);
                } else {
                    currentMusicQuestion++;
                    checkIfLastQuestion(currentPlayersPointsMusic, currentMusicQuestion);
                }

            } else {

                e.currentTarget.style.backgroundColor = "green";

                if (currentSubject === "anime") {
                    currentAnimeQuestion++;
                    currentPlayersPointsAnime++;
                    checkIfLastQuestion(currentPlayersPointsAnime, currentAnimeQuestion);
                } else {
                    currentMusicQuestion++;
                    currentPlayersPointsMusic++;
                    checkIfLastQuestion(currentPlayersPointsMusic, currentMusicQuestion);
                }

                switch (currentSubject) {
                    case "anime":
                        currentPointsHeading.innerHTML = `Poeng: ${currentPlayersPointsAnime}`;
                    break;
                    case "music":
                        currentPointsHeading.innerHTML = `Poeng: ${currentPlayersPointsMusic}`;
                    break;
                }
            }

            answerBtnsContainer.querySelectorAll("button").forEach(btn => {
                btn.disabled = true;
            })
        })
    })
}


// Sjekker om man har svart på siste spm, har man det så kommer det opp hvor mange poeng man fikk
function checkIfLastQuestion(whichSubjectPoints, currentSubjectQuestion) {

    if (currentSubjectQuestion === totalQuestions) { 
        
        if (whichSubjectPoints === 0) {
            questionHeading.innerHTML = `Du fikk dessverre ${whichSubjectPoints} poeng, øv bedre til neste gang!`;
        } else {
            questionHeading.innerHTML = `Gratulerer! Du fikk ${whichSubjectPoints} av ${totalQuestions} poeng!`;
        }

        nextQuestionBtn.style.display = "none";
        quitBtn.style.display = "block";

    } 
}


// Knapper for å få seg tilbake til informasjons siden
quitBtn.onclick = function() {
    location.href = "info-page.html";
}

backToInfoPageBtn.onclick = function() {
    location.href = "info-page.html";
}