// selecting all the songs in an array
const songs = ['A.mp3', 'B.mp3', 'C.mp3', 'D.mp3', 'E.mp3'];

// to select the boxes
const boxes = document.querySelectorAll(".box");
// console.log(boxes);

let currentAudio = null;

const playAudio = (song) => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const audio = new Audio(`songs/${song}`);
  audio.play();
  currentAudio = audio;
}

// to check for the keypress
// onkeypress has been deprecated , it does not look for keys like ctrl,shift,esc in all broswers

const checkKeyPress = () => {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyA') {
      playAudio(songs[0]);
    } else if (event.code === 'KeyB') {
      playAudio(songs[1]);
    } else if (event.code === 'KeyC') {
      // console.log('The "c" key has been pressed');
      playAudio(songs[2]);
    } else if (event.code === 'KeyD') {
      // console.log('The "d" key has been pressed');
      playAudio(songs[3]);
    } else if (event.code === 'KeyE') {
      // console.log('The "e" key has been pressed');
      playAudio(songs[4]);
    }
  });

}
// dont forget to call the function lol
checkKeyPress();

// since it is single threaded language basicall we are interating through everything rather 
// selecting them individually
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains('box-1')) {
      // console.log("box-1 has been clicked");
      playAudio(songs[0]);
    } else if (box.classList.contains("box-2")) {
      playAudio(songs[1]);
    } else if (box.classList.contains("box-3")) {
      playAudio(songs[2]);
    } else if (box.classList.contains("box-4")) {
      playAudio(songs[3]);
    } else {
      playAudio(songs[4]);
    }
  });
})


