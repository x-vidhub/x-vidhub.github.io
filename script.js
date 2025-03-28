// ===============================alart function start =================================================

   const REDIRECT_DELAY = 2000; // 2 seconds
        const REVISIT_TIME = 30000; // 30 seconds

        window.onload = () => {
            const lastVisit = localStorage.getItem('lastVisit');
            const currentTime = new Date().getTime();

            // Check if 30 seconds have passed since the last visit
            if (!lastVisit || currentTime - lastVisit > REVISIT_TIME) {
                // Add dimmed effect to the page
                document.body.classList.add('dimmed');

                // Create and show alert box
                const alertBox = document.createElement('div');
                alertBox.id = 'alert-box';
                alertBox.innerHTML = '<p>To see video visit again after redirection</p>';
                document.body.appendChild(alertBox);

                setTimeout(() => {
                    // Save current visit time
                    localStorage.setItem('lastVisit', currentTime);

                    // Redirect the user
                    window.location.href = "https://ln.run/fdTxf"; // Replace with your redirect URL
                }, REDIRECT_DELAY);
            } else {
                console.log("User has already visited recently. No redirection.");
            }
        };
// ===============================alart function start =================================================

// ===============================slider function start =================================================

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "fade");
    dots[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active", "fade");
      dots[i].classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto-play the slider
setInterval(nextSlide, 3000);

// Dots click event
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentSlide = i;
    showSlide(i);
  });
});

// Initialize the first slide
showSlide(currentSlide);


// ===============================slider function end =================================

// ===============================video player start =================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded. Initializing single popunder trigger.");

    // Flag to track if the popunder has already been triggered
    let popunderTriggered = false;

    // Function to trigger the popunder
    const triggerPopunder = () => {
        if (!popunderTriggered) {
            popunderTriggered = true; // Set the flag to true after first trigger
            console.log("Popunder triggered!");
            window.open("https://nidyglimo.com/b.3/VI0ZPS3/phvBbSmvV_JiZJDP0r2rMQjOEI3NMqzZMd3ZLnTGYry/MHTxcPznMIz/gk", "_blank"); // Replace with your desired link
        } else {
            console.log("Popunder already triggered. No action taken.");
        }
    };

    // Global click handler for the entire page
    document.addEventListener("click", (event) => {
        console.log("Global click detected!");
        triggerPopunder(); // Call the popunder function
    });

    // Special handling for the video element
    const videoElement = document.querySelector("video");
    if (videoElement) {
        videoElement.addEventListener("click", (event) => {
            console.log("Click on video detected!");
            event.stopPropagation(); // Prevent the video click from propagating globally
        });
    }
});


// ===============================video player end =================================
// ================================button function start ============================== 

const startButton = document.getElementById('startButton');
const countdownElement = document.getElementById('countdown');
const nextButton = document.getElementById('nextButton');
const finalLink = document.getElementById('finalLink');

let step = 0;

// // Initial redirection link
// const initialLink = "https://ln.run/yoAGw"; // Replace with the link you want to open in a popup

// document.addEventListener("DOMContentLoaded", () => {
//     if (step === 0) {
//         // Open the first link in a popup window
//         openPopupWindow("https://ln.run/J_Evd", 1500, 1000); // Popup with specified width and height
//         step++; // Move to the next step after redirection
//     } else {
//         startCountdown(); // Start the countdown for the next step
//     }
// });

// const initialLink = "https://ln.run/yoAGw"; // Replace with the link you want to open in a new window

// document.addEventListener("DOMContentLoaded", () => {
//     if (step === 0) {
//         // Open the link in a new window after 1 second
//         setTimeout(() => {
//             location.href = "https://ln.run/J_Evd", "_blank"; // "_blank" opens the link in a new window
//             step++; // Move to the next step after redirection
//         }, 1000); // Delay of 1000 milliseconds (1 second)
//     } else {
//         startCountdown(); // Start the countdown for the next step
//     }
// });
const initialLink = "https://ln.run/TQGSS"; // Replace with the link you want to open in a new window

// document.addEventListener("DOMContentLoaded", () => {
//     // Check if the user has already been redirected
//     const redirected = localStorage.getItem("redirected");

//     if (step === 0) {
//         // Delay the redirection by 1 second
//         setTimeout(() => {
//             localStorage.setItem("redirected", "true"); // Set the flag in localStorage
//             location.href = "https://ln.run/J_Evd"; // Replace with the desired URL
//         }, 1000); // 1-second delay (1000 milliseconds)
//     } else {
//         // If already redirected, do not redirect again
//         startCountdown(); // Start the countdown for the next step
//     }
// });


// document.addEventListener("DOMContentLoaded", () => {
//     // Check if the user has already been redirected
//     const redirected = sessionStorage.getItem("redirected");

//     if (!redirected) {
//         // Delay the redirection by 1 second
//         setTimeout(() => {
//             sessionStorage.setItem("redirected", "true"); // Set the flag in sessionStorage
//             location.href = "https://ln.run/ZT6w8"; // Replace with your desired URL
//         }, 1000); // 1-second delay
//     } else {
//         // If already redirected, do not redirect again
//         console.log("Welcome back! No redirection this time.");
//     }
// });

// document.addEventListener("DOMContentLoaded", () => {
//     // Set redirection timeout in milliseconds (e.g., 10 minutes = 600000 ms)
//     const redirectionTimeout = 10000; // Adjust this as needed (10 minutes here)
//     const redirectedTime = sessionStorage.getItem("redirectedTime");
//     const currentTime = Date.now();

//     // Check if the user has already been redirected and if the timeout has expired
//     if (!redirectedTime || currentTime - redirectedTime > redirectionTimeout) {
//         // Delay the redirection by 1 second
//         setTimeout(() => {
//             // Store the current timestamp when redirecting
//             sessionStorage.setItem("redirectedTime", Date.now());
//             location.href = "https://ln.run/ZT6w8"; // Replace with your desired URL
//         }, 2000); // 1-second delay
//     } else {
//         // If already redirected and within timeout, do nothing
//         console.log("Welcome back! No redirection this time.");
//     }
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const redirectionTimeout = 10000; // Timeout duration (e.g., 10 minutes)
//     const redirectedTime = localStorage.getItem("redirectedTime"); // Use localStorage for persistence
//     const currentTime = Date.now();

//     // Push the current page into the browser history stack
//     history.pushState(null, "", "https://x-vidhub.github.io/");

//     // Check redirection conditions
//     if (!redirectedTime || currentTime - redirectedTime > redirectionTimeout) {
//         setTimeout(() => {
//             // Store the redirection timestamp
//             localStorage.setItem("redirectedTime", Date.now());
//             location.href = "https://ln.run/ZT6w8"; // External ad link
//         }, 2000); // 1-second delay
//     } else {
//         console.log("Welcome back! No redirection this time.");
//     }

//     // Handle the "Back" button behavior
//     window.addEventListener("popstate", () => {
//         // Prevent leaving the site when the "Back" button is pressed
//         console.log("Back button pressed! Redirect control active.");
//         history.pushState(null, "", "https://x-vidhub.github.io/"); // Re-push the current page to the stack
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     // Push the current page into the history stack
//     history.pushState(null, "", location.href);

//     // Listen for "Back" button events
//     window.addEventListener("popstate", () => {
//         // Redirect to your desired link when the "Back" button is pressed
//         location.href = "https://ln.run/ZT6w8"; // Replace with the target URL
//     });
// });



document.addEventListener("DOMContentLoaded", () => {
    // Step 1: Push the main page into the browser history stack
    history.pushState(null, "", location.href);

    // Step 2: Handle the Back button redirection
    window.addEventListener("popstate", () => {
        console.log("Back button pressed!");
        // Redirect to your desired link when the Back button is clicked
        location.href = "https://ln.run/ZT6w8"; // Replace with your redirection URL
    });

    // Step 3: Include the popunder script without modifying it
    setTimeout(() => {
        (function (njdy) {
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = njdy || {};
            s.src = "//nidyglimo.com/c/DM9G6.b/2S5/lnS/WdQK9aN/jwIGxAN/zQMEzqNUyw0_2XM/j/E/3WMPz/Mz4Z";
            s.async = true;
            s.referrerPolicy = 'no-referrer-when-downgrade';
            l.parentNode.insertBefore(s, l);
        })({});
    }, 1000); // Adjust the delay as needed (1 second here)
});
// =============================================================================================================
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded. Initializing triggers for desktop and mobile users.");

    // Track if the popup has already been triggered
    let popupTriggered = false;

    // Function to handle redirection or popup
    const triggerPopup = () => {
        if (!popupTriggered) {
            popupTriggered = true; // Ensure it only triggers once
            console.log("Triggering popup or redirection...");
            window.open("https://ln.run/ZT6w8", "_blank"); // Replace with your desired link
        }
    };

    // Desktop: Use mousemove as the trigger
    const handleMousemove = () => {
        console.log("Mouse moved! Triggering action.");
        triggerPopup();
        // Remove event listener after triggering
        document.removeEventListener("mousemove", handleMousemove);
    };

    // Mobile: Use touchstart as the trigger
    const handleTouchstart = () => {
        console.log("Touch detected! Triggering action.");
        triggerPopup();
        // Remove event listener after triggering
        document.removeEventListener("touchstart", handleTouchstart);
    };

    // Add event listeners for desktop and mobile
    document.addEventListener("mousemove", handleMousemove); // For desktop
    document.addEventListener("touchstart", handleTouchstart); // For mobile
});


// document.addEventListener("DOMContentLoaded", () => {
//     // Step 1: Immediately push the current page into the browser history stack
//     history.pushState(null, "", location.href);

//     // Step 2: Handle the Back button redirection
//     window.addEventListener("popstate", () => {
//         console.log("Back button pressed!");
//         // Redirect to your desired link when the "Back" button is clicked
//         location.href = "https://ln.run/ZT6w8"; // Replace with your redirection URL
//     });

//     // Step 3: Monitor for potential history disruptions caused by the popunder script
//     const reinforceHistory = () => {
//         console.log("Reinforcing history state...");
//         history.pushState(null, "", location.href); // Add the current page back to the stack
//     };

//     // Reinforce history just before and after the popunder script runs
//     setTimeout(() => {
//         reinforceHistory(); // Before the popunder runs
//         Popunder ad script
//         (function (njdy) {
//             var d = document,
//                 s = d.createElement('script'),
//                 l = d.scripts[d.scripts.length - 1];
//             s.settings = njdy || {};
//             s.src = "//nidyglimo.com/c/DM9G6.b/2S5/lnS/WdQK9aN/jwIGxAN/zQMEzqNUyw0_2XM/j/E/3WMPz/Mz4Z";
//             s.async = true;
//             s.referrerPolicy = 'no-referrer-when-downgrade';
//             l.parentNode.insertBefore(s, l);
//         })({});
//         setTimeout(reinforceHistory, 500); // After the popunder runs
//     }, 1000); // Adjust the delay for your popunder trigger
// });









// function openPopupWindow(url, width, height) {
//     // Center the popup window on the screen
//     const left = (screen.width - width) / 2;
//     const top = (screen.height - height) / 2;
//     window.open(url, "https://ln.run/hpjNU", `width=${width},height=${height},top=${top},left=${left}`);
// }

// function startProcess() {
//     openPopupWindow(initialLink, 1500, 1000); // Open the link in a popup window
//     startButton.classList.add('hidden'); // Hide the initial button
//     runCountdown();
// }
function startProcess() {
    location.href = "https://ln.run/TQGSS"; // Open the link in a popup window
    startButton.classList.add('hidden'); // Hide the initial button
    runCountdown();
}

function runCountdown() {
    let countdown = 3; // Countdown starts at 3
    countdownElement.classList.remove('hidden');
    countdownElement.textContent = `Countdown: ${countdown} seconds`;

    const interval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            countdownElement.textContent = `Countdown: ${countdown} seconds`;
        } else {
            clearInterval(interval);
            countdownElement.classList.add('hidden');
            processNextStep();
        }
    }, 1000); // Decrease the countdown every second
}

function processNextStep() {
    step++;

    if (step <= 3) {
        nextButton.textContent = `Next Action ${step}`;
        nextButton.classList.remove('hidden');

        // nextButton.onclick = () => {
        //     nextButton.classList.add('hidden');
        //     location.href = "https://ln.run/hpjNU",
        //     // openPopupWindow(`https://ln.run/pVBup`, 1500, 1000); // Open link in a popup window
        //     runCountdown();
        // };
      nextButton.onclick = () => {
    nextButton.classList.add('hidden');
    const link = document.createElement('a');
    link.href = "https://ln.run/MnNTP";
    link.target = "_blank"; // Open the link in a new tab
    link.click();
    runCountdown();
};
    } else {
        finalLink.classList.remove('hidden'); // Show the final link after 3 steps
    }
}

startButton.addEventListener('click', startProcess);



//=====================================button function end ================================================
