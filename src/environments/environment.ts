// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: 'AIzaSyBHXOx1L7YKFMbmZ153zoFiQo8y1Y5d0xc',
    authDomain: 'dnd-poc.firebaseapp.com',
    databaseURL: 'https://dnd-poc.firebaseio.com',
    projectId: 'dnd-poc',
    storageBucket: '',
    messagingSenderId: '957758787764'
};
