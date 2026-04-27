  // Reveals logo when scrolling down, shows text when scrolling up or at top
  let lastScrollTop = 0;
  const logo = document.getElementById('nav-logo');
  const text = document.getElementById('nav-text');

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if user is at the very top of the page
    if (scrollTop <= 0) {
      logo.classList.add('opacity-0');
      text.classList.remove('opacity-0');
      text.classList.add('opacity-100');
    } 
    // Scrolling Down: Show Logo, Hide Text
    else if (scrollTop > lastScrollTop) {
      logo.classList.remove('opacity-0');
      logo.classList.add('opacity-100');
      text.classList.remove('opacity-100');
      text.classList.add('opacity-0');
    } 
    // Scrolling Up: Hide Logo, Show Text
    else {
      logo.classList.remove('opacity-100');
      logo.classList.add('opacity-0');
      text.classList.remove('opacity-0');
      text.classList.add('opacity-100');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, false);

  //--------------- TEXT REVEAL -----------------
    window.addEventListener('scroll', reveal);

      function reveal() {
          let reveals = document.querySelectorAll('.reveal-text');
          for (let i = 0; i < reveals.length; i++) {
              let windowHeight = window.innerHeight;
              let revealTop = reveals[i].getBoundingClientRect().top;
              let revealPoint = 50;

              if (revealTop < windowHeight - revealPoint) {
                  reveals[i].classList.add('reveal');
              }
          }
      }