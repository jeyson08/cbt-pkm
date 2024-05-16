// ----------- DEPART (jusqu'aux choix) ------------ //

// ----------- CONDUCTEUR ------------ //

const conducteur = document.querySelector(".conducteur");
let scriptArray = [
  "Un DRACOLOSSE sauvage apparaît !",
  "Que souhaitez-vous faire ?",
];
let wordIndex = 0;
let letterIndex = 0;

// console.log(scriptArray[1][0]);

const createLetter = () => {
  const letter = document.createElement("span");
  conducteur.appendChild(letter);

  letter.textContent = scriptArray[wordIndex][letterIndex];

  setTimeout(() => {
    // letter.remove();
    conducteur.innerHTML = "";
  }, 2500);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= scriptArray.length) {
      wordIndex = 0;
      letterIndex = 0;
      //   loop();
    } else if (letterIndex < scriptArray[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2500);
    }
  }, 10);
};

setTimeout(() => {
  loop();
}, 1500);

// ----------- CRIS ------------ //

// const ring = () => {
//   const audio = new Audio();
//   audio.src = "../audio/cri-dracolosse.mp3";
//   audio.play();
// };

// window.addEventListener("click", () => {
//   ring();
// });
