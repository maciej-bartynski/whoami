type TypoItem = {
    PL: string,
    ENG: string,
}

const Typo: Record<string, TypoItem> = {
    bannerHeadline: {
        PL: '_cześć!<br/>robię<br/>aplikacje.',
        ENG: '_hi!<br/>i make<br/>apps.'
    },
    bannerMessage: {
        PL: 'od ~dekady<br/>js node.js react<br/>mobile apps flutter<br/>i więcej',
        ENG: 'from a ~decade<br/>js node.js react<br/>mobile apps flutter<br/>and more'
    },
    bannerScroll: {
        PL: 'zobacz',
        ENG: 'take a look'
    },
    storylineHead: {
        PL: 'doświadczenie',
        ENG: 'experience'
    },
    storylineTools: {
        PL: 'narzędzia',
        ENG: 'tools'
    },
    storylineJoke: {
        PL: "Tak naprawdę, to nie jest oś czasu",
        ENG: 'Oh, this is not "time" axis really'
    }
}

export default Typo;