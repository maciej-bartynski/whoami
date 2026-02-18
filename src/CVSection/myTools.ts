
export enum ToolSections {
    React = 'React',
    Coding = 'Coding',
    Backend = 'Backend',
    CiCd = 'CI/CD',
    Mobile = 'Mobile',
    Stacks = 'Stacks',
    Platforms = 'Platforms',
}

export enum ToolsList {
    React = 'React',
    Redux = 'Redux',
    ReactRouter = 'React router',
    TypeScript = 'Typescript',
    JavaScriptES6Plus = 'JavaScript ES6+',
    HTML5 = 'HTML5',
    CSS3 = 'CSS3',
    Dart = 'Dart',
    NodeJs = 'Node.js',
    Express = 'Express',
    Mongodb = 'MongoDb',
    Vercel = 'Vercel',
    Heroku = 'Heroku',
    AWS = 'AWS',
    OVH = 'OVH',
    GHActions = 'GHActions',
    Docker = 'Docker',
    Flutter = 'Flutter',
    ReactNative = 'React Native',
    ReactExpo = 'React Expo',
    MERN = 'MERN',
    WebComponents = 'TS + ES imports + WebComponents',
    JERN = 'JSON + ERN',
    Jira = 'Jira',
    Github = 'GitHub',
    Bitbucket = 'BitBucket',
    Auth0 = 'Auth0',
    GooglePlay = 'Google Play',
    AppStore = 'App Store',
    Snyk = 'Snyk',
    Sentry = 'Sentry',
}

export const MyTools = {
    [ToolSections.React]: [ToolsList.React, ToolsList.Redux, ToolsList.ReactRouter],
    [ToolSections.Coding]: [ToolsList.TypeScript, ToolsList.JavaScriptES6Plus, ToolsList.HTML5, ToolsList.CSS3, ToolsList.Dart],
    [ToolSections.Backend]: [ToolsList.NodeJs, ToolsList.Express, ToolsList.Mongodb],
    [ToolSections.CiCd]: [ToolsList.Vercel, ToolsList.Heroku, ToolsList.AWS, ToolsList.OVH, ToolsList.GHActions, ToolsList.Docker],
    [ToolSections.Mobile]: [ToolsList.Flutter, ToolsList.ReactNative, ToolsList.ReactExpo],
    [ToolSections.Stacks]: [ToolsList.MERN, ToolsList.WebComponents, ToolsList.JERN],
    [ToolSections.Platforms]: [ToolsList.Jira, ToolsList.Github, ToolsList.Bitbucket, ToolsList.Auth0, ToolsList.GooglePlay, ToolsList.AppStore, ToolsList.Snyk, ToolsList.Sentry],
} as const;

export const MyWork = [
    {
        title: 'Front-end with React',
        subtitle: 'for MrWork',
        description: "Build a Product for HR multiproducts app, integrate external SaaS'es with HR app",
        date: {
            time: '23.03.2021',
            label: '2021, ongoing'
        },
        stack: [
            ToolsList.React,
            ToolsList.Redux,
            ToolsList.ReactRouter,
            ToolsList.TypeScript,
        ]
    },
    {
        title: 'Mobile dev with Flutter',
        subtitle: 'for MrWork',
        description: "CI/CD for Google and AppStore, leveling UX by code optimization",
        date: {
            time: '20.06.2024',
            label: '2024, ongoing'
        },
        stack: [
            ToolsList.Dart,
            ToolsList.Flutter,
            ToolsList.GooglePlay,
            ToolsList.AppStore,
            ToolsList.Auth0
        ]
    },
    {
        title: 'React developer',
        subtitle: 'for MyBenefit',
        description: "Building caffeteria app with large team",
        date: {
            time: '20.06.2024',
            label: '2024, ongoing'
        },
        stack: [
            ToolsList.React,
            ToolsList.Redux,
            ToolsList.CSS3,
            ToolsList.JavaScriptES6Plus
        ]
    },
    {
        title: 'React Native developer',
        subtitle: 'for MyBenefit',
        description: "Integrating React Expo with monorepo, leading team",
        date: {
            time: '20.06.2024',
            label: '2024, ongoing'
        },
        stack: [
            ToolsList.ReactNative,
            ToolsList.ReactExpo,
            ToolsList.Docker,
            ToolsList.JavaScriptES6Plus
        ]
    },
    {
        title: 'Front-end developer',
        subtitle: 'for Elmark',
        description: "Delivering production-ready Magento 2 frontend",
        date: {
            time: '20.06.2024',
            label: '2024, ongoing'
        },
        stack: [
            ToolsList.HTML5,
            ToolsList.JavaScriptES6Plus,
            ToolsList.CSS3,
        ]
    },
    {
        title: 'Front-end with React',
        subtitle: 'for Neonet',
        description: "Adapting Venia storefront POC into real world React PWA on Magento 2 API",
        date: {
            time: '20.06.2024',
            label: '2024, ongoing'
        },
        stack: [
            ToolsList.React,
            ToolsList.Redux,
            ToolsList.CSS3,
            ToolsList.JavaScriptES6Plus
        ]
    },
    {
        title: 'Full stack with Node.js',
        subtitle: 'for bakeMAnia',
        description: "Delivering loyalty system",
        date: {
            time: '20.06.2024',
            label: '2024, ongoing'
        },
        stack: [
            ToolsList.React,
            ToolsList.Redux,
            ToolsList.ReactRouter,
            ToolsList.TypeScript,
            ToolsList.CSS3,
            ToolsList.Docker,
            ToolsList.NodeJs,
            ToolsList.Express,
            ToolsList.JERN
        ]
    }
] as const;


export type MyWorkItem = typeof MyWork[number]