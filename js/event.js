function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

// option3: adding onclick functionality

const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = BlueButton;

function BlueButton() {
  document.body.style.backgroundColor = "blue";
}

// option 4: making purple bg using onclick functionality

const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function () {
  document.body.style.backgroundColor = "purple";
};

const pinkButton = document.getElementById("make-pink");

pinkButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "pink";
});

// option 5 another version
const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", makeGreenButton);

function makeGreenButton() {
    document.body.style.backgroundColor = "green";
}


// option 5//this is the final option we will use most of the time
document.getElementById("make-tomato").addEventListener("click", function() {
    document.body.style.backgroundColor = 'tomato';
});

function onclickHandler(){
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerHTML = 'default text changed';
}