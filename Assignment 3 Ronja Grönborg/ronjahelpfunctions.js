

function charRemove(char, text) {
    return text.split(char).join("");
}

function runCharRemove() {
    const char = document.getElementById("charInput").value;
    const text = document.getElementById("textInput").value;


const resultat = charRemove(char, text);

document.getElementById("resultat").textContent = resultat;
}