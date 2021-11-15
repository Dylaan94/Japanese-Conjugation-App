let express = require("express");
let router = express.Router();
let axios = require("axios");

let n5Array = [];
let promises = [];

// need to run a number of requests based on the number of pages.
let pages = 7;

router.get("/", (req, res) => {
  for (let i = 1; i < pages; i++) {
    let pageNumber = i;
    promises.push(
      axios
        .get(
          "https://jisho.org/api/v1/search/words?keyword=%23verb%20%23jlpt-n5&page=" +
            pageNumber +
            "" // this selects all verbs on pageNumber
        )
        .then((response) => {
          for (let i = 0; i < response.data.data.length; i++) {
            let verbObject = {
              name: response.data.data[i].japanese[0].word,
              english: response.data.data[i].senses[0].english_definitions[0],
              dictionaryForm: response.data.data[i].japanese[0].reading,
              verbType: response.data.data[i].senses[0].parts_of_speech[0],
            };
            n5Array.push(verbObject);
          }

          console.log(response.data.data);

          let data = response.data.data;
          console.log(n5Array);
          //res.send(n5Array);
        })
    );
  }
  Promise.all(promises).then(() => {
    console.log(n5Array);
    res.send(n5Array);
  }); // need to put this inside the loop??
});

module.exports = router;
