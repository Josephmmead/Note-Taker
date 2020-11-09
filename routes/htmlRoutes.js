const path = require("path");
const router = require("express").Router();


module.exports = function(app) {
router.get("/notes", (req, res) => {
    //render the notes HTML page
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
    // render the HTML page index.html
   res.sendFile(path.join(__dirname, "../public/index.html"));

});

};