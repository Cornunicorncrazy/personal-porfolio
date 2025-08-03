/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("myNav").style.borderRadius = "0%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.transition = "0.25s";
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.fontSize= "0px";
  setTimeout(() =>  {
  document.getElementById("myNav").style.borderRadius = "100%";
  document.getElementById("myNav").style.transition = "0.4s";
  document.getElementById("myNav").style.backgroundColor = "white";
  document.getElementById("myNav").style.fontSize = "36px";
  document.getElementById("myNav").style.width = "0%";
  }, 400); // Delay
}