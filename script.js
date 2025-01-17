

/*document.addEventListener("DOMContentLoaded", function() {
    // Display loading animation for 2 seconds
    setTimeout(function() {
        // Hide loading animation and show content
        document.getElementById('loading').style.display = 'none';
        //document.getElementById('content').style.display = 'block';
        document.body.style.overflow = 'auto'; // Enable scrolling after loading
    }, 2000); // Set delay to 2 seconds (2000 ms)
});*/

/*document.addEventListener("DOMContentLoaded", function() {
    // Check if the modal has already been shown
    if (!localStorage.getItem("modalShown")) {
        // Display loading animation for 2 seconds
        setTimeout(function() {
            // Hide loading animation and show content
            document.getElementById('loading').style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling after loading
            
            // Show the Bootstrap modal
            var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
                keyboard: true
            });
            myModal.show();

            // Set a flag in localStorage to indicate the modal has been shown
            localStorage.setItem("modalShown", "true");
        }, 2000); // Set delay to 2 seconds (2000 ms)
    } else {
        // Hide loading animation immediately if modal has already been shown
        document.getElementById('loading').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});*/

document.addEventListener("DOMContentLoaded", function() {
    // Display loading animation for 2 seconds
    setTimeout(function() {
        // Hide loading animation and show content
        document.getElementById('loading').style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling after loading

        // Trigger Bootstrap modal
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
            keyboard: true
        });
        myModal.show();
    }, 2000); // Set delay to 2 seconds (2000 ms)
});

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

    // Získání reference na tlačítko
    /*var scrollTopBtn = document.getElementById("scrollTopBtn");

    // Při scrollování stránky
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }

    // Při kliknutí na tlačítko se přesune na začátek stránky
    scrollTopBtn.onclick = function() {
        document.body.scrollTop = 0; // Pro Safari
        document.documentElement.scrollTop = 0; // Pro Chrome, Firefox, IE a Opera
    }*/


    /*document.addEventListener("DOMContentLoaded", function () {
        const incentivesDropdown = document.querySelector('.dropdown-submenu');
    
        incentivesDropdown.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevents the dropdown from closing
        });
    });*/
    



     // Function to handle intersection
 /* const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Add visible class to trigger animation
                }
            });
        };

        // Create an intersection observer
        const observer = new IntersectionObserver(handleIntersection);

        // Observe the heading and content
        observer.observe(document.getElementById('heading_section3'));
        observer.observe(document.getElementById('content_section3'));*/

        const wcards = document.querySelectorAll('.menu_item');

        const withoutscrollobserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show'); // Remove for repeated animations
                }
            });
        }, {
            threshold: 0.5 // 50% of the card must be visible
        });
        
        wcards.forEach(card => withoutscrollobserver.observe(card));
        
         /*---------------------------------------------------------------------------*/

  const progressBar = document.querySelector('.progress.supply');
  const popup = document.querySelector('.popup.supply');

  const animateGrowth = () => {
      let growthPercentage = 0;
      const maxGrowthSteps = [20, 40, 60];
      let currentStep = 0;
      const colors = ['#4caf50', '#ff5722', '#2196f3'];

      const interval = setInterval(() => {
          growthPercentage++;
          progressBar.style.width = growthPercentage + '%';
          progressBar.textContent = Math.floor((growthPercentage / 100) * 250) + 'M';

          if (growthPercentage >= maxGrowthSteps[currentStep]) {
              progressBar.style.backgroundColor = colors[currentStep];

              popup.textContent = `Reached ${Math.floor((maxGrowthSteps[currentStep] / 100) * 250)}M Supply!`;
              popup.style.display = 'block';

              setTimeout(() => {
                  popup.style.display = 'none';
              }, 500);

              currentStep++;

              if (currentStep === maxGrowthSteps.length) {
                  clearInterval(interval);
              }
          }
      }, 50);
  };

  const observersupply = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateGrowth();
          }
      });
  });

  observersupply.observe(document.querySelector('.progress-bar.supply'));


  //--========================================================================================

// Set the date we're counting down to
const targetDate = new Date("2025-04-01T00:00:00").getTime();

// If there's a saved time in localStorage, use that; otherwise, calculate it
let savedTime = localStorage.getItem("countdownEndTime");
if (!savedTime) {
    savedTime = targetDate;
    localStorage.setItem("countdownEndTime", savedTime);
}

// Update the countdown every 1 second
const interval = setInterval(function() {
    // Get the current time
    const now = new Date().getTime();

    // Calculate the distance between now and the target date
    const distance = savedTime - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").textContent = `${days}d`;
    document.getElementById("hours").textContent = `${hours}h`;
    document.getElementById("minutes").textContent = `${minutes}m`;
    document.getElementById("seconds").textContent = `${seconds}s`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".message").textContent = "Presale has ended!";
        document.querySelector(".countdown").style.display = "none";
        localStorage.removeItem("countdownEndTime");  // Remove saved time after countdown ends
    }
}, 1000);


//=========================================================================================

function toggleClubContent(contentId) {
    // Hide all content cards
    document.querySelectorAll('.club-content-card').forEach(content => {
        content.classList.remove('active');
    });

    // Show the selected content card
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}

// Hide content when clicking outside the card
document.addEventListener('click', function(event) {
    const container = document.getElementById('club-container');
    if (!container.contains(event.target)) {
        document.querySelectorAll('.club-content-card').forEach(content => {
            content.classList.remove('active');
        });
    }
});

        


        /*-------------------------------------------*/
         // JavaScript to stop the video when modal is closed
  document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
    var video = document.getElementById('modalVideo');
    video.pause();
    video.currentTime = 0; // Optional: Reset video to the beginning
  });


  
  // animation text

  // Function to handle the intersection observer
  const sections = document.querySelectorAll('.section');
  const options = {
      root: null, // Use the viewport as the container
      threshold: 0.1 // Trigger when 10% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Stop observing once it becomes visible
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section); // Observe each section
  });

 

// card script

/*let lastScrollTop = 0; // Last scroll position
let animationTriggered = false; // Flag to track if animation has been triggered

window.addEventListener('scroll', function() {
    const card = document.getElementById('myCard');
    const cardPosition = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Get current scroll position
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the card is in the viewport and scroll direction is down
    if (cardPosition < windowHeight && cardPosition > 0 && currentScrollTop > lastScrollTop && !animationTriggered) {
        card.classList.add('visible');
        animationTriggered = true; // Set flag to true after animation is triggered
    }

    // Reset the flag if the card is not in the viewport
    if (cardPosition > windowHeight || cardPosition < 0) {
        animationTriggered = false; // Reset flag when card is out of view
    }

    // Update last scroll position
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});*/

/*-----------------------------------------------------*/

const words = document.querySelectorAll('.word');

// Rename the observer to avoid conflict
const wordsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
});

words.forEach(word => {
    wordsObserver.observe(word); // Use wordsObserver instead of observer
});



//---------------------------------------------------------------

const cards = document.querySelectorAll('.boxes_item');

const scrollobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); // Remove for repeated animations
        }
    });
}, {
    threshold: 0.5 // 50% of the card must be visible
});

cards.forEach(card => scrollobserver.observe(card));


//--------------------------------------------------------------------



/*------------------------------------------------------------*/

  // Get references to elements
  const fullLine = document.getElementById('fullLine');
  const animatedText = document.getElementById('animatedText');
  const logo = document.getElementById('logofirstlineanimation');
  const modal = document.getElementById('exampleModal');

  // Modal close event
  modal.addEventListener('hidden.bs.modal', () => {
    // Show full line text
    fullLine.classList.add('visible');

    // After full line animation, show split text animation
    setTimeout(() => {
      animatedText.classList.add('active');

      // After text animation, show logo animation
      setTimeout(() => {
        logo.classList.add('visible');
      }, 1000);
    }, 800); // Delay for full line animation
  });


  //---------------------------------------------------------------------------

 /* window.onscroll = function() {hideButtonsOnScroll()};

  function hideButtonsOnScroll() {
      var button1 = document.getElementById("fixedBtn");
      var button2 = document.getElementById("fixedButtontop");
      var footer = document.querySelector("footer");
      var footerPosition = footer.getBoundingClientRect().top;
      
      // Buttons ko hide karna jab footer screen ke andar aaye
      if (footerPosition <= window.innerHeight) {
          button1.style.display = "none";
          button2.style.display = "none";
      } else {
          button1.style.display = "block";
          button2.style.display = "block";
      }
  }*/

      // Single scroll event handler
/*window.onscroll = function() {
    hideButtonsOnScroll();
    scrollFunction();
};

// Hide buttons when footer is in view
function hideButtonsOnScroll() {
    var button1 = document.getElementById("fixedBtn");
    var button2 = document.getElementById("fixedButtontop");
    var footer = document.querySelector("footer");
    var footerPosition = footer.getBoundingClientRect().top;

    if (footerPosition <= window.innerHeight) {
        button1.style.display = "none";
        button2.style.display = "none";
    } else {
        button1.style.display = "block";
        button2.style.display = "block";
    }
}

// Show/hide scroll-to-top button
function scrollFunction() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Scroll to top on button click
document.getElementById("scrollTopBtn").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

*/
// Get button elements
const fixedBtn = document.getElementById('fixedBtn');
const fixedButtontop = document.getElementById('fixedButtontop'); // Optional
const scrollTopBtn = document.getElementById('scrollTopBtn'); // Optional

// Variables to track scrolling and hover state
let scrollTimer;
let hoverTimer;
let isHovering = false;

// Single scroll event handler
window.onscroll = function () {
    if (!isHovering) {
        hideButtonsOnScroll();
        scrollFunction();
        handleFixedButtonVisibility();
    }
};

// Hide buttons when footer is in view
function hideButtonsOnScroll() {
    const footer = document.querySelector('footer');
    const footerPosition = footer.getBoundingClientRect().top;

    if (footerPosition <= window.innerHeight) {
        fixedBtn.style.display = 'none';
        if (fixedButtontop) fixedButtontop.style.display = 'none';
    } else {
        fixedBtn.style.display = 'block';
        if (fixedButtontop) fixedButtontop.style.display = 'block';
    }
}

// Show/hide scroll-to-top button
function scrollFunction() {
    if (scrollTopBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
}

// Handle visibility of fixed button on scroll
function handleFixedButtonVisibility() {
    // Show the button on scroll
    fixedBtn.style.display = 'block';

    // Clear the timer if it exists
    if (scrollTimer) clearTimeout(scrollTimer);

    // Hide the button 1 second after scroll stops
    scrollTimer = setTimeout(() => {
        if (!isHovering) {
            fixedBtn.style.display = 'none';
        }
    }, 1000);
}

// Add hover events to prevent hiding
fixedBtn.addEventListener('mouseover', () => {
    isHovering = true;
    if (hoverTimer) clearTimeout(hoverTimer); // Clear hover timer if active
});

fixedBtn.addEventListener('mouseout', () => {
    isHovering = false;

    // Start a timer to hide the button 1 second after mouse leaves
    hoverTimer = setTimeout(() => {
        if (!isHovering) {
            fixedBtn.style.display = 'none';
        }
    }, 1000);
});

// Scroll to top on button click
if (scrollTopBtn) {
    scrollTopBtn.onclick = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };
}


/*--------------------------------------------------------------------*/

/*document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("exampleModal");
    const modalVideo = document.getElementById("modalVideo");
    const miniVideoContainer = document.getElementById("miniVideoContainer");
    const miniVideo = document.getElementById("miniVideo");
  
    // Close button with animation
    modal.addEventListener("hidden.bs.modal", () => {
      miniVideoContainer.classList.add("active");
      miniVideo.play(); // Play the mini video after modal closes
    });
  
    // Stop main video when modal closes
    modal.addEventListener("hide.bs.modal", () => {
      modalVideo.pause();
      modalVideo.currentTime = 0; // Reset video to the start
    });
  
    // Hide mini video when clicked
    miniVideoContainer.addEventListener("click", () => {
      miniVideoContainer.classList.remove("active");
      miniVideo.pause();
    });
  });
*/  

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("exampleModal");
    const modalVideo = document.getElementById("modalVideo");
    const miniVideoContainer = document.getElementById("miniVideoContainer");
    const miniVideo = document.getElementById("miniVideo");
  
    // When modal starts closing
    modal.addEventListener("hide.bs.modal", () => {
      modalVideo.pause();
      modalVideo.currentTime = 0; // Reset the main video
    });
  
    // When modal is completely closed
    modal.addEventListener("hidden.bs.modal", () => {
      miniVideoContainer.classList.add("active");
  
      // Start shrinking animation after appearing
      setTimeout(() => {
        miniVideoContainer.classList.add("shrinking");
      }, 500);
  
      // Play mini video
      miniVideo.play();
    });
  
    // Hide mini video when clicked
    miniVideoContainer.addEventListener("click", () => {
      miniVideoContainer.classList.remove("active", "shrinking");
      miniVideo.pause();
    });
  });
  

 /*------------------------------------------------------------*/
  let isHeadingVisible = false; // Track whether the heading is currently visible

  document.addEventListener("scroll", function () {
    const headingTangi = document.getElementById("hedingtangi");
    const scrollY = window.scrollY; // Get current scroll position
  
    // Show the heading when user scrolls down more than 200px
    if (!isHeadingVisible && scrollY > 190) {
      headingTangi.style.display = "block"; // Show the heading
      isHeadingVisible = true; // Mark as visible
    }
  
    // Hide the heading when user scrolls back up less than 200px
    if (isHeadingVisible && scrollY <= 190) {
      headingTangi.style.display = "none"; // Hide the heading
      isHeadingVisible = false; // Mark as not visible
    }
  });
  

  const strings = ["TOKEN", "PAYMENT"];
    const typedElement = document.getElementById("typed");
    let currentIndexpage = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentString = strings[currentIndexpage];
      const typingSpeed = isDeleting ? 80 : 150; // Smoother speed adjustments

      if (!isDeleting) {
        charIndex++;
        typedElement.textContent = currentString.slice(0, charIndex);

        if (charIndex === currentString.length) {
          isDeleting = true;
          setTimeout(type, 2000); // Hold before deleting
          return;
        }
      } else {
        charIndex--;
        typedElement.textContent = currentString.slice(0, charIndex);

        if (charIndex === 0) {
          isDeleting = false;
          currentIndexpage = (currentIndexpage + 1) % strings.length; // Move to next string
        }
      }

      setTimeout(type, typingSpeed);
    }

    type();
    


  
  
  
 


  //--------------------------------------------

  // Select the progress circle and percentage text
const progressCircle = document.getElementById('progress-circle');
const percentageText = document.getElementById('percentage');

// Observer to detect when the circle enters the viewport
const observerCircle = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            progressCircle.classList.add('active'); // Trigger fade-in effect
            animateProgressCircle(0, 33, 2000); // Animate the progress circle to 33%
        }
    });
});

// Observe the progress circle element
observerCircle.observe(progressCircle);

// Function to animate the progress circle
function animateProgressCircle(start, end, duration) {
    let current = start;
    const increment = (end - start) / (duration / 16); // Smooth increment (16ms per frame)
    const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(interval);
        }

        // Update the conic-gradient to reflect progress
        const progressColor = `conic-gradient(
            #a74dfc 0% ${current}%,  /* Purple for progress */
            #e6e6e6 ${current}% 100% /* Gray for remaining */
        )`;
        progressCircle.style.background = progressColor;

        // Update the percentage text
        percentageText.textContent = `${Math.round(current)} B`;
    }, 16);
}


/*-----------------------------------------------------------------------------
---------------------------------------------------------------------------------
function toggleProblemContent(id) {
    const allContent = document.querySelectorAll('.problem-hidden-content');
    allContent.forEach(content => {
      if (content.id !== id) {
        content.style.display = 'none';
      }
    });

    const currentContent = document.getElementById(id);
    if (currentContent.style.display === 'none' || currentContent.style.display === '') {
      currentContent.style.display = 'block';
    } else {
      currentContent.style.display = 'none';
    }
  }

  // Close all content when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('#problem-card')) {
      document.querySelectorAll('.problem-hidden-content').forEach(content => {
        content.style.display = 'none';
      });
    }
  });

  // Scroll Animation
  const observersection2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  // Observe the card for animation
  observersection2.observe(document.getElementById('problem-card-inner'));

*/

function toggleProblemContent(cardContainer, id) {
  const allContent = cardContainer.querySelectorAll('.problem-hidden-content');
  allContent.forEach(content => {
    if (content.id !== id) {
      content.style.display = 'none';
    }
  });

  const currentContent = cardContainer.querySelector(`#${id}`);
  if (currentContent.style.display === 'none' || currentContent.style.display === '') {
    currentContent.style.display = 'block';
  } else {
    currentContent.style.display = 'none';
  }
}

// Apply event listeners dynamically for each card
document.querySelectorAll('.container').forEach(card => {
  const buttons = card.querySelectorAll('.problem-btn-custom');
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const id = event.target.getAttribute('onclick').match(/'([^']+)'/)[1];
      toggleProblemContent(card, id);
      event.stopPropagation(); // Stop click from propagating to document
    });
  });
});

// Global click listener to close dropdowns
document.addEventListener('click', (event) => {
  document.querySelectorAll('.container').forEach(card => {
    if (!card.contains(event.target)) {
      const hiddenContents = card.querySelectorAll('.problem-hidden-content');
      hiddenContents.forEach(content => {
        content.style.display = 'none';
      });
    }
  });
});

// Scroll Animation
const observermetter = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

// Observe all cards
document.querySelectorAll('.problem-content-container').forEach(cardInner => {
  observermetter.observe(cardInner);
});

  //---------------**********************************************************


  
     // JavaScript for Dropdown Toggle
     document.addEventListener("DOMContentLoaded", () => {
        const learnMoreBtn = document.querySelector(".learn-more-btn");
        const dropdownContent = document.querySelector(".dropdown-content");
  
        learnMoreBtn.addEventListener("click", (e) => {
          e.preventDefault(); // Prevent default link behavior
          dropdownContent.classList.toggle("show");
        });
  
        document.addEventListener("click", (e) => {
          // Hide dropdown if clicking outside the card
          if (!dropdownContent.contains(e.target) && !learnMoreBtn.contains(e.target)) {
            dropdownContent.classList.remove("show");
          }
        });
      });


      //=========================================================================
/*
      const toggleBtnInvestorGain = document.getElementById("toggleBtn-investor-gain");
      const hiddenContentInvestorGain = document.getElementById("hiddenContent-investor-gain");
      const cardInvestorGain = document.getElementById("card-investor-gain");
  
      toggleBtnInvestorGain.addEventListener("click", () => {
        hiddenContentInvestorGain.classList.toggle("visible-investor-gain");
        toggleBtnInvestorGain.textContent = hiddenContentInvestorGain.classList.contains("visible-investor-gain")
          ? "Show Less"
          : "Show More";
      });
  
      // Hide/Show content by clicking anywhere on the page
      document.addEventListener("click", (event) => {
        if (!cardInvestorGain.contains(event.target)) {
          hiddenContentInvestorGain.classList.remove("visible-investor-gain");
          toggleBtnInvestorGain.textContent = "Show More";
        }
      });*/

      // Card 1 Elements
const toggleBtnCard1 = document.getElementById("toggleBtn-investor-gain-1");
const hiddenContentCard1 = document.getElementById("hiddenContent-investor-gain-1");
const card1 = document.getElementById("card-investor-gain-1");

// Card 2 Elements
const toggleBtnCard2 = document.getElementById("toggleBtn-investor-gain-2");
const hiddenContentCard2 = document.getElementById("hiddenContent-investor-gain-2");
const card2 = document.getElementById("card-investor-gain-2");

// Card 1 Toggle Functionality
toggleBtnCard1.addEventListener("click", () => {
  hiddenContentCard1.classList.toggle("visible-investor-gain");
  toggleBtnCard1.textContent = hiddenContentCard1.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";
});

// Card 2 Toggle Functionality
toggleBtnCard2.addEventListener("click", () => {
  hiddenContentCard2.classList.toggle("visible-investor-gain");
  toggleBtnCard2.textContent = hiddenContentCard2.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";
});

// Hide Content When Clicking Outside Card 1
document.addEventListener("click", (event) => {
  if (!card1.contains(event.target)) {
    hiddenContentCard1.classList.remove("visible-investor-gain");
    toggleBtnCard1.textContent = "Show More";
  }
});

// Hide Content When Clicking Outside Card 2
document.addEventListener("click", (event) => {
  if (!card2.contains(event.target)) {
    hiddenContentCard2.classList.remove("visible-investor-gain");
    toggleBtnCard2.textContent = "Show More";
  }
});


      /*-----------------------------------------------*/

      const observersupport = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });

    const section = document.querySelector('.support-small-section');
    observersupport.observe(section);

    /*==========================================================*/

    //======================================================================

    document.addEventListener('click', function(event) {
        const hiddenContent = document.getElementById('hiddenContent');
        const showMoreBtn = document.getElementById('showMoreBtn');
        const card = document.querySelector('.card');
    
        // Check if hidden content is expanded
        if (hiddenContent.classList.contains('expanded')) {
            // Check if click is outside card
            if (!card.contains(event.target)) {
                hiddenContent.classList.remove('expanded');
                showMoreBtn.textContent = 'Show More';
            }
        }
    });
    
    // Prevent click inside card from triggering the document click
    document.getElementById('showMoreBtn').addEventListener('click', function(event) {
        event.stopPropagation();
        const hiddenContent = document.getElementById('hiddenContent');
        hiddenContent.classList.toggle('expanded');
        this.textContent = hiddenContent.classList.contains('expanded') ? 'Show Less' : 'Show More';
    });
    
    // Add touch feedback
    document.querySelectorAll('.info-card').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
    
        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });



     /*================================================================*/

     const section9GrowthElement = document.getElementById('section9-growth');
     const section9YearElement = document.getElementById('section9-year');
     const section9Container = document.getElementById('section9-growthContainer');
 
     let section9Growth = 33;
     let section9Year = 2024;
 
     const section9TargetGrowth = 67;
     const section9TargetYear = 2028;
 
     const section9Milestones = [40, 50, 60, 67]; // The growth milestones
     const section9Years = [2025, 2026, 2027, 2028]; // The corresponding years
     let section9MilestoneIndex = 0;
     let section9Interval;
 
     let section9IsAnimationComplete = false;  // Track if the animation has completed
 
     function section9UpdateGrowthAndYear() {
       if (section9MilestoneIndex < section9Milestones.length && !section9IsAnimationComplete) {
         const section9TargetGrowthForStep = section9Milestones[section9MilestoneIndex];
         const section9TargetYearForStep = section9Years[section9MilestoneIndex];
 
         section9Interval = setInterval(() => {
           if (section9Growth < section9TargetGrowthForStep) {
             section9Growth++;
             section9GrowthElement.textContent = `$${section9Growth} Billion`;
           }
 
           if (section9Year < section9TargetYearForStep) {
             section9Year++;
             section9YearElement.textContent = section9Year;
           }
 
           if (section9Growth >= section9TargetGrowthForStep && section9Year >= section9TargetYearForStep) {
             clearInterval(section9Interval);
             section9MilestoneIndex++;
             if (section9MilestoneIndex < section9Milestones.length) {
               setTimeout(section9UpdateGrowthAndYear, 1000);
             }
           }
 
           if (section9Growth === section9TargetGrowth && section9Year === section9TargetYear) {
             section9TriggerFinalAnimation();
             section9IsAnimationComplete = true;
           }
 
         }, 50);
       }
     }
 
     function section9TriggerFinalAnimation() {
       section9Container.classList.add('section9-final-animation');
     }
 
     function section9ResetAnimation() {
       if (!section9IsAnimationComplete) {
         section9Container.classList.remove('section9-final-animation');
         section9Growth = 33;
         section9Year = 2024;
         section9GrowthElement.textContent = `$${section9Growth} Billion`;
         section9YearElement.textContent = section9Year;
       }
     }
 
     const section9Observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting && !section9IsAnimationComplete) {
           section9UpdateGrowthAndYear();
           section9TriggerFinalAnimation();
         } else if (!entry.isIntersecting && !section9IsAnimationComplete) {
           section9ResetAnimation();
         }
       });
     }, { threshold: 0.5 });
 
     section9Observer.observe(section9Container);

     

     /*------------------------------------------------------------

     gsap.registerPlugin(ScrollTrigger);

     const section10CardsContainer = document.getElementById("section10CardsContainer");
 
     gsap.to(section10CardsContainer, {
       x: () => -(section10CardsContainer.scrollWidth - window.innerWidth), // Moves the cards horizontally
       ease: "none",
       scrollTrigger: {
         trigger: "#section10CardsWrapper", // Trigger the scroll animation
         start: "top top", // Start when top of wrapper hits top of viewport
         end: () => `+=${section10CardsContainer.scrollWidth}`, // Dynamic end based on container width
         pin: true, // Pin the cardsWrapper during scroll
         scrub: 0.5, // Smooth scrolling
         invalidateOnRefresh: true, // Adjusts on resize
       },
     });*/


     gsap.registerPlugin(ScrollTrigger);

const section10CardsContainer1 = document.getElementById("section10CardsContainer1");
const section10CardsContainer2 = document.getElementById("section10CardsContainer2");
const section10CardsContainer3 = document.getElementById("section10CardsContainer3");


gsap.to(section10CardsContainer1, {
  x: () => -(section10CardsContainer1.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#section10CardsWrapper1",
    start: "top top",
    end: () => `+=${section10CardsContainer1.scrollWidth}`,
    pin: true,
    scrub: 0.5,
    invalidateOnRefresh: true,
  },
});

gsap.to(section10CardsContainer2, {
  x: () => -(section10CardsContainer2.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#section10CardsWrapper2",
    start: "top top",
    end: () => `+=${section10CardsContainer2.scrollWidth}`,
    pin: true,
    scrub: 0.5,
    invalidateOnRefresh: true,
  },
});

gsap.to(section10CardsContainer3, {
  x: () => -(section10CardsContainer3.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#section10CardsWrapper3",
    start: "top top",
    end: () => `+=${section10CardsContainer3.scrollWidth}`,
    pin: true,
    scrub: 0.5,
    invalidateOnRefresh: true,
  },
});

 
     //------------------------------------------------------------------------------
     //------------------------------------------------------------------------------
 
     document.addEventListener('DOMContentLoaded', function () {
         const closeModalLink = document.querySelector('.close-modal');
         const modalElement = document.getElementById('section_7_modal');
     
         closeModalLink.addEventListener('click', function (e) {
           e.preventDefault(); // Stop immediate navigation
     
           // Close the modal
           const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
           modalInstance.hide();
     
           // Navigate to the href after the modal is fully hidden
           modalElement.addEventListener('hidden.bs.modal', function () {
             window.location.href = closeModalLink.getAttribute('href');
           }, { once: true }); // Use `once` to ensure this is only executed once
         });
       });

       //==================================================-------------------------------------

       // Select the progress bar container, fill, and value text
const progressBarContainer = document.getElementById('progress-bar-container');
const progressFill = document.getElementById('progress-fill');
const progressValue = document.getElementById('progress-value');

let isProgressBarAnimating = false; // Track if animation is running

// Observer to detect when the progress bar enters the viewport
const observerBar = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !isProgressBarAnimating) {
            isProgressBarAnimating = true; // Lock animation
            progressBarContainer.classList.add('active'); // Trigger fade-in animation
            animateProgressBar(0, 70, 2000); // Animate progress bar to 70%
        } else if (!entry.isIntersecting) {
            // Reset when out of view
            isProgressBarAnimating = false; // Allow animation to run again
            resetProgressBar(); // Reset progress bar state
        }
    });
});

// Observe the progress bar container
observerBar.observe(progressBarContainer);

// Function to animate the progress bar
function animateProgressBar(start, end, duration) {
    let current = start;
    const increment = (end - start) / (duration / 16); // Smooth increment (16ms per frame)
    const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end; // Stop at the target value
            clearInterval(interval);
        }

        // Update progress bar width and text
        progressFill.style.width = `${current}%`;
        progressValue.textContent = `${Math.round((current / 100) * 100)}%`; // Update token count in %
    }, 16);
}

// Function to reset the progress bar
function resetProgressBar() {
    progressFill.style.width = '0%'; // Reset width
    progressValue.textContent = '0%'; // Reset text
    progressBarContainer.classList.remove('active'); // Reset animation class
}


//=========================================================================================

function toggleClubContent(contentId) {
  // Hide all content cards
  document.querySelectorAll('.club-content-card').forEach(content => {
      content.classList.remove('active');
  });

  // Show the selected content card
  const selectedContent = document.getElementById(contentId);
  if (selectedContent) {
      selectedContent.classList.add('active');
  }
}

// Hide content when clicking outside the card
document.addEventListener('click', function(event) {
  const container = document.getElementById('club-container');
  if (!container.contains(event.target)) {
      document.querySelectorAll('.club-content-card').forEach(content => {
          content.classList.remove('active');
      });
  }
});


//=========================================================================

const target = 200;
const countElement = document.getElementById("count");

const startCounter = () => {
  let count = 0;
  countElement.textContent = count; // Reset count display
  const interval = setInterval(() => {
      if (count < target) {
          count++;
          countElement.textContent = count;
      } else {
          clearInterval(interval);
      }
  }, 20);
};

const observerelite = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          startCounter();
      }
  });
});

observerelite.observe(document.querySelector('.badge-container'));


//==========================================================================

// Select all lines
const lines = document.querySelectorAll('.line');

// Observe visibility of each line
const observerlineanimation = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the animation class when visible
      entry.target.classList.add('visible');
    } else {
      // Remove the animation class when out of view
      entry.target.classList.remove('visible');
    }
  });
});

// Attach observer to each line
lines.forEach(line => {
  observerlineanimation.observe(line);
});


 //==================================================================================

   // Detect when the table is visible on the screen and apply the fade-in animation
   window.addEventListener('scroll', function() {
    const table = document.querySelector('.limit-table');
    const tablePosition = table.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    // If the table is in view, add the animation class
    if (tablePosition < screenPosition) {
        table.style.opacity = 1;  // Ensure visibility when it comes into view
    }
});


