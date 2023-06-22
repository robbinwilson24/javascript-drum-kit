let modal = document.querySelector(".modal")
let infoButton = document.querySelector(".info");
let closeButton = document.querySelector(".closeModal");

function playSound(e) {
    let audio;
    let key;

    if (e.type === "keydown") {
      audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    } else if (e.type === "click") {
      const dataKey = e.currentTarget.getAttribute("data-key");
      audio = document.querySelector(`audio[data-key="${dataKey}"]`);
      key = e.currentTarget;
    }

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }

  function removeTransition(e) {
    if (e.propertyName !== "transform")
      return;
    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
    key.addEventListener("click", playSound);
  });

  window.addEventListener("keydown", playSound);

  infoButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  })
  
