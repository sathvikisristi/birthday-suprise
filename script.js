let screens = document.querySelectorAll(".screen");
let current = 0;

function nextScreen() {
  screens[current].classList.remove("active");
  current++;
  screens[current].classList.add("active");
}

function sayYes() {
  const messages = [
    congratulations you have successfully claimed a unlimited subscription of my love forever and please dont mind me asking silly questions , i dont know why i ask them , but if i dont my head beaks , hence i ask them and you have to answer them with patience ];

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
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg",
  "images/bg4.jpg"
];

function nextScreen() {
  screens[current].classList.remove("active");
  current++;
  screens[current].classList.add("active");

  document.body.style.backgroundImage = `url(${backgrounds[current]})`;
}

