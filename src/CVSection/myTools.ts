
enum ToolSections {
    React = 'React',
    Coding = 'Coding',
    Backend = 'Backend',
    CiCd = 'CI/CD',
    Mobile = 'Mobile',
    Stacks = 'Stacks',
    Platforms = 'Platforms',
}

enum ToolsList {
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

const MyTools = {
    [ToolSections.React]: [ToolsList.React, ToolsList.Redux, ToolsList.ReactRouter],
    [ToolSections.Coding]: [ToolsList.TypeScript, ToolsList.JavaScriptES6Plus, ToolsList.HTML5, ToolsList.CSS3, ToolsList.Dart],
    [ToolSections.Backend]: [ToolsList.NodeJs, ToolsList.Express, ToolsList.Mongodb],
    [ToolSections.CiCd]: [ToolsList.Vercel, ToolsList.Heroku, ToolsList.AWS, ToolsList.OVH, ToolsList.GHActions, ToolsList.Docker],
    [ToolSections.Mobile]: [ToolsList.Flutter, ToolsList.ReactNative, ToolsList.ReactExpo],
    [ToolSections.Stacks]: [ToolsList.MERN, ToolsList.WebComponents, ToolsList.JERN],
    [ToolSections.Platforms]: [ToolsList.Jira, ToolsList.Github, ToolsList.Bitbucket, ToolsList.Auth0, ToolsList.GooglePlay, ToolsList.AppStore, ToolsList.Snyk, ToolsList.Sentry],
} as const;

const MyWork = [
    {
        title: 'Front-end dev with React',
        subtitle: 'for MrWork',
        description: "Build a Product for HR multiproducts app, integrate external SaaS'es with HR app",
        date: {
            time: '23.03.2021',
            label: '2021, ongoing'
        },
        stack: [
            ToolsList.React,
            ToolsList.Redux,
            ToolsList.NodeJs,
        ]
    }
] as const;

export default MyTools

/**topH={caseLevel}
                            title={'Front-end dev with React'}
                            subtitle={'for MrWork'}
                            description={"Build a Product for HR multiproducts app, integrate external SaaS'es with HR app"}
                            timeDate="23.03.2021"
                            timeDisplay="2021, ongoing"
                        />

                        <ExperienceCase
                            topH={caseLevel}
                            title={'Mobile dev with Flutter'}
                            subtitle={'for MrWork'}
                            description={"CI/CD for Flutter App for Google and AppStore, leveling UX by code optimization"}
                            timeDate="20.06.2024"
                            timeDisplay="2024, ongoing"
                        />

                        <ExperienceCase
                            topH={caseLevel}
                            title={'Front-end with React'}
                            subtitle={'for Neonet'}
                            description={"Adapting Venia storefront POC into real world React PWA on Magento 2 API"}
                            timeDate="20.06.2024"
                            timeDisplay="2024, ongoing"
                        /> */
