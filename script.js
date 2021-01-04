//Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words.
//  For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··−−·· ·.
// 

function decodeMorse(morseCode) {
    MORSE_CODE = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9"};

    let morseArray = Array.from(morseCode);
    let initEncodedArray = [];
    let indexOfSpace = [];
    morseArray.forEach((morse, index)=>{
        if (morse == " ") {
            indexOfSpace.push(index)
        }

    })
    initEncodedArray.push(morseArray.slice(0,indexOfSpace[0]).join(""))
    for (let i = 0; i < indexOfSpace.length; i++) {
        initEncodedArray.push(morseArray.slice(indexOfSpace[i] + 1,indexOfSpace[i + 1]).join(""))

    }
    initEncodedArray.forEach((morse, index)=>{
        // Object.keys(MORSE_CODE)
        if (morse != "") {
            console.log(MORSE_CODE[morse])
        } else {console.log("empty")}

    })


    // console.log(Object.keys(MORSE_CODE)[0])
    // console.log(MORSE_CODE[Object.keys(MORSE_CODE)[0]])
}

decodeMorse('.... . -.--   .--- ..- -.. .')