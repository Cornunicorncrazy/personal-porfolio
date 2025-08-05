const slider = document.querySelector('.activities-container');
let isDown = false;
let startX;
let scrollLeft;

// Function to handle the end of dragging (center-snap logic)
const endDrag = () => {
  isDown = false;
  slider.classList.remove('active');

  // --- Center-Snapping Logic ---
  const sliderVisibleWidth = slider.clientWidth;
  const currentScrollCenter = slider.scrollLeft + sliderVisibleWidth / 2;

  const items = Array.from(slider.querySelectorAll('.activity'));
  if (items.length === 0) return;

  // Find the item whose center is closest to the slider's center
  let closestItem = null;
  let minDistance = Infinity;

  items.forEach(item => {
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    const distance = Math.abs(currentScrollCenter - itemCenter);
    if (distance < minDistance) {
      minDistance = distance;
      closestItem = item;
    }
  });

  // If a closest item is found, calculate the scroll position to center it
  if (closestItem) {
    const targetScrollLeft = closestItem.offsetLeft + closestItem.offsetWidth / 2 - sliderVisibleWidth / 2;
    
    // Smoothly scroll to center the closest item
    slider.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });
  }
};

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', endDrag);
slider.addEventListener('mouseup', endDrag);

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // scroll-fast (speed reduced slightly for better snap feel)
  slider.scrollLeft = scrollLeft - walk;
});