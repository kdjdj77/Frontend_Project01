const menubox1 = document.getElementById("menubox1");
const menubox2 = document.getElementById("menubox2");
const menubox3 = document.getElementById("menubox3");
const menubox4 = document.getElementById("menubox4");
function menu1() {
  menubox1.style.display = "block";
  menubox2.style.display = "none";
  menubox3.style.display = "none";
  menubox4.style.display = "none";
}
function menu2() {
  menubox1.style.display = "none";
  menubox2.style.display = "block";
  menubox3.style.display = "none";
  menubox4.style.display = "none";
}
function menu3() {
  menubox1.style.display = "none";
  menubox2.style.display = "none";
  menubox3.style.display = "block";
  menubox4.style.display = "none";
}
function menu4() {
  menubox1.style.display = "none";
  menubox2.style.display = "none";
  menubox3.style.display = "none";
  menubox4.style.display = "block";
}
const eventbox1 = document.getElementById("eventbox1");
const eventbox2 = document.getElementById("eventbox2");
const eventbox3 = document.getElementById("eventbox3");
const eventbox4 = document.getElementById("eventbox4");
function event1() {
  eventbox1.style.display = "block";
  eventbox2.style.display = "none";
  eventbox3.style.display = "none";
  eventbox4.style.display = "none";
}
function event2() {
  eventbox1.style.display = "none";
  eventbox2.style.display = "block";
  eventbox3.style.display = "none";
  eventbox4.style.display = "none";
}
function event3() {
  eventbox1.style.display = "none";
  eventbox2.style.display = "none";
  eventbox3.style.display = "block";
  eventbox4.style.display = "none";
}
function event4() {
  eventbox1.style.display = "none";
  eventbox2.style.display = "none";
  eventbox3.style.display = "none";
  eventbox4.style.display = "block";
}

function grandsushi() {
  link = 1;
}
function granddrink() {
  link = 2;
}
function grandside() {
  link = 3;
}
function granddessert() {
  link = 4;
}

if (link == 1) {
  event1();
}
if (link == 2) {
  event2();
}
if (link == 3) {
  event3();
}
if (link == 4) {
  event4();
}
