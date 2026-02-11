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
        PL: 'kilka projektów_',
        ENG: 'some of my projects_'
    },
    storylineTools: {
        PL: 'i stack',
        ENG: 'and tools'
    }
}

export default Typo;