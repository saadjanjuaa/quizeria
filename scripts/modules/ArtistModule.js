const ArtistModule = ( function() {

    const artistArray = [

        {
            name: "XXXTENTACION",
            image: "x.jpg",
            infoText: "X, eller Jahseh Dwayne Ricardo Onfroy, er en rapper fra Florida, USA. Født Januar 23, 1998. Og drept Juni 18, 2018.",
            country: "USA"
            
        }, 
        {
            name: "Kanye West",
            image: "kanye.webp",
            infoText: "Kanye west, rapper fra Atlanta, Georgia, USA. Han har vunnet en god del grammys, 21 for å være presis.",
            country: "USA"
        }, 
        {
            name: "J. Cole",
            image: "j-cole.jpg",
            infoText: "Jermaine Lamarr Cole, er en rapper fra Fayetteville i Nord-Carolina, USA. Det siste albumet han heter The Off Season",
            country: "USA"
        },
        {
            name: "Ant Wan",
            image: "ant-wan.jpg",
            infoText: "Antwan Afram, rapper og synger fra Västerås, Sverige. I 2019 så grunnla han sitt eget plateselskap. Bando Kids Music.",
            country: "Sverige"
        },
        {
            name: "Naod",
            image: "naod.jpg",
            infoText: "Naod, svensk rapper fra Stockholm. Han har to album, Naod vs Nine og BABY NINE 2.",
            country: "Sverige"
        }
    ];

    const getAll = () => artistArray;

    return {getAll};

}() );

export default ArtistModule;