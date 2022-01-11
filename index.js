sentence = "This is a sentence."
num = 1

function writeSentence100Times() {
    while (num <= 100){
        console.log(sentence);
        num++
    }

    document.getElementById("hiddenSentence").innerHTML = "Open the browers console to see what appeared."
}