// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

// render to dom
const renderToDOM = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};

// clear dom
const clearDom = () => {
  document.querySelector('#joke-setup').innerHTML = '';
  document.querySelector('#joke-delivery').innerHTML = '';
  document.querySelector('#jokeBtnDiv').innerHTML = '';
  document.querySelector('#punchlineBtnDiv').innerHTML = '';
  document.querySelector('#resetBtnDiv').innerHTML = '';
};

// html structure
const htmlStructure = () => {
  document.querySelector('#app').innerHTML = '<div id="joke-setup"></div><div id="joke-delivery"></div><div id="jokeBtnDiv"></div><div id="punchlineBtnDiv"></div><div id="resetBtnDiv"></div>';
};

// buttons
const jokeBtn = () => {
  const domString = '<button class="btn btn-primary" id="jokeBtn">Get a joke</button>';
  renderToDOM('#jokeBtnDiv', domString);
};

const punchlineBtn = () => {
  const domString = '<button class="btn btn-primary" id="jokeBtn">Get the punchline</button>';
  renderToDOM('#punchlineBtnDiv', domString);
};

const newJokeBtn = () => {
  const domString = '<button class="btn btn-danger" id="jokeBtn">Get a new joke</button>';
  renderToDOM('#resetBtnDiv', domString);
};

// api call
const endPoint = 'https://v2.jokeapi.dev/joke/Spooky?safe-mode&type=twopart';

const getJoke = () => new Promise((resolve, reject) => {
  fetch(endPoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object(data)))
    .catch(reject);
});

// events
const makeJoke = () => {
  getJoke().then((object) => {
    document.querySelector('#jokeBtnDiv').addEventListener('click', () => {
      renderToDOM('#joke-setup', `${object.setup}`);
      document.querySelector('#jokeBtnDiv').innerHTML = '';
      punchlineBtn();
    });
    document.querySelector('#punchlineBtnDiv').addEventListener('click', () => {
      renderToDOM('#joke-delivery', `${object.delivery}`);
      document.querySelector('#punchlineBtnDiv').innerHTML = '';
      newJokeBtn();
    });
    document.querySelector('#resetBtnDiv').addEventListener('click', () => {
      clearDom();
      htmlStructure();
      jokeBtn();
      makeJoke();
    });
  });
};

// start App
const startApp = () => {
  htmlStructure();
  jokeBtn();
  makeJoke();
};

startApp();
