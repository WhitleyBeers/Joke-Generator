import { jokeBtn } from '../components/buttons';
import makeJoke from './events';
import htmlStructure from './htmlStructure';

// start App
const startApp = () => {
  htmlStructure();
  jokeBtn();
  makeJoke();
};

export default startApp;
