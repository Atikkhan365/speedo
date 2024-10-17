// Function to animate the needle based on score
function updateSpeedometer(score) {
    const needle = document.getElementById('needle');
    const maxScore = 100; // Maximum score (full range)
    const minRotation = -90; // Needle's minimum rotation (0 score)
    const maxRotation = 90; // Needle's maximum rotation (100 score)

    // Calculate the rotation for the needle
    const rotation = minRotation + (score / maxScore) * (maxRotation - minRotation);
    
    // Apply rotation to the needle
    needle.style.transform = `rotate(${rotation}deg)`;
}

// Function to animate the second needle (suipin) based on infinite score
function speedmeter(infinite) {
    const suipin = document.getElementById('suipin');
    const maxScore = 100; // Maximum score (full range)
    const minRotation = -90; // Needle's minimum rotation (0 score)
    const maxRotation = 90; // Needle's maximum rotation (100 score)

    // Calculate the rotation for the needle
    const rotation = minRotation + (infinite / maxScore) * (maxRotation - minRotation);
    
    // Apply rotation to the needle
    suipin.style.transform = `rotate(${rotation}deg)`;
}

function speedometer1(saad) {
    const needle2 = document.getElementById('needle2');
    const maxScore = 100; // Maximum score (full range)
    const minRotation = -90; // Needle's minimum rotation (0 score)
    const maxRotation = 90; // Needle's maximum rotation (100 score)

    // Calculate the rotation for the needle
    const rotation = minRotation + (saad / maxScore) * (maxRotation - minRotation);
    
    // Apply rotation to the needle
    needle2.style.transform = `rotate(${rotation}deg)`;
}

function speedometer2(sanu) {
    const needle3 = document.getElementById('needle3');
    const maxScore = 100; // Maximum score (full range)
    const minRotation = -90; // Needle's minimum rotation (0 score)
    const maxRotation = 90; // Needle's maximum rotation (100 score)

    // Calculate the rotation for the needle
    const rotation = minRotation + (sanu / maxScore) * (maxRotation - minRotation);
    
    // Apply rotation to the needle
    needle3.style.transform = `rotate(${rotation}deg)`;
}

function speedometer3(sona) {
    const needle4 = document.getElementById('needle4');
    const maxScore = 100; // Maximum score (full range)
    const minRotation = -90; // Needle's minimum rotation (0 score)
    const maxRotation = 90; // Needle's maximum rotation (100 score)

    // Calculate the rotation for the needle
    const rotation = minRotation + (sona / maxScore) * (maxRotation - minRotation);
    
    // Apply rotation to the needle
    needle4.style.transform = `rotate(${rotation}deg)`;
}

function speedometer4(babu) {
    const needle5 = document.getElementById('needle5');
    const maxScore = 100; // Maximum score (full range)
    const minRotation = -90; // Needle's minimum rotation (0 score)
    const maxRotation = 90; // Needle's maximum rotation (100 score)

    // Calculate the rotation for the needle
    const rotation = minRotation + (babu / maxScore) * (maxRotation - minRotation);
    
    // Apply rotation to the needle
    needle5.style.transform = `rotate(${rotation}deg)`;
}

function speedometer5(ashu) {
    const needle6 = document.getElementById('needle6');
    const maxScore = 100; // Maximum score (full range)
    const minRotation = -90; // Needle's minimum rotation (0 score)
    const maxRotation = 90; // Needle's maximum rotation (100 score)

    // Calculate the rotation for the needle
    const rotation = minRotation + (ashu / maxScore) * (maxRotation - minRotation);
    
    // Apply rotation to the needle
    needle6.style.transform = `rotate(${rotation}deg)`;
}

function speedometer6(sach) {
    const needle7 = document.getElementById('needle7');
    const maxScore = 100; // Maximum score (full range)
    const minRotation = -90; // Needle's minimum rotation (0 score)
    const maxRotation = 90; // Needle's maximum rotation (100 score)

    // Calculate the rotation for the needle
    const rotation = minRotation + (sach / maxScore) * (maxRotation - minRotation);
    
    // Apply rotation to the needle
    needle7.style.transform = `rotate(${rotation}deg)`;
}


function speedometer7(ajad) {
    const needle8 = document.getElementById('needle8');
    const maxScore = 100; // Maximum score (full range)
    const minRotation = -90; // Needle's minimum rotation (0 score)
    const maxRotation = 90; // Needle's maximum rotation (100 score)

    // Calculate the rotation for the needle
    const rotation = minRotation + (ajad / maxScore) * (maxRotation - minRotation);
    
    // Apply rotation to the needle
    needle8.style.transform = `rotate(${rotation}deg)`;
}

function speedometer8(shad) {
    const needle9 = document.getElementById('needle9');
    const maxScore = 100; // Maximum score (full range)
    const minRotation = -90; // Needle's minimum rotation (0 score)
    const maxRotation = 90; // Needle's maximum rotation (100 score)

    // Calculate the rotation for the needle
    const rotation = minRotation + (shad / maxScore) * (maxRotation - minRotation);
    
    // Apply rotation to the needle
    needle9.style.transform = `rotate(${rotation}deg)`;
}
// Automatically move the needles after page load
window.onload = function() {
    const score = 10; // Set the score dynamically as needed
    const infinite = 20; // Set the infinite score dynamically as needed
    const saad = 30; 
    const sanu = 40; 
    const sona = 50; 
    const babu = 60; 
    const ashu = 70; 
    const sach = 80; 
    const ajad = 90; 
    const shad = 100; 




    updateSpeedometer(score); // Move the first needle to score
    speedmeter(infinite); 
    speedometer1(saad); // Move the second needle to infinite score
    speedometer2(sanu);
    speedometer3(sona);
    speedometer4(babu);
    speedometer5(ashu);
    speedometer6(sach);
    speedometer7(ajad);
    speedometer8(shad);





};


const containers = document.querySelectorAll('.contant');
let currentIndex = 0;

function showNextContainer() {
  // Remove active class from the current container
  containers[currentIndex].classList.remove('active');
  
  // Set currentIndex to next container (looping back to the first one if it's the last)
  currentIndex = (currentIndex + 1) % containers.length;
  
  // Add active class to the next container
  containers[currentIndex].classList.add('active');
}

// Initialize by showing the first container
containers[currentIndex].classList.add('active');

// Set interval to automatically switch slides every 10 seconds
setInterval(showNextContainer, 10000);
