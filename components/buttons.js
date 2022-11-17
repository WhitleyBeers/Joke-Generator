import renderToDOM from '../utils/renderToDOM';

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

export { jokeBtn, punchlineBtn, newJokeBtn };
