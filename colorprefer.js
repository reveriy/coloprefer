
let colors = ["White", "Blue", "Violet"];
function logColors() {
  console.log("Current colors: " + colors.join(", "));
}

logColors();
while (true) {
  let newColor = prompt("Enter a new color (or type 'stop' to end):");
  if (newColor.toLowerCase() === 'stop') {
    break;
  }
  colors.push(newColor);
  logColors();
}
