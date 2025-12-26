for (var i = 0; i < document.querySelectorAll("button.drum").length; i++) {
  document
    .querySelectorAll("button.drum")
    [i].addEventListener("click", function () {
      var x = this.textContent;
      playAudio(x);
      flashDrum(x);
    });
}

document.addEventListener("keyup", function (event) {
  var x = event.key;
  playAudio(x);
  flashDrum(x);
});

function flashDrum(pressedKey) {
  document.querySelector("button.drum."+pressedKey).classList.add("pressed");
  setTimeout(function () {document.querySelector("button.drum."+pressedKey).classList.remove("pressed");},100);
}

function playAudio(pressedKey) {
  var x = pressedKey;
  var audioName;

  if (x === "w") {
    audioName = "./sounds/tom-1.mp3";
  } else if (x === "a") {
    audioName = "./sounds/tom-2.mp3";
  } else if (x === "s") {
    audioName = "./sounds/tom-3.mp3";
  } else if (x === "d") {
    audioName = "./sounds/tom-4.mp3";
  } else if (x === "j") {
    audioName = "./sounds/snare.mp3";
  } else if (x === "k") {
    audioName = "./sounds/crash.mp3";
  } else if (x === "l") {
    audioName = "./sounds/kick-bass.mp3";
  } else {
    return;
  }

  var newAudio = new Audio(audioName);
  newAudio.play();
}