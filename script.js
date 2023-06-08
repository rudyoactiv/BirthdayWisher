// Counter for tracking the current corner image
let cornerImageCounter = 1;

// Function to show corner images in a circular pattern
function showCornerImages() {
  const cornerImageElement = document.getElementById(`img${cornerImageCounter}`);
  cornerImageElement.style.opacity = "1";
  cornerImageCounter++;
  if (cornerImageCounter > 8) {
    clearInterval(cornerImageInterval);
  }
}

//popup function
function showMessage(message) {
  var popup = document.createElement('div');
  popup.className = 'popup';
  popup.textContent = message;
  
  document.body.appendChild(popup);
  
  popup.style.display = 'block';
  
  setTimeout(function() {
    popup.style.display = 'none';
    document.body.removeChild(popup);
  }, 4000); // Hide the popup after 4 seconds (adjust the value as needed)
}

//
// Update the position of the birthday hat image
const birthdayHatElement = document.getElementById("birthday-hat");
birthdayHatElement.style.top = "50%";
birthdayHatElement.style.left = "50%";

// Set the target date
//const targetDate = Date.now() + 5000;
const targetDate = Date.now() + 10000;
//const targetDate = new Date('June 4, 2023 00:00:00');

// Delay the animation and show the happy birthday message
setTimeout(() => {
  setTimeout(() => {
    document.getElementById("gif").style.display = "block";
  }, 1000);
    // Select the elements
    const happyText = document.getElementById("happy-text");
    const birthdayText = document.getElementById("birthday-text");
    const exp = document.getElementById("exp");
    
    // Set initial opacity to 0
    happyText.style.opacity = 0;
    birthdayText.style.opacity = 0;
    exp.style.opacity = 0;
  
    // Set display to block
    happyText.style.display = "block";
    birthdayText.style.display = "block";
    exp.style.display = "block";
  
    // Function to fade in the elements
    function fadeIn(element) {
      let opacity = 0;
      const increment = 0.01;
      const duration = 1000; // Adjust the duration as needed
  
      const interval = setInterval(() => {
        opacity += increment;
        element.style.opacity = opacity;
  
        if (opacity >= 1) {
          clearInterval(interval);
        }
      }, duration * increment);
    }
    
    // Call fadeIn for each element with a delay
    
    setTimeout(() => {
      fadeIn(happyText);
    }, 1000);
  
    setTimeout(() => {
      fadeIn(birthdayText);
    }, 1000);
  
    setTimeout(() => {
      fadeIn(exp);
    }, 3000);

    setTimeout(function() {
      var container = document.getElementById("container");
      container.style.display = "block";
      setTimeout(function() {
        container.style.opacity = "1";
      }, 10);
    }, 10000);
    

  //const images = document.getElementsByClassName("corner-image");

  // Function to create confetti elements
function createConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  const confettiColors = ["#ffcc00", "#ff6699", "#66ccff", "#ff99cc", "#66ff99"]; // Add more colors if needed
  const confettiCount = 50; // Adjust the number of confetti particles

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s"; // Adjust the confetti animation duration

    confettiContainer.appendChild(confetti);
  }

  // Stop the confetti after 2 seconds
  setTimeout(() => {
    confettiContainer.innerHTML = "";
  }, 6000);
}

// Update the click event for the corner images
const images = document.getElementsByClassName("corner-image");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", createConfetti);
}


  let delay = 2000;
  for (let i = 0; i < images.length; i++) {
    setTimeout((index) => {
      images[index].style.opacity = 1;
    }, delay, i);
    delay += 1000;
  }
}, targetDate - Date.now());

// Update the countdown timer every second
  const countdownTimer = setInterval(() => {
  const now = Date.now();
  const distance = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown timer
  const timerElement = document.getElementById("timer");
  if (distance <= 0) {
    clearInterval(countdownTimer);
    timerElement.style.display = "none";
    // Hide the cake, plate, candle, and flame elements
    const cakeElement = document.querySelector(".cake");
    const plateElement = document.querySelector(".plate");
    const candleElement = document.querySelector(".candle");
    const flameElement = document.querySelector("#flame");
    
    cakeElement.style.transform = "translateY(35px) scale(0.75)";
    plateElement.style.transform = "translateY(20px) scale(0.75)";
    candleElement.style.transform = "translateY(40px) scale(0.75)";
    flameElement.style.transform = "translateY(45px) scale(0.75)";
    cakeElement.style.transition = "transform 0.5s";
    plateElement.style.transition = "transform 0.5s";
    candleElement.style.transition = "transform 0.5s";
    flameElement.style.transition = "transform 0.5s";
    setTimeout(function() {
      cakeElement.style.transition = "opacity 4s ease-in-out";
plateElement.style.transition = "opacity 4s ease-in-out";
candleElement.style.transition = "opacity 4s ease-in-out";
flameElement.style.transition = "opacity 4s ease-in-out";

cakeElement.style.opacity = "0";
plateElement.style.opacity = "0";
candleElement.style.opacity = "0";
flameElement.style.opacity = "0";

setTimeout(() => {
  cakeElement.style.display = "none";
  plateElement.style.display = "none";
  candleElement.style.display = "none";
  flameElement.style.display = "none";
}, 7000);
    }, 4000);
  } else {
    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);
