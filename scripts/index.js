// const http = new XMLHttpRequest()

// http.open("GET", "https://en.wikipedia.org/wiki/FC_Barcelona")
// http.send()

// http.onload = () => console.log(http.responseText)

const isKoemanStillCoach = true;

const responseArrayCat = ["No", "Encara no", "Nope", "Ara tampoc", "Que va", "Que nooooooooo", "Potser algun dia", "Hahahahaha No.", "Ni de conya", "Nein!", "Negatiu"]

const koemanReactions = [
    "https://media.giphy.com/media/MATEtHPNJqs5W/giphy.gif",
    "https://media.giphy.com/media/ISnNiDa2NMo6yIjdJN/giphy.gif",
    "https://media.giphy.com/media/YJ2MeW0yc7Uk0/giphy.gif",
    "https://media.giphy.com/media/2mwFCglscRe80/giphy.gif",
    "https://media.giphy.com/media/LqDPaO5hRnmS3W2ff2/giphy.gif",
    "https://media.giphy.com/media/mq9yRYpc65Q9dHwrLx/giphy.gif",
    "https://media.giphy.com/media/Q2hPIFk8RXcOagurLx/giphy.gif",
]


const response = document.getElementById('response');
const headerPic = document.getElementById('headerPic');

const mainButton = document.getElementById('btn1');


function negativeResponse() {
    response.textContent = responseArrayCat[Math.floor(Math.random() * responseArrayCat.length)];
    headerPic.src = koemanReactions[Math.floor(Math.random() * koemanReactions.length)];
    mainButton.textContent = "I ara ?"
}

mainButton.onclick = function () {
    console.log(response);
    isKoemanStillCoach ?
    negativeResponse() :
    response.textContent = "YES"
};
