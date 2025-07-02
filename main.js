//--------------- NAVBAR BLURRY BACKGROUND EFFECT & PROGRESS BAR -----------------
document.addEventListener("scroll", function() {
  // Navbar blur effect
  let scrollPosition = window.scrollY;
  let navbar = document.querySelector(".navbar");

  if (scrollPosition >= 40) {
    let blurIntensity = Math.min((scrollPosition - 40) / 50, 10);
    navbar.style.backdropFilter = `blur(${blurIntensity}px) brightness(0.8)`;
    navbar.style.webkitBackdropFilter = `blur(${blurIntensity}px) brightness(0.8)`;
    navbar.style.mozBackdropFilter = `blur(${blurIntensity}px) brightness(0.8)`;
    navbar.style.msBackdropFilter = `blur(${blurIntensity}px) brightness(0.8)`;
    navbar.style.oBackdropFilter = `blur(${blurIntensity}px) brightness(0.8)`;
  } else {
    navbar.style.backdropFilter = "none";
    navbar.style.webkitBackdropFilter = "none";
    navbar.style.mozBackdropFilter = "none";
    navbar.style.msBackdropFilter = "none";
    navbar.style.oBackdropFilter = "none";
  }

  // Progress bar (left to right)
  let progressBar = document.getElementById("progress-bar");
  let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercent = (scrollPosition / scrollHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
  progressBar.style.left = "0";
  progressBar.style.right = "auto";
});

//--------------- CHANGE BACKGROUND COLOR ON SCROLL -----------------
document.addEventListener('DOMContentLoaded', function () {
  let aboutSection = document.querySelector('.about-section');
  let header = document.querySelector('header'); // Adjust this selector based on your header structure
  let contactSection = document.getElementById("contact");
  let projectsSection = document.getElementById("projects");

  window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let aboutSectionTop = aboutSection.offsetTop; // Distance from the top of the document to the top of .about-section
    let headerOpacity = Math.min(1, scrollPosition / aboutSectionTop);
    let windowHeight = window.innerHeight;
    let contactSectionHeight = contactSection.offsetHeight;
    let projectsSectionHeight = projectsSection.offsetHeight;
    let contactSectionThreshold = contactSection.offsetTop + contactSectionHeight - windowHeight;
    let projectsSectionThreshold = projectsSection.offsetTop + projectsSectionHeight - windowHeight;

    aboutSection.style.backgroundColor = 'rgba(0, 0, 0, ' + headerOpacity + ')';
    header.style.backgroundColor = 'rgba(0, 0, 0, ' + headerOpacity + ')';

    if (scrollPosition >= contactSectionThreshold || scrollPosition >= projectsSectionThreshold) {
      let opacity = 1 - (scrollPosition - Math.min(contactSectionThreshold, projectsSectionThreshold)) / windowHeight;
      contactSection.style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";
      projectsSection.style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";
    } else {
      contactSection.style.backgroundColor = "black";
      projectsSection.style.backgroundColor = "black";
    }
  });
});

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

//--------------- IMAGES REVEAL -----------------
  window.addEventListener('scroll', revealImages);

    function revealImages() {
      const projectImages = document.querySelectorAll('.image-reveal');

    projectImages.forEach(image => {
      const imagePosition = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Adjust this value based on when you want the animation to trigger
      const revealScrollPoint = windowHeight / 1.5;

      if (imagePosition < revealScrollPoint) {
        image.classList.add('reveal');
      }
    });
  }

//--------------- CREDIT SIDEBAR -----------------
function openNav() {
  document.getElementById("mySidenav").style.width = "40%";
}

function closeNav() {
  event.preventDefault();
  document.getElementById("mySidenav").style.width = "0";
}

function toggleNav() {
  let sidenavWidth = document.getElementById("mySidenav").style.width;
  if (sidenavWidth === "0px" || sidenavWidth === "") {
    openNav();
  } else {
    closeNav();
  }
}

//--------------SCROLLING LOGO CHANGE -----------------
document.addEventListener("DOMContentLoaded", () => {
  const textLogo = document.querySelector(".navbar li");
  const imgLogo = document.querySelector(".logo-img");

  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down
      textLogo.classList.add("hidden");
      imgLogo.classList.add("visible");
    } else {
      // Scrolling up
      textLogo.classList.remove("hidden");
      imgLogo.classList.remove("visible");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative
  });
});
