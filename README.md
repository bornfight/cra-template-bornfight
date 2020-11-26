
# cra-template-bornfight

Since the template is not yet published on NPM use the following command to create the app template.

`
yarn create react-app app-test -—template file:"pathToLocalRepository"
`


# cra-template-redux-typescript

The official Redux+TS template for [Create React App](https://github.com/facebook/create-react-app).

To use this template, add `--template redux-typescript` when creating a new app.

For example:

```sh
npx create-react-app my-app --template redux-typescript

# or

yarn create react-app my-app --template redux-typescript
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.


### Example of directory structure

Example repo<br />
├───.aws/<br />
├───.git/<br />
├───.github/<br />
├───.idea/<br />
├───.storybook/<br />
├───aws/<br />
├───coverage/<br />
├───cypress/<br />
├───docs/<br />
├───front-vendor/<br />
├───http/<br />
├───node_modules/<br />
├───public/<br />
└───src/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───__fixtures__/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───__mocks__/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───__tests__/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───api/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───common/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───config/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───domain/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───enums/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───errors/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───features/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───fixtures/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───handlers/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───images/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───interfaces/<br /> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───layouts/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───mappers/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───monitoring/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───notifications/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───providers/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───root/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───selectors/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───static/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───store/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───stories/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───styles/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───test-utils/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───transformers/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───typings/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───utils/<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───CacheBuster.tsx<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───index.css<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───index.tsx<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───react-app-env.d.ts<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ├───setupTests.ts<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    └───testUtils.tsx<br />
├───.env<br />
├───.env.development<br />
├───.env.development.coverage<br />
├───.env.e2e-test<br />
├───.env.staging<br />
├───.eslintignore<br />
├───.eslintrc<br />
├───.gitignore<br />
├───.kodiak.toml<br />
├───.prettierignore<br />
├───.prettierrc<br />
├───.stylelintrc<br />
├───CHANGELOG.md<br />
├───CREATE_REACT_APP_README.md<br />
├───Jenkinsfile<br />
├───Jenkinsfile.e2e<br />
├───Jenkinsfile.runcommand<br />
├───README.md<br />
├───antdVariableOverrides.json<br />
├───commitlint.config.js<br />
├───composer.json<br />
├───composer.lock<br />
├───config-overrides.js<br />
├───deploy.php<br />
├───generate-build-version.js<br />
├───package.json<br />
├───tsconfig.json<br />
├───tslint.json<br />
└───yarn.lock<br />
