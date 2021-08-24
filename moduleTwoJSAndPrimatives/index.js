// baseData
const baseData = [
  {
    id: 1,
    value: "Value for ID 1"
  },
  {
    id: 2,
    value: "Value for ID 2"
  },
  {
    id: 3,
    value: "Value for ID 3"
  },
  {
    id: 4,
    value: "Value for ID 4"
  },
  {
    id: 5,
    value: "Value for ID 5"
  },
  {
    id: 6,
    value: "Value for ID 6"
  },
]

const addOnData = {
  id: 20,
  value: "I am addon data"
}

/**
 * Your Event listners and Loggers should be added below
 */

document.querySelector('#button1').addEventListener('click', () => {
  // console.log(baseData)
  baseData.forEach(data => console.log(data['id'], data['value']))
})

let reversedBaseData = [...baseData].reverse() //inside to reverse continouslly
// let reversedBaseData = baseData.slice().reverse();

document.querySelector('#button2').addEventListener('click', () => {
  // console.log(reversedBaseData)
  reversedBaseData.forEach(data => console.log(data['id'], data['value']))
})

let withoutFirstItemBaseData = [...baseData];
withoutFirstItemBaseData.shift();

document.querySelector('#button3').addEventListener('click', () => {
  withoutFirstItemBaseData.forEach(data => console.log(data['id'], data['value']))
})

document.querySelector('#button4').addEventListener('click', () => {
  baseData.forEach(data => console.log(data['id'], data['value']))
})

let addObjectBaseData = [...baseData]
addObjectBaseData.unshift(addOnData)

document.querySelector('#button5').addEventListener('click', () => {
  addObjectBaseData.forEach(data => console.log(data['id'], data['value']))
})

let replaceObjectBaseData = [...baseData]
replaceObjectBaseData[2] = addOnData

document.querySelector('#button6').addEventListener('click', () => {
  replaceObjectBaseData.forEach(data => console.log(data['id'], data['value']))
})

/**
 * String stuff
 */

const string = document.querySelector('#stringText').textContent

document.querySelector('#button7').addEventListener('click', () => {
  console.log(string.match(/fox/g).length)
})

let arrayOfWords = string.split(" ")

function reverseWords(arrayOfWords)
{
  let reversedWordsArray = []
  arrayOfWords.forEach(word => {
    reversedWordsArray.push(reverseWord(word))
  })
  return reversedWordsArray
}

function reverseWord(word)
{
  if (word == "") {
    return ""
  } else
    return reverseWord(word.substr(1)) + word.charAt(0);
}

document.querySelector('#button8').addEventListener('click', () => {
  let reversedString = reverseWords(arrayOfWords).join(" ")
  console.log(reversedString)
})

document.querySelector('#button9').addEventListener('click', () => {
  console.log(string.replace(/brown/g, "sandy"))
})

// window.localStorage.clear()
if (window.localStorage.getItem('value') !== null) {
  document.querySelector('#addToLocalStorage').value +=  window.localStorage.getItem('value')
}

document.querySelector('#addToLocalStorage').addEventListener('blur', () => {
  window.localStorage.setItem('value', document.querySelector('#addToLocalStorage').value )
  console.log(localStorage)
})



