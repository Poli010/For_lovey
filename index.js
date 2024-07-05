let h1 = document.getElementById("label");
let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn")
let container = document.getElementById("container");

function yes(){
    h1.style.fontSize = "25px"
    h1.textContent = "I LOVE YOU MORE MAHAL!!";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

}

noBtn.addEventListener("mouseover", function(){
    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;

    let randomLeft = Math.floor(Math.random() * (containerWidth - noBtn.offsetWidth));
    let randomTop = Math.floor(Math.random() * (containerHeight - noBtn.offsetHeight));

    noBtn.style.left = randomLeft + "px";
    noBtn.style.top = randomTop + "px";
})
