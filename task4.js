// Task (4) Convert A first letter of each word in a string to uppercase
function convertToCapital() {
    var input = document.getElementById("inputText");
    var output = document.getElementById("outputText");
    var text = input.value.trim();
    if (text === "") {
        output.textContent = "Please enter a valid string.";
        return;
    }
    var capitalized = text
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    output.textContent = capitalized;
}
