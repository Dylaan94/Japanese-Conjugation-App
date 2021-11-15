let express = require("express");
let router = express.Router();
let axios = require("axios");

let n5Array = [];
let promises = [];
let pages = 7;

router.get("/", (req, res) => {
  // i initialised to 1 as pages start at 1, iterates through set number of pages
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
          // create objects for each verb and add to array
          for (let i = 0; i < response.data.data.length; i++) {
            let verbObject = {
              name: response.data.data[i].japanese[0].word,
              english: response.data.data[i].senses[0].english_definitions[0],
              dictionaryForm: response.data.data[i].japanese[0].reading,
              verbType: response.data.data[i].senses[0].parts_of_speech[0],
            };
            n5Array.push(verbObject);
          }
        })
    );
  }
  // once all promises have returned, send to router
  Promise.all(promises).then(() => {
    console.log(n5Array);
    res.send(n5Array);
  });
});

module.exports = router;
