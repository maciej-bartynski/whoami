export enum DevTools {

    // frontend
    VanillaJs = 'javascript ES6+',
    VanillaHtml = 'HTML 5',
    VanillaCss = 'CSS 3',
    SCSS = 'SCSS',
    ESImports = 'ES imports',
    NPM = 'NPM manager',
    Yarn = 'yarn',

    // programming
    Typescript = 'typescript',
    NodeJS = 'node.js',
    Express = 'express',
    CRUD = 'CRUD',
    RestApi = 'REST API',
    Dart = 'dart',
    ArduinoC = 'C (for adruino)',
    Java = 'Java (mobile)',

    // environment
    Webpack = 'webpack',
    Rollup = 'rollup',
    Vite = 'vite',

    // tests
    Vitest = 'vitest',
    Jest = 'jest',

    // Frameworks
    Heroku = 'heroku',
    Vercel = 'vercel',

    // react
    React = 'react',
    Redux = 'redux',
    ReduxToolkig = 'redux toolkit',
    ReduxThunk = 'redux thunk',
    ReactRouter = 'react router',
    StyledComponents = 'styled components',
    Storybook = 'storybook',

    // mobile
    Flutter = 'flutter',
    ReactNative = 'react native',
    ReactExpo = 'react expo',
    GooglePlay = 'google play',
    GoogleDeveloperConsole = 'google developer console',
    AppStore = 'app store',

    // IDE
    VSC = 'VSCode',
    AndroidStudio = 'android studio',
    XCode = 'Xcode',
    Cursor = 'cursor',

    // other
    GIT = 'git',
    Bash = 'bash',
    Thermux = 'thermux',
    Zsh = 'zsh',
    AwsCloud = 'AWS cloud basics',
    OVHCloud = 'OVH cloud',
    Bitbucket = 'bitbucket',
    Github = 'github',
    Jira = 'jira',
    Snyk = 'snyk',

    //OS
    Windows = 'windows',
    UbuntuLinux = 'ubuntu',
    MacOS = 'macOS',
    DualBoot = 'dual boot',
    Docker = 'docker',
    GithubActions = 'github actions',
    BitbucketPipelines = 'bitbucket pipelines'

}

const StorylineTypo = [
    {
        importance: 1,
        project: 'mrWork, react web app',
        role: 'react developer',
        type: 'building, maintenance',
        stack: 'front-end',
        state: '2021, ongoing',
        searchBy: [
            DevTools.VSC,
            DevTools.React,
            DevTools.ReactRouter,
            DevTools.Redux,
            DevTools.ReduxThunk,
            DevTools.ReduxToolkig,
            DevTools.Bitbucket,
            DevTools.GIT,
            DevTools.Docker,
            DevTools.NodeJS,
            DevTools.NPM,
            DevTools.Bash,
            DevTools.MacOS,
            DevTools.Bitbucket,
            DevTools.Snyk,
            DevTools.Typescript,
        ]
    },
    {
        importance: 1,
        project: 'mrWork mobile app',
        role: 'flutter developer',
        type: 'building, maintenance',
        stack: 'mobile, google play, app store',
        state: '2025, closed',
        searchBy: [
            DevTools.AndroidStudio,
            DevTools.XCode,
            DevTools.VSC,
            DevTools.Flutter,
            DevTools.Dart,
            DevTools.GoogleDeveloperConsole,
            DevTools.GooglePlay,
            DevTools.AppStore,
            DevTools.MacOS,
        ]
    },
    {
        importance: 1,
        project: 'TRAINS - game',
        role: 'javascript architect',
        type: 'building',
        stack: 'front-end',
        state: '2025, ongoing',
        searchBy: [
            DevTools.VSC,
            DevTools.MacOS,
            DevTools.VanillaCss,
            DevTools.VanillaHtml,
            DevTools.VanillaJs,
            DevTools.ESImports,
            DevTools.Github,
            DevTools.GIT,
            DevTools.GithubActions,
            DevTools.Typescript
        ]
    },
    {
        importance: 2,
        project: 'myBenefit pwa',
        role: 'react developer',
        type: 'building',
        stack: 'front-end',
        state: '2020/21',
        searchBy: [
            DevTools.VSC,
            DevTools.React,
            DevTools.ReactRouter,
            DevTools.Redux,
            DevTools.ReduxThunk,
            DevTools.Bitbucket,
            DevTools.Bash,
            DevTools.UbuntuLinux,
            DevTools.NPM
        ]
    },
    {
        importance: 2,
        project: 'neonet.pl pwa',
        role: 'react developer',
        type: 'building',
        stack: 'front-end',
        state: '2019/20/21',
        searchBy: [
            DevTools.VSC,
            DevTools.React,
            DevTools.Redux,
            DevTools.ReduxThunk,
            DevTools.SCSS,
            DevTools.GIT,
            DevTools.Bitbucket,
            DevTools.Bash,
            DevTools.UbuntuLinux,
            DevTools.ReactRouter,
        ]
    },
    {
        importance: 2,
        project: 'bakeMAnia pwa',
        role: 'architect, node.js dev, react dev',
        type: 'building, mvp',
        stack: 'full (FE/BE), ovh cloud',
        state: '2025, ongoing',
        searchBy: [
            DevTools.VSC,
            DevTools.MacOS,
            DevTools.React,
            DevTools.ReactRouter,
            DevTools.ReduxToolkig,
            DevTools.OVHCloud,
            DevTools.Docker,
            DevTools.Github,
            DevTools.GithubActions,
            DevTools.GIT,
            DevTools.CRUD,
            DevTools.NodeJS,
            DevTools.RestApi,
            DevTools.Cursor,
            DevTools.Express,
            DevTools.Vite,
            DevTools.Vitest,
            DevTools.Typescript,
        ]
    },
    {
        importance: 2,
        project: 'myBenefit, mobile app',
        role: 'react native developer',
        type: 'building, maintenance',
        stack: 'mobile',
        state: '2020/21',
        searchBy: [
            DevTools.VSC,
            DevTools.ReactNative,
            DevTools.ReactExpo,
            DevTools.AndroidStudio,
            DevTools.Java,
            DevTools.GIT,
            DevTools.Docker,
            DevTools.Redux,
            DevTools.Bitbucket,
            DevTools.Bash,
            DevTools.UbuntuLinux,
            DevTools.NPM
        ]
    },
    {
        importance: 2,
        project: 'mrWork, web widgets',
        role: 'javascript developer',
        type: 'building, maintenance',
        stack: 'front-end',
        state: '2025, ongoing',
        searchBy: [
            DevTools.VSC,
            DevTools.VanillaJs,
            DevTools.VanillaHtml,
            DevTools.VanillaCss,
            DevTools.Bitbucket,
            DevTools.GIT,
            DevTools.Bash,
            DevTools.MacOS,
            DevTools.Bitbucket,
            DevTools.Typescript,
        ]
    },
    {
        importance: 2,
        project: 'vivko web app 2.0',
        role: 'nextJs developer',
        type: 'building, MVP',
        stack: 'full (FE/BE), vercel cloud',
        state: '2025, ongoing',
        searchBy: [
            DevTools.VSC,
            DevTools.MacOS,
            DevTools.React,
            DevTools.ReduxToolkig,
            DevTools.Vercel,
            DevTools.Jest,
            DevTools.Github,
            DevTools.GIT,
            DevTools.CRUD,
            DevTools.GithubActions,
            DevTools.NodeJS,
            DevTools.RestApi,
        ]
    },
    {
        importance: 2,
        project: 'elmark magento 2.0',
        role: 'front-end developer',
        type: 'building',
        stack: 'html/css/js/php',
        state: '2020/21',
        searchBy: [
            DevTools.VSC,
            DevTools.VanillaCss,
            DevTools.VanillaHtml,
            DevTools.VanillaJs,
            DevTools.GIT,
            DevTools.Bitbucket,
            DevTools.Bash,
            DevTools.UbuntuLinux
        ]
    },
    {
        importance: 2,
        project: 'sound intel, react web app',
        role: 'react developer',
        type: 'building, maintenance',
        stack: 'front-end, node.js',
        state: '2021',
        searchBy: [
            DevTools.VSC,
            DevTools.React,
            DevTools.ReactRouter,
            DevTools.Bitbucket,
            DevTools.GIT,
            DevTools.Docker,
            DevTools.NodeJS,
            DevTools.NPM,
            DevTools.Bash,
            DevTools.DualBoot,
            DevTools.Typescript,
        ]
    },
    {
        importance: 3,
        project: 'vivko web app 1.0',
        role: 'react dev, node.js dev, architect',
        type: 'building, mvp',
        stack: 'full (FE/BE), aws cloud',
        state: '2023/24, closed',
        searchBy: [
            DevTools.VSC,
            DevTools.UbuntuLinux,
            DevTools.React,
            DevTools.ReduxToolkig,
            DevTools.AwsCloud,
            DevTools.Jest,
            DevTools.Github,
            DevTools.GIT,
            DevTools.CRUD,
            DevTools.GithubActions,
            DevTools.NodeJS,
            DevTools.RestApi,
            DevTools.Express,
            DevTools.Typescript,
            DevTools.Thermux
        ]
    },
    {
        importance: 3,
        project: 'bakeMAnia mobile app',
        role: 'flutter developer',
        type: 'building',
        stack: 'mobile, google play',
        state: '2025, closed',
        searchBy: [
            DevTools.AndroidStudio,
            DevTools.XCode,
            DevTools.VSC,
            DevTools.Flutter,
            DevTools.Dart,
            DevTools.GoogleDeveloperConsole,
            DevTools.GooglePlay,
            DevTools.AppStore,
            DevTools.MacOS,
        ]
    },

    {
        importance: 3,
        project: 'neonet.pl magento 1.0',
        role: 'front-end developer',
        type: 'maintenance',
        stack: 'html/css/js/php',
        state: '2019/20',
        searchBy: [
            DevTools.VSC,
            DevTools.VanillaCss,
            DevTools.VanillaHtml,
            DevTools.VanillaJs,
            DevTools.GIT,
            DevTools.Bitbucket,
            DevTools.Bash,
            DevTools.UbuntuLinux
        ]
    },

    {
        importance: 3,
        project: 'neo24 magento 1.0',
        role: 'front-end developer',
        type: 'maintenance',
        stack: 'html/css/js/php',
        state: '2019/20',
        searchBy: [
            DevTools.VSC,
            DevTools.VanillaCss,
            DevTools.VanillaHtml,
            DevTools.VanillaJs,
            DevTools.GIT,
            DevTools.Bitbucket,
            DevTools.Bash,
            DevTools.UbuntuLinux
        ]
    },

    {
        importance: 4,
        project: 'sound intel, angular web app',
        role: 'front-end developer',
        type: 'bugfixing, maintenance',
        stack: 'front-end, node.js',
        state: '2021',
        searchBy: [
            DevTools.VSC,
            DevTools.Bash,
            DevTools.NodeJS,
            DevTools.NPM,
            DevTools.Bitbucket,
            DevTools.GIT,
            DevTools.DualBoot,
            DevTools.Typescript,
        ]
    },

    {
        importance: 4,
        project: 'set of NPM packges',
        role: 'node.js developer',
        type: 'building',
        stack: 'nodeJs, npm',
        state: '2025, ongoing',
        searchBy: [
            DevTools.VSC,
            DevTools.MacOS,
            DevTools.NodeJS,
            DevTools.VanillaJs,
            DevTools.ESImports,
            DevTools.Github,
            DevTools.GIT,
            DevTools.GithubActions,
            DevTools.Typescript,
            DevTools.Vite,
            DevTools.Vitest,
            DevTools.Jest
        ]
    },

    {
        importance: 4,
        project: 'wordpress freelance',
        role: 'wordpress dev',
        type: 'freelance',
        stack: 'full (FE/BE)',
        state: '~2018',
        searchBy: [
            DevTools.SCSS, DevTools.VSC, DevTools.VanillaCss, DevTools.VanillaJs, DevTools.VanillaHtml,
            DevTools.GIT,
            DevTools.Github,
            DevTools.Bash,
            DevTools.Windows,
        ]
    },

]

export default StorylineTypo;