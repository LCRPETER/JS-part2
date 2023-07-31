const Clickevent = document.querySelector(".click-event");
const P = document.querySelector("p");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
//Ajout de l'événement click à Clickevent
Clickevent.addEventListener("click", function () {
  // ajout des propriétés de la classe Click-event-checked à Clickevent
  Clickevent.classList.toggle("Click-event-checked");
});

btn1.addEventListener("click", function () {
  P.classList.add("answer");
  P.style.background = "green";
});
btn2.addEventListener("click", function () {
  P.classList.add("answer");
  P.style.background = "red";
});

// --------------------------------------------------
// mouse event

const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", function (e) {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", function () {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", function () {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

Clickevent.addEventListener("mouseenter", function () {
  Clickevent.style.background = "rgba(0,0,0,0.6)";
});
Clickevent.addEventListener("mouseout", function () {
  Clickevent.style.background = "black";
});

P.addEventListener("mouseover", function () {
  P.style.transform = "rotate(2deg)";
});

// ------------------------------------------------------------------
// KeyPress event
function ring(key) {
  const audio = new Audio();
  audio.src = "Enter.mp3";
  audio.play();
}

const KeypressContainer = document.querySelector(".keypress");
const keys = document.getElementById("keys");
document.addEventListener("keypress", function (e) {
  keys.textContent = e.key;
  ring(e.key);
});

//-------------------------------------------------------- Scroll event
const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    nav.style.top = "0";
  } else if (window.scrollY < 150) {
    nav.style.top = "-50px";
  }
});

// -------------------------------------------- Les événements sur un input

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
let pseudo = "";
let langage = "";
const Form = document.querySelector("form");
// const cgv = document.getElementById("cgv");
// console.log(cvg);
inputName.addEventListener("input", function (e) {
  pseudo = e.target.value;
});

select.addEventListener("input", function (e) {
  langage = e.target.value;
});

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector(
      "form > div"
    ).innerHTML = `<h3> Pseudo : ${pseudo}</h3>
 <h4>Langage préféré : ${langage}<h4>`;
  } else {
    alert("Veuillez accepter les cgv");
  }
});
