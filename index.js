// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Oscar) {
    cats.push(Oscar)
}

function destructivelyPrependCat(Homer) {
    cats.unshift(Homer)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}
   
function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(Joseph) {
    return [...cats, Joseph]
}

function prependCat(Miles) {
    return [Miles,...cats]
}

function removeLastCat() {
    return cats.slice(0, cats.length-1)
}

function removeFirstCat () {
    return cats.slice(1)
}
