


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

// Initial redirection link
const initialLink = "https://ln.run/yoAGw"; // Replace with the link you want to open in a popup

document.addEventListener("DOMContentLoaded", () => {
    if (step === 0) {
        // Open the first link in a popup window
        openPopupWindow("https://ln.run/J_Evd", 1500, 1000); // Popup with specified width and height
        step++; // Move to the next step after redirection
    } else {
        startCountdown(); // Start the countdown for the next step
    }
});

function openPopupWindow(url, width, height) {
    // Center the popup window on the screen
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    window.open(url, "https://ln.run/hpjNU", `width=${width},height=${height},top=${top},left=${left}`);
}

function startProcess() {
    openPopupWindow(initialLink, 1500, 1000); // Open the link in a popup window
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

        nextButton.onclick = () => {
            nextButton.classList.add('hidden');
            openPopupWindow(`https://ln.run/pVBup`, 1500, 1000); // Open link in a popup window
            runCountdown();
        };
    } else {
        finalLink.classList.remove('hidden'); // Show the final link after 3 steps
    }
}

startButton.addEventListener('click', startProcess);



//=====================================button function end ================================================
