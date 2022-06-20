const tabmenu1 = document.getElementById("tabmenu1");
const tabmenu2 = document.getElementById("tabmenu2");
const tabmenu3 = document.getElementById("tabmenu3");
function tab1() {
  tabmenu1.style.display = "block";
  tabmenu2.style.display = "none";
  tabmenu3.style.display = "none";
}
function tab2() {
  tabmenu1.style.display = "none";
  tabmenu2.style.display = "block";
  tabmenu3.style.display = "none";
}
function tab3() {
  tabmenu1.style.display = "none";
  tabmenu2.style.display = "none";
  tabmenu3.style.display = "block";
}