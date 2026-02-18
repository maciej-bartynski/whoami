
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
    ReactRouter = 'React router'
}

const MyTools = {
    [ToolSections.React]: [ToolsList.React, ToolsList.Redux, ToolsList.ReactRouter],
    [ToolSections.Coding]: ['Typescript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Dart'],
    [ToolSections.Backend]: ['Node.js', 'express', 'mongodb'],
    [ToolSections.CiCd]: ['Vercel', 'Heroku', 'AWS', 'OVH', 'GHActions', 'Docker'],
    [ToolSections.Mobile]: ['Flutter', 'React Native', 'React Expo'],
    [ToolSections.Stacks]: ['MERN', 'TS + ES imports + WebComponents', 'JSON + ERN'],
    [ToolSections.Platforms]: ['jira', 'github', 'bitbucket', 'auth0', 'Google Play', 'App Store', 'snyk', 'Sentry', 'Chromatic'],
} as const;

const MyWork = [{
    title: '',
    subtitle: '',
    description: '',
    date: {
        time: '',
        label: ''
    },
    stack: [
        ToolsList.React,
        ToolsList.Redux,
        ToolsList.NodeJS,
    ]
}] as const;

export default MyTools
