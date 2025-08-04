/* Open when someone clicks on the span element */
function openNav() {
  // changes styles of the body
  document.body.style.backgroundColor = "black";
  document.body.style.overflowY = "hidden"; // Prevents scrolling when the nav is open

  // changes styles of the openNavButton
  document.getElementById("openNavButton").style.backgroundColor = "transparent";
  document.getElementById("openNavButton").style.color = "transparent";

  // changes styles of the navigation overlay
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("myNav").style.borderRadius = "0%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  // changes styles of the body
  document.body.style.backgroundColor = "white";
  document.body.style.overflowY = "auto"; // Allows scrolling when the nav is closed

  // changes styles of the openNavButton
  document.getElementById("openNavButton").style.backgroundColor = "white";
  document.getElementById("openNavButton").style.color = "black";

  // changes styles of the navigation overlay
  document.getElementById("myNav").style.transition = "0.4s";
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.fontSize= "0px";
  
  setTimeout(() =>  {
  document.getElementById("myNav").style.borderRadius = "100%";
  document.getElementById("myNav").style.transition = "0.4s";
  document.getElementById("myNav").style.backgroundColor = "black";
  document.getElementById("myNav").style.fontSize = "36px";
  document.getElementById("myNav").style.width = "0%";
  }, 400); // Delay
}