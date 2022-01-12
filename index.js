let sentence = "This sentence was logged 100 times."
let num = 1
let num1
let num2
let phrase

function threeConsoleLog() {
    console.log("Log 1");
    console.log("Log 2");
    console.log("Log 3");
}

function writeSentence100Times() {
    while (num <= 100) {
        console.log(sentence);
        num++
    }

    document.getElementById("hiddenSentence").innerHTML = "Open the browers console to see what appeared."
    threeConsoleLog()
}

function biggestNumber() {
    num1 = prompt("Give me a number.")
    num2 = prompt("Give me a second number.")
    let bigNum = Math.max(num1, num2)
    alert("The biggest number between the two is " + bigNum + ".")
}

function fifthLetter(){
    document.getElementById('gameBtn3').style.backgroundColor = "pink";
    phrase = prompt("Type in a word or sentence with at least 5 characters.")
    let letter = phrase.slice(4, 5)
    console.log("The fifth letter of " + "'"+phrase+"'" + " is " + letter);
}