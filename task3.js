// Task (3) Traffic Light 
function turnOnLight() {
  var red = document.getElementById("red");
  var yellow = document.getElementById("yellow");
  var green = document.getElementById("green");
  var input = document.getElementById("inputNumber");
  var error = document.getElementById("error");
  var value = input.value;
  switch (value) {
    case "1":
      red.classList.add("active");
      break;
    case "2":
      yellow.classList.add("active");
      break;
    case "3":
      green.classList.add("active");
      break;
    default:
      error.textContent = "Enter 1, 2, or 3 only";
  }
}