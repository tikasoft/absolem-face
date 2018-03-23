// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBOCpbBKtiuZZPEFsXbyMa4RDqIfuck6j4",
    authDomain: "ask-for-food.firebaseapp.com",
    databaseURL: "https://ask-for-food.firebaseio.com",
    projectId: "ask-for-food",
    storageBucket: "ask-for-food.appspot.com",
    messagingSenderId: "700799567726"
  }
};
