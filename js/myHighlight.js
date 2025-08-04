// This script handles the highlight animations on the page.
document.addEventListener('DOMContentLoaded', () => {
  
  // --- Configuration for animations ---
  // Keyframes for the background reveal effect
  const bgRevealKeyframes = [
    { backgroundSize: '0% 100%' }, // from
    { backgroundSize: '100% 100%' }  // to
  ];

  // Options for the background reveal animation
  const bgRevealOptions = {
    duration: 1500,       // 1.5s
    easing: 'ease-out',
    fill: 'forwards'      // Keep the state of the element at the end of the animation
  };

  // Animate all elements with the .highlight class on page load
  const highlightedElements = document.querySelectorAll('.highlight');
  highlightedElements.forEach(element => {
    element.animate(bgRevealKeyframes, bgRevealOptions);
  });

  // --- Looping Animation for the #adjective element ---
  const highlightAdj = document.getElementById("adjective");
  
  // If the adjective element doesn't exist, do nothing further.
  if (!highlightAdj) {
    return;
  }

  const words = ["tìm tòi", "sáng tạo", "khám phá", "kiên định"];
  const bgColors = ["#cceaf7", "#ffeaa7", "#fab1a0", "#b0ff9aff"];
  let index = 0;

  // Get its width in pixels
  const width = highlightAdj.offsetWidth;

  // Function to loop through adjectives
  function loopAdjective() {

    // Fade out the current adjective
    highlightAdj.style.opacity = 0;

    // Wait for the fade-out transition to complete (0.5s from CSS)
    setTimeout(() => {
      // Update to the next word and color
      index = (index + 1) % words.length;
      highlightAdj.textContent = words[index];

      console.log(`The width of the element is ${width}px`);
  
      // Update background-image to change the gradient color.
      // This avoids resetting other background properties like background-repeat.
      const color = bgColors[index];
      highlightAdj.style.backgroundImage = `linear-gradient(to left, ${color} 100%, transparent 0%)`;
      
      // Re-run the background reveal animation on the adjective
      highlightAdj.animate(bgRevealKeyframes, bgRevealOptions);
      
      // Fade in the new adjective
      highlightAdj.style.opacity = 1;
    }, 500); // This timeout should match the transition duration in myAbout.css
  }

  // Start the loop, changing the word and re-running the animation every 3 seconds.
  setInterval(loopAdjective, 3000);
});