const ArtistQuestionModule = ( function() {

    const artistQuestionArray = [

        {
            question: "Når døde XXXTentacion?",
            options: [
                {
                    answerOption: "Juni 18, 2017",
                    rightAnswer: false
                },
                {
                    answerOption: "Juni 18, 2018",
                    rightAnswer: true
                },
                {
                    answerOption: "Juni 17, 2017",
                    rightAnswer: false
                },
                {
                    answerOption: "Juli 18, 2018",
                    rightAnswer: false
                }
            ]
        }, 
        {
            question: "Hvor mange grammys har Kanye West vunnet?",
            options: [
                {
                    answerOption: "18",
                    rightAnswer: false
                },
                {
                    answerOption: "19",
                    rightAnswer: false
                },
                {
                    answerOption: "20",
                    rightAnswer: false
                },
                {
                    answerOption: "21",
                    rightAnswer: true
                }
            ]
        },
        {
            question: "Hva heter J. Cole sitt siste album?",
            options: [
                {
                    answerOption: "The Off Season",
                    rightAnswer: true
                },
                {
                    answerOption: "The Fall Off",
                    rightAnswer: false
                },
                {
                    answerOption: "KOD",
                    rightAnswer: false
                },
                {
                    answerOption: "The Jeff Season",
                    rightAnswer: false
                }
            ]
        },
        {
            question: "Hva heter plateselskapet Ant Wan grunnla i 2019?",
            options: [
                {
                    answerOption: "The Bando Music",
                    rightAnswer: false
                },
                {
                    answerOption: "Bandos Guy",
                    rightAnswer: false
                },
                {
                    answerOption: "Bando Kids Music",
                    rightAnswer: true
                },
                {
                    answerOption: "Trap Trap In The Bando",
                    rightAnswer: false
                }
            ]
        },
        {
            question: "Hva heter Naod sine to album?",
            options: [
                {
                    answerOption: "Naod vs Nine og BABY NINE 2",
                    rightAnswer: true
                },
                {
                    answerOption: "Naod vs Eigth og BABY NINE 3",
                    rightAnswer: false
                },
                {
                    answerOption: "Naods og NINE 2",
                    rightAnswer: false
                },
                {
                    answerOption: "Naody og Laod",
                    rightAnswer: false
                }
            ]
        }
    ];

    const getAll = () => artistQuestionArray;
    
    return {getAll};

}() );

export default ArtistQuestionModule;