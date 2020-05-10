const fs = require('fs')

function getNotes() {
    return "Your notes...";
}

function addNote(title, body) {
    const notes = loadNotes()
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}