
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
            time: '2021-06-01',
            label: '2021, ongoing'
        },
        stack: [
            ToolsList.React,
            ToolsList.Redux,
            ToolsList.ReactRouter,
            ToolsList.TypeScript,
            ToolsList.Bitbucket,
            ToolsList.Jira,
            ToolsList.Sentry,
            ToolsList.Snyk,
        ]
    },
    {
        title: 'Mobile dev with Flutter',
        subtitle: 'for MrWork',
        description: "CI/CD for Google and AppStore, leveling UX by code optimization",
        date: {
            time: '2024-06-20',
            label: '2024-2025'
        },
        stack: [
            ToolsList.Dart,
            ToolsList.Flutter,
            ToolsList.GooglePlay,
            ToolsList.AppStore,
            ToolsList.Auth0,
            ToolsList.Bitbucket,
            ToolsList.Sentry
        ]
    },
    {
        title: 'React developer',
        subtitle: 'for MyBenefit',
        description: "Building caffeteria app with large team",
        date: {
            time: '2020-08-01',
            label: '2020-2021'
        },
        stack: [
            ToolsList.React,
            ToolsList.Redux,
            ToolsList.CSS3,
            ToolsList.JavaScriptES6Plus,
            ToolsList.ReactRouter,
        ]
    },
    {
        title: 'Front-end with React',
        subtitle: 'for Neonet',
        description: "Adapting Venia storefront POC into real world React PWA on Magento 2 API",
        date: {
            time: '2018-12-01',
            label: '2018-2020'
        },
        stack: [
            ToolsList.React,
            ToolsList.Redux,
            ToolsList.CSS3,
            ToolsList.JavaScriptES6Plus,
            ToolsList.ReactRouter,
        ]
    },
] as const;

export const MyWorkSecondary = [
    {
        title: 'Full stack with Node.js & JERN',
        subtitle: 'for bakeMAnia',
        description: "Delivering loyalty system for bakery",
        date: {
            time: '2025-06-10',
            label: '2025, ongoing'
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
            ToolsList.JERN,
            ToolsList.OVH,
            ToolsList.GHActions,
            ToolsList.Github,
        ]
    },
    {
        title: 'React Native developer',
        subtitle: 'for MyBenefit',
        description: "Integrating React Expo with monorepo, leading team",
        date: {
            time: '2020-09-01',
            label: '2020-2021'
        },
        stack: [
            ToolsList.ReactNative,
            ToolsList.ReactExpo,
            ToolsList.Docker,
            ToolsList.JavaScriptES6Plus,
            ToolsList.React
        ]
    },
    {
        title: 'Front-end developer',
        subtitle: 'for Elmark',
        description: "Delivering frontend for Magento 2 e-commerce",
        date: {
            time: '2020-06-01',
            label: '2020'
        },
        stack: [
            ToolsList.HTML5,
            ToolsList.JavaScriptES6Plus,
            ToolsList.CSS3,
        ]
    },
    {
        title: 'Wordpress developer',
        subtitle: 'for 25watt',
        description: "Delivering staging-ready product for handing over",
        date: {
            time: '2018-09-01',
            label: '2018'
        },
        stack: [
            ToolsList.HTML5,
            ToolsList.JavaScriptES6Plus,
            ToolsList.CSS3,
        ]
    },
    {
        title: 'Indie dev with cutting-edge frontend stack',
        subtitle: 'for open usage',
        description: "The most powerfull frontend stack for browser game",
        date: {
            time: '2025-11-01',
            label: '2025, ongoing'
        },
        stack: [
            ToolsList.HTML5,
            ToolsList.JavaScriptES6Plus,
            ToolsList.CSS3,
            ToolsList.Github,
            ToolsList.TypeScript,
            ToolsList.WebComponents
        ]
    },
];

export const MyWorkTertiary = [
    {
        title: 'Mobile dev with Flutter',
        subtitle: 'for bakeMAnia',
        description: "Rapid MVP - backendless loyalty system for bakery business",
        date: {
            time: '2025-06-01',
            label: '2025'
        },
        stack: [
            ToolsList.Flutter,
            ToolsList.Dart,
            ToolsList.GooglePlay,
            ToolsList.AppStore,
        ]
    },
    {
        title: 'Full stack with Vercel & MERN',
        subtitle: 'for self-use',
        description: "App for household budget & taxes",
        date: {
            time: '2024-06-20',
            label: '2024, ongoing'
        },
        stack: [
            ToolsList.React,
            ToolsList.Vercel,
            ToolsList.MERN,
            ToolsList.Auth0,
            ToolsList.TypeScript,
            ToolsList.CSS3,
            ToolsList.Redux,
            ToolsList.NodeJs,
            ToolsList.Mongodb,
        ]
    },
    {
        title: 'Full stack with AWS & MERN',
        subtitle: 'for self-use',
        description: "App for household budget & taxes",
        date: {
            time: '2023-06-10',
            label: '2023-2024'
        },
        stack: [
            ToolsList.React,
            ToolsList.ReactRouter,
            ToolsList.Redux,
            ToolsList.NodeJs,
            ToolsList.Express,
            ToolsList.Github,
            ToolsList.AWS,
            ToolsList.MERN,
            ToolsList.Mongodb,
        ]
    },
];

export const MyEdu = [
    {
        title: "Master's degree",
        subtitle: 'at Communication Design',
        description: "University of Wroclaw. Brand design, communication science, ux/ui, and more",
        date: {
            time: '2016-06-01',
            label: '2016'
        },
        stack: []
    },
    {
        title: "Bachelors's degree",
        subtitle: 'at Journalism and Social Communication',
        description: "University of Wroclaw. Strong writing/communicating skills",
        date: {
            time: '2014-06-01',
            label: '2014'
        },
        stack: []
    },
]

export type MyWorkItem = typeof MyWork[number]