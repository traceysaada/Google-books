const axios = require("axios");

module.exports = {
    getGoogleBooks: function(req,res) {
        const {query: params} = req;
        axios.get("https://www.googleapis.com/books/v1/volumes", {
            params ,
        })
        .then((response) => {
         //  console.log("response:," response),
            res.json(response.data.items)
        })
        .catch((err) => res.status(422).json(err));
    },
};