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
// Automatically move the needles after page load
window.onload = function() {
    const score = 40; // Set the score dynamically as needed
    const infinite = 80; // Set the infinite score dynamically as needed
    const saad = 80; 
    const sanu = 80; 
    const sona = 80; 
    const babu = 80; 


    updateSpeedometer(score); // Move the first needle to score
    speedmeter(infinite); 
    speedometer1(saad); // Move the second needle to infinite score
    speedometer2(sanu);
    speedometer3(sona);
    speedometer4(babu);


};
