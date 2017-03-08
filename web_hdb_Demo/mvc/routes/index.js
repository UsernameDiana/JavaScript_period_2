var express = require('express'); // requesting to use express
var router = express.Router();
var jokes = require('../module/jokes');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index') //<- template, not necessary to .hbs because it was setup in app.js that it is the default engine
});

router.get('/joke', function (req, res, next) {
  //req.session.jokeCount +=1;
  res.render('joke', jokes.getRandomJoke()); // .render(template.hbs, data.method)
});

router.get('/jokes', function (req, res, next) {
  // req.session.jokesCount +=1;
  res.render('jokes', { jokes: jokes.allJokes });
});

// router.post("/", function (req, res, next) {
//   var joke = req.body.joke;
//   jokes.addJoke(joke);
//   res.redirect("/addjoke");
// });


module.exports = router;
