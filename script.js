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

// Automatically move the needle after page load
window.onload = function() {
    const score = 40; // Set the score dynamically as needed
    updateSpeedometer(score); // Move needle to score
};