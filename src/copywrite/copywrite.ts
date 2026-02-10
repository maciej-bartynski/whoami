type TypoItem = {
    PL: string,
    ENG: string,
}

const Typo: Record<string, TypoItem> = {
    bannerTitle: {
        PL: 'programista',
        ENG: 'programmer',
    },
    bannerHeadline: {
        PL: '_hej!<br/>robię<br/>aplikacje.',
        ENG: '_hi!<br/>i make<br/>apps.'
    },
    bannerMessage: {
        PL: 'od ~dekady<br/>js node.js react<br/>mobile apps flutter<br/>i więcej',
        ENG: 'from a ~decade<br/>js node.js react<br/>mobile apps flutter<br/>and more'
    },
    bannerScroll: {
        PL: 'zobacz',
        ENG: 'take a look'
    }
}

export default Typo;