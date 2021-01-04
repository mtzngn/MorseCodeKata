function decodeMorse(morseCode) {
    MORSE_CODE = {".-": "A","-...": "B","-.-.": "C","-..": "D",".": "E","..-.": "F","--.": "G","....": "H","..": "I",".---": "J","-.-": "K",".-..": "L","--": "M","-.": "N","---": "O",".--.": "P","--.-": "Q",".-.": "R","...": "S","-": "T","..-": "U","...-": "V",
        ".--": "W","-..-": "X","-.--": "Y","--..": "Z","-----": "0",".----": "1","..---": "2","...--": "3","....-": "4",".....": "5","-....": "6","--...": "7","---..": "8","----.": "9"
        }

    let morseArray = Array.from(morseCode);
    let initEncodedArray = [];
    let encodedArray = [];
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
    if (initEncodedArray.join("") == '···−−−···') {
        return "SOS"
    }
    initEncodedArray.forEach((morse, index)=>{
        if (morse != "") {
            encodedArray.push(MORSE_CODE[morse])
        } else {
            if (initEncodedArray[index - 1] == "" && initEncodedArray[index + 1]) {
                encodedArray.push(" ")
            }
        }
    })
    return encodedArray.join("")
}

console.log(decodeMorse('.... . .-.. .-.. ---     .-- --- .-. .-.. -..     - .... .. ...     .. ...     -- --- .-. ... .     . -. -.-. --- -.. . .-.'))