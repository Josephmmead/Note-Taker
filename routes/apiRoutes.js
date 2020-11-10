const router = require("express").Router();
const store = require("../db/store.js");


router.get("/notes", (req, res) => {
    // this is the GET route where you 
    // will utilize the getNotes() function
    store.getNotes().then((notes) => res.json(notes)).catch((err) => res.status(500).json(err))
    
    
});

router.post("/notes", (req, res) => {
    // this is the POST route where you 
    // will utilize the addNotes() function
    store.addNotes(req.body).then((notes) => res.json(notes)).catch((err) => res.status(500).json(err))
      
});

router.delete("/notes/:id", (req, res) => {
    // this is the delete route where you will
    // utilize the removeNote() function
    store.removeNotes(req.params.id).then(() => res.json({ ok: true })).catch((err) => res.status(500).json(err))

});


module.exports = router;
