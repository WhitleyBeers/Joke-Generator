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

export default makeJoke;
