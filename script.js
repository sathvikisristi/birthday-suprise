let screens = document.querySelectorAll(".screen");
let current = 0;


function sayYes() {
  const messages = [
  "Congratulations ❤️ You have successfully claimed an unlimited subscription of my love forever 💖",
  "Please don’t mind me asking silly questions 😅",
  "I don’t know why I ask them, but if I don’t my head breaks 🤯",
  "So please answer them patiently 🥺❤️"
];

  document.body.innerHTML = `
    <div id="yesScreen" style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      text-align:center;
      background: linear-gradient(to bottom, #ff758c, #ff7eb3);
      color:white;
      font-family:'Segoe UI', sans-serif;
      padding:20px;">
    </div>
  `;

  let i = 0;
  const screen = document.getElementById("yesScreen");

  const interval = setInterval(() => {
    if (i < messages.length) {
      const p = document.createElement("p");
      p.style.fontSize = "22px";
      p.style.margin = "15px 0";
      p.style.opacity = "0";
      p.innerText = messages[i];
      screen.appendChild(p);

      setTimeout(() => {
        p.style.transition = "opacity 1.5s";
        p.style.opacity = "1";
      }, 100);

      i++;
    } else {
      clearInterval(interval);
    }
  }, 2000);
}

function sayNo() {
  let text = document.getElementById("noText");
  text.innerHTML = " heyyyy loosu its not an option 😌 Try again ❤️";
}

function showPhotoMessage(message) {
  const text = document.getElementById("photoMessage");
  text.style.opacity = "0";
  text.innerText = message;

  setTimeout(() => {
    text.style.transition = "opacity 1s";
    text.style.opacity = "1";
  }, 100);
}

const backgrounds = [
  "bg1.png",
  "bg2.jpg",
  "bg3.jpg",
  "bg4.jpg"
];

function nextScreen() {
  if (current < screens.length - 1) {
    screens[current].classList.remove("active");
    current++;
    screens[current].classList.add("active");

    if (backgrounds[current]) {
      document.body.style.backgroundImage = `url(${backgrounds[current]})`;
    }
  }
}



