
function countVowels() {
    var inputVal = document.getElementById("vowelInput").value;
    var m = inputVal.match(/[aeiou]/gi).length;
    alert("There are " + m + " vowels in your statement.");
document.getElementById("vowelInput").value="";
}