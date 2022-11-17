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

export default getJoke;
