const textElement = document.getElementById("color-changing-text");
const colors = ["orange", "white", "green"]; // Colors of the Indian flag
let colorIndex = 0;

function updateTextColor() {
    textElement.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

// Call the function initially to set the color based on the current time
updateTextColor();

// Update the text color every second
setInterval(updateTextColor, 1500);


