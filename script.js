


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
const initialLink = "https://ln.run/J_Evd"; // Replace with the link you want to open in a new window

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


document.addEventListener("DOMContentLoaded", () => {
    // Check if the user has already been redirected
    const redirected = sessionStorage.getItem("redirected");

    if (!redirected) {
        // Delay the redirection by 1 second
        setTimeout(() => {
            sessionStorage.setItem("redirected", "true"); // Set the flag in sessionStorage
            location.href = "https://ln.run/hpjNU"; // Replace with your desired URL
        }, 1000); // 1-second delay
    } else {
        // If already redirected, do not redirect again
        console.log("Welcome back! No redirection this time.");
    }
});



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
    location.href = "https://ln.run/hpjNU"; // Open the link in a popup window
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
    link.href = "https://ln.run/pVBup";
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
