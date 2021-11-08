var express = require("express");
var router = express.Router();
var axios = require("axios");

// jisho.searchForPhrase("たべる").then((result) => {
//     console.log(result.data[0].senses);
//     router.get("/", function (req, res, next) {
//       res.send(JSON.stringify(result));
//     });
// });

var n5Array = [];

// need to run a number of requests based on the number of pages.
router.get("/", (req, res) => {
  axios
    .get(
      "https://jisho.org/api/v1/search/words?keyword=%23verb%20%23jlpt-n5&page=2" // this selects all verbs on page 2
    )
    .then((response) => {
      for (let i = 0; i < response.data.data.length; i++) {
        var verbObject = {
          name: response.data.data[i].japanese[0].word,
          english: response.data.data[i].senses[0].english_definitions[0],
          dictionaryForm: response.data.data[i].japanese[0].reading,
          verbType: response.data.data[i].senses[0].parts_of_speech[0],
        };
        n5Array.push(verbObject);
      }

      console.log(response.data.data);

      var data = response.data.data;

      res.send(n5Array);
    });
});

module.exports = router;
