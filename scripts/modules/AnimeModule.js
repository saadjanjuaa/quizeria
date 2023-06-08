const AnimeModule = ( function() {

    const animeArray = [

        {
            name: "Dragon Ball Z",
            image: "dragon-ball-z.jpg",
            infoText: "Dragon Ball Z, er en japansk animeserie. Her redder goku verden fra blant annet Frieza og Cell.",
            mainCharacter: "Goku"
            
        }, 
        {
            name: "Dragon Ball Super",
            image: "dragon-ball-super.jpg",
            infoText: "Dragon Ball Super, etterfølgeren av Dragon Ball Z. Goku når sin høyeste form i serien, Mastered Ultra instinct.",
            mainCharacter: "Goku"
        },
        {
            name: "Naruto",
            image: "naruto.jpg",
            infoText: "Naruto er en veldig kjent animeserie. Inne i hovedpersonen er det sealed ett beist. Som heter Kurama.",
            mainCharacter: "Naruto"
        },
        {
            name: "One Punch Man",
            image: "one-punch-man.jpg",
            infoText: "One Punch Man er en spesiell serie. Hovedpersonen saitama kan nemlig gi one punch og motstanderen dør. ",
            mainCharacter: "Saitama"
        },
        {
            name: "One Punch Man Season 2",
            image: "garou.jpg",
            infoText: "One Punch Man, er etterfølgeren til season 1. Her møter Saitama på fienden Garou. Som kaller seg ett monster",
            mainCharacter: "Saitama"
        }
    ];

    const getAll = () => animeArray;

    return {getAll};

}() );

export default AnimeModule;