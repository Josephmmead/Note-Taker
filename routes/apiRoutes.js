const router = require("express").Router();
const store = require("../db/store");
const fs = require("fs");



module.exports = function (app) {

router.get("/notes", (req, res) => {
    // this is the GET route where you 
    // will utilize the getNotes() function
    store.getNotes().then((notes) => {
        return res.json(notes);
    })
    
    fs.readFile(store, 'utf8', function (err, data) {
        if (err) throw err;
        let db = json.parse(data);
        console.log(db);
    });
});

router.post("/notes/:id", (req, res) => {
    // this is the POST route where you 
    // will utilize the addNotes() function
    store.addNotes().then((notes) => {
        return res.json(notes);
    })
    
    fs.writeFileSync(store, 'utf8', function (err, data) {
        if (err) throw err;
        let db = json.parse(data);
        console.log(db);
    });
})

router.delete("/notes/:id", (req, res) => {
    // this is the delete route where you will
    // utilize the removeNote() function
    store.removeNote().then((notes) =>{
        return res.json(notes);
    });

    fs.writeFileSync(store, 'utf8', function (err, data) {
        if (err) throw err;
        let db = json.parse(data);
        console.log(db);
    });
})
};
