function getNoteId() {
    let noteObject = getExistingingNotes()
    if(!noteObject){
        return 1
}
const keysArray = Object.keys(noteObject)
const numberKeys = keysArray.map((key)=>Number(key))
console.log(numberKeys)
return Math.max(...numberKeys) + 1
}

function getExistingingNotes() {
    let notes = localStorage.getItem('notes')
    if(!notes){
        return null
    }
    return JSON.parse(notes)
}