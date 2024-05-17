// ----------- DEPART (jusqu'aux choix) ------------ //

// ----------- CONDUCTEUR ------------ //

const conducteur = document.querySelector(".conducteur");
let scriptArray = [
  "Un DRACOLOSSE sauvage apparaît !",
  "Que souhaitez-vous faire ?",
];
let wordIndex = 0;
let letterIndex = 0;
const attaquesPlayer = ["Laser glace", "Hydrocanon"];

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

const attachEventListeners = () => {
  const attaquer = document.getElementById("attaquer");
  const objets = document.getElementById("objets");

  if (attaquer) {
    attaquer.addEventListener("click", () => {
      conducteur.innerHTML = `<p id="${attaquesPlayer[0]}">${attaquesPlayer[0]}</p>
        <p id="${attaquesPlayer[1]}">${attaquesPlayer[1]}</p>
        <p id="retour">Retour</p>`;
      document.getElementById("retour").addEventListener("click", () => {
        showInitialOptions();
      });
    });
  }

  if (objets) {
    objets.addEventListener("click", () => {
      conducteur.innerHTML = `<p id="potion">Potion</p>
        <p id="retour">Retour</p>`;
      document.getElementById("retour").addEventListener("click", () => {
        showInitialOptions();
      });
    });
  }
};

const showInitialOptions = () => {
  conducteur.innerHTML = `<p id="attaquer">Attaquer</p>
    <p id="objets">Objets</p>`;
  attachEventListeners();
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= scriptArray.length) {
      //   wordIndex = 0;
      //   letterIndex = 0;
      //   loop();
      showInitialOptions();
      conducteur.style.display = "flex";
      conducteur.style.justifyContent = "space-around";
      conducteur.style.alignItems = "center";
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
