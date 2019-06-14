var epaule = "";
var textEpaul = "";
var epauleVar = "";

var epaule = document.getElementsByClassName("membre") [0]

function openModal(ep) {
    epauleVar = ep;
    textEpaul = document.getElementById("text-"+ep).innerHTML;
    // document.getElementById("title-modal").innerHTML = titleAnimal;
    document.getElementById("epaule").innerHTML = textEpaul;
    epaule.style.display = "block";
}