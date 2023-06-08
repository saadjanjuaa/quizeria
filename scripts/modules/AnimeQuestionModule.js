const AnimeQuestionModule = ( function() {

    const animeQuestionArray = [

        {
            question: "Hvem er det Goku redder verden fra i Dragon Ball Z?",
            options: [
                {
                    answerOption: "Per og Pål",
                    rightAnswer: false
                },
                {
                    answerOption: "Frieza og Cell",
                    rightAnswer: true
                },
                {
                    answerOption: "Orochimaru og Sabuza",
                    rightAnswer: false
                },
                {
                    answerOption: "Trunks og Gohan",
                    rightAnswer: false
                }
            ]
        }, 
        {
            question: "Hva heter Gokus høyeste form?",
            options: [
                {
                    answerOption: "Majin",
                    rightAnswer: false
                },
                {
                    answerOption: "Kid Buu",
                    rightAnswer: false
                },
                {
                    answerOption: "Mastered Ultra Instinct",
                    rightAnswer: true
                },
                {
                    answerOption: "Super Saiyan",
                    rightAnswer: false
                }
            ]
        },
        {
            question: "Hva heter beistet som er sealed inne i Naruto?",
            options: [
                {
                    answerOption: "Kurama",
                    rightAnswer: true
                },
                {
                    answerOption: "Sasuke",
                    rightAnswer: false
                },
                {
                    answerOption: "Poss",
                    rightAnswer: false
                },
                {
                    answerOption: "Orochimaru",
                    rightAnswer: false
                }
            ]
        },
        {
            question: "Hvem er dragon ball super etterfølgeren av?",
            options: [
                {
                    answerOption: "Drageball Z",
                    rightAnswer: false
                },
                {
                    answerOption: "Dragon ball SO",
                    rightAnswer: false
                },
                {
                    answerOption: "Dragon ball GT",
                    rightAnswer: false
                },
                {
                    answerOption: "Dragon ball Z",
                    rightAnswer: true
                }
            ]
        },
        {
            question: "Hva kaller Garou seg?",
            options: [
                {
                    answerOption: "Hest",
                    rightAnswer: false
                },
                {
                    answerOption: "Monster",
                    rightAnswer: true
                },
                {
                    answerOption: "Menneske",
                    rightAnswer: false
                },
                {
                    answerOption: "Kriger",
                    rightAnswer: false
                }
            ]
        }
    ];

    const getAll = () => animeQuestionArray;

    return {getAll};

}() );

export default AnimeQuestionModule;