var jokes = [
  "A day without sunshine is like, night.",
  "At what age is it appropriate to tell my dog that he's adopted?",
  "I intend to live forever, or die trying",
  "Emil: Time for a break!"
];

module.exports = {
  allJokes: jokes,
  getRandomJoke: getRandomJoke,
  addJoke: addJoke
}

// make function getrandomJoke to reference of allJokes
function getRandomJoke() {
  var rnd = {};
  var random = Math.floor(Math.random() * jokes.length);
  rnd = { joke: jokes[random] };
  return rnd;
}

//make function addJoke
function addJoke() {
  jokes.push("some joke here");
}

getRandomJoke();
addJoke();