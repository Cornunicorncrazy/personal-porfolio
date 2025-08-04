const words = ["tò mò", "sáng tạo", "khám phá", "kiên định"];
const bgColors = ["#cceaf7", "#ffeaa7", "#fab1a0", "#b0ff9aff"];
  let index = 0;

  function loopText() {
    const highlightAdj = document.getElementById("adjective");
    const highlightH1 = document.getElementsByTagName("h1")[1];

    // Fade out text
    highlightAdj.style.opacity = 0;
    highlightH1.style.opacity = 0.5;

    setTimeout(() => {
        // Update text
        index = (index + 1) % words.length;
        highlightAdj.textContent = words[index];
    
        // Update background gradient color
        const color = bgColors[index];
        highlightAdj.style.background = `linear-gradient(to left, ${color} 100%, transparent 0%)`;

        // Re-trigger CSS animation
        highlightAdj.classList.remove("highlight");
        void highlightAdj.offsetWidth; // Force reflow
        highlightAdj.classList.add("highlight");

        // Fade in text
        highlightAdj.style.opacity = 1;
    }, 200);

    setTimeout(() => {
        highlightH1.style.opacity = 1;
    }, 200) // Delay for the h1 line to fade in

  }

  window.onload = function() {
    setInterval(loopText, 3000);
  };