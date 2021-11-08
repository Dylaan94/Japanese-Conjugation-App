var express = require("express");
var router = express.Router();
var got = require("got");
var axios = require("axios")

var JishoAPI = require("unofficial-jisho-api");
var jisho = new JishoAPI();

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

// router.get("/", function (req, res, next) {
//   const apiCall = async () => {
//     try {
//       const response = await got(
//         "https://jisho.org/api/v1/search/words?keyword=%23jlpt-n5&page=2"
//       );
//       console.log(response.body);
//     } catch (error) {
//       console.log(error.response.body);
//     }
//   };
// });

// jisho.searchForPhrase("#jlpt-n5 #verb").then((result) => {
//   console.log(result);
//   router.get("/", function (req, res, next) {
//     res.send(JSON.stringify(result));
//   });
// });

module.exports = router;
