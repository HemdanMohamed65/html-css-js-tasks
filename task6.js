function calculateMinMax() {
  var input = document.getElementById("numbersInput").value;
  var cleaned = input.replace(/,/g, ' ').split(/\s+/).map(Number).filter(n => !isNaN(n));
  if (cleaned.length === 0) {
    alert("Please enter valid numbers.");
    return;
  }
  var min = Math.min(...cleaned);
  var max = Math.max(...cleaned);
  document.getElementById("minOutput").value = min;
  document.getElementById("maxOutput").value = max;
}