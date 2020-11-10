const util = require("util");
const fs = require("fs");
// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const { uuid } = require('uuidv4');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Store {
  read() {
    return readFileAsync("db/db.json", "utf8")
  }

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note))
  }

  getNotes() {
    return this.read().then((notes) => {     
      let parsedNotes;
      // If notes isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedNotes = [].concat(JSON.parse(notes))
      } catch (err) {
        parsedNotes = []
      }
      return parsedNotes
    })
  }

  addNotes(note) {
    // set up variables with our notes data here 
    const {title, text} = note
    // Error handle here, if we have no title or text added throw a new error explaining what is wrong
    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank")
    }
    const newNote = {title, text, id: uuid()}
    // console.log(newNote);
    // Add a unique id to the note using uuid package
    return this
     .getNotes().then((notesArray) => [...notesArray, newNote]).then((newNotes) => this.write(newNotes)).then(() => newNote)
    // Get all notes, add the new note, write all the updated notes, return the newNote
  }

  removeNotes(id) {
    // Get all notes, remove the note with the given id, write the filtered notes
    return this
    .getNotes().then((notes) => notes.filter((note) => note.id !== id)).then((updatedNotes) => this.write(updatedNotes))
  }
};
module.exports = new Store()
