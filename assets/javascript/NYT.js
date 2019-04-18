
var termInput = prompt("Please enter Term", "<Term goes here>");

if (termInput != null) {
    document.getElementById("term-input").value = termInput;
}
function myFunction() {
    var x = document.getElementById("term-input").value;
    document.getElementById("demo").innerHTML = x;
}