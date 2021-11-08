var express = require("express");
var router = express.Router();
var axios = require("axios")

// jisho.searchForPhrase("たべる").then((result) => {
//     console.log(result.data[0].senses);
//     router.get("/", function (req, res, next) {
//       res.send(JSON.stringify(result));
//     });
// });

router.get('/', (req, res) => {
    axios.get(
      "https://jisho.org/api/v1/search/words?keyword=%23jlpt-n5&page=2"
    ).then(response => {
        console.log(response.data.data[0])
        res.send(JSON.stringify(response.data.data[0]))
    });
})



module.exports = router;
