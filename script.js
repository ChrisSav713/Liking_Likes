var neil = 9;
var nichole = 12;
var jim = 9;

var neilLable = document.querySelector(".neil-likes");
var nicholeLable = document.querySelector(".nichole-likes");
var jimLable = document.querySelector(".jim-likes")

neilLable.innerHTML = neil + " like(s)";
nicholeLable.innerHTML = nichole + " like(s)";
jimLable.innerHTML = jim + " like(s)";

document.querySelector(".neil-button").addEventListener("click", neilClick);
document.querySelector(".nichole-button").addEventListener("click", nicholeClick);
document.querySelector(".jim-button").addEventListener("click", jimClick);

function neilClick() {
    neil++;
    neilLable.innerHTML = neil + " like(s)";
}

function nicholeClick() {
    nichole++;
    nicholeLable.innerHTML = nichole + " like(s)";
}

function jimClick() {
    jim++;
    jimLable.innerHTML = jim + " like(s)";
}