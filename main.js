//--------------- BLURRY BACKGROUND EFFECT -----------------
document.addEventListener("scroll", function() {
    // Get the current scroll position
    let scrollPosition = window.scrollY;

    // Check if scroll position is greater than or equal to 40px
    if (scrollPosition >= 40) {
        // Calculate blur intensity based on scroll position
        let blurIntensity = Math.min((scrollPosition - 40) / 50, 10); // Adjust as needed

        // Apply the blur effect with a darker background
        let navbar = document.querySelector(".navbar");

        navbar.style.backdropFilter = `blur(${blurIntensity}px) brightness(0.8)`;

        // Add vendor prefixes for compatibility
        navbar.style.webkitBackdropFilter = `blur(${blurIntensity}px) brightness(0.8)`;
        navbar.style.mozBackdropFilter = `blur(${blurIntensity}px) brightness(0.8)`;
        navbar.style.msBackdropFilter = `blur(${blurIntensity}px) brightness(0.8)`;
        navbar.style.oBackdropFilter = `blur(${blurIntensity}px) brightness(0.8)`;
    } else {
        // If scroll position is less than 40px, remove the blur effect
        document.querySelector(".navbar").style.backdropFilter = "none";
    }
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

//--------------- CHANGE TEXT ELEMENT -----------------
  // Get the welcome text element
  const welcomeTextElement = document.getElementById("welcomeText");

  // Array of different text values
  const textValues = [
    "Welcome",
    "Bienvenue"
  ];

  let currentIndex = 0;

  // Function to update the text every second
  function updateText() {
    welcomeTextElement.textContent = textValues[currentIndex];
    currentIndex = (currentIndex + 1) % textValues.length;
  }

  // Set an interval to call the updateText function every second (1000 milliseconds)
  setInterval(updateText, 1500);

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









