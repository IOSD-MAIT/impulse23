////////////////// FAQ ///////////////
const quesConts = document.querySelectorAll(".ques-cont");
let open = -1;
quesConts.forEach((cont, i) => {
  const data = cont.querySelector("p");
  cont.addEventListener("click", function () {
    if (open >= 0) {
      const openData = quesConts[open].querySelector("p");
      quesConts[open].classList.remove("open");
      openData.style.maxHeight = 0 + "px";
    }
    if (open !== i || open === -1) {
      data.style.maxHeight = data.scrollHeight + "px";
      cont.classList.add("open");
      open = i;
    } else {
      open = -1;
    }
  });
});

const h3s = document.querySelectorAll("#themes .rules h3");
const uls = document.querySelectorAll("#themes .rules ul");
let open2 = -1;
h3s.forEach((cont, i) => {
  const data = uls[i];
  cont.addEventListener("click", function () {
    if (open2 >= 0) {
      const openData = uls[open2];
      console.log(h3s[open2]);
      h3s[open2].classList.remove("open");
      openData.style.maxHeight = 0 + "px";
    }
    if (open2 !== i || open2 === -1) {
      data.style.maxHeight = data.scrollHeight + "px";
      cont.classList.add("open");
      open2 = i;
    } else {
      open2 = -1;
    }
  });
});

const uiux = document.getElementById("uiux");
if (uiux)
  uiux.addEventListener("click", function () {
    window.location.href = "./uiux.html";
  });
const hackmait = document.getElementById("hackmait");
if (hackmait)
  hackmait.addEventListener("click", function () {
    window.location.href = "./hackmait.html";
  });
const valo = document.getElementById("valo");
if (valo)
  valo.addEventListener("click", function () {
    window.location.href = "./valo.html";
  });
const aiml = document.getElementById("aiml");
if (aiml)
  aiml.addEventListener("click", function () {
    window.location.href = "./aiml.html";
  });
const cp = document.getElementById("cp");
if (cp)
  cp.addEventListener("click", function () {
    window.location.href = "./cp.html";
  });
const quiz = document.getElementById("quiz");
if (quiz)
  quiz.addEventListener("click", function () {
    window.location.href = "./quiz.html";
  });
const chess = document.getElementById("chess");
if (chess)
  chess.addEventListener("click", function () {
    window.location.href = "./chess.html";
  });

/* This code is adding an event listener to the document object that listens for the "DOMContentLoaded"
event, which is fired when the initial HTML document has been completely loaded and parsed. Once
this event is fired, the arrow function is executed, which calls the "updateTime" function using the
"requestAnimationFrame" method. This ensures that the "updateTime" function is called at the optimal
time for rendering, which helps to improve performance and reduce unnecessary resource usage. */
document.addEventListener("DOMContentLoaded", () =>
  requestAnimationFrame(updateTime)
);

/**
 * The function updates the time remaining until a specified event in days, hours, minutes, and
 * seconds.
 */
function updateTime() {
  const currDate = new Date();
  const eventDate = new Date(date);
  const distance = Math.round(eventDate.getTime() - currDate.getTime());
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((distance % (1000 * 60)) / 1000);

  // console.log(seconds);
  document.documentElement.style.setProperty("--timer-day", "'" + days + "'");
  document.documentElement.style.setProperty("--timer-hours", "'" + hrs + "'");
  document.documentElement.style.setProperty(
    "--timer-minutes",
    "'" + mins + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-seconds",
    "'" + secs + "'"
  );
  requestAnimationFrame(updateTime);
}
