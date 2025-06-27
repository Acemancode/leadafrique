 const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.griditem');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.filter-btn.active')?.classList.remove('active');
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });



    const slider = document.querySelector('.framework-slider');
    let scrollAmount = 0;
    const scrollStep = 320; // Adjust based on your card width + gap
    const scrollInterval = 5000; // 3 seconds

    setInterval(() => {
        if (!slider) return;

        if (scrollAmount + slider.offsetWidth >= slider.scrollWidth) {
            scrollAmount = 0; // Reset to start
        } else {
            scrollAmount += scrollStep;
        }

        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }, scrollInterval);



    const youtubeSlider = document.querySelector('.youtube-scroller');
    let scrollX = 0;
    const scrollDistance = 320;
    const scrollDelay = 5000;

    setInterval(() => {
        if (!youtubeSlider) return;

        if (scrollX + youtubeSlider.offsetWidth >= youtubeSlider.scrollWidth) {
            scrollX = 0;
        } else {
            scrollX += scrollDistance;
        }

        youtubeSlider.scrollTo({
            left: scrollX,
            behavior: 'smooth'
        });
    }, scrollDelay);


