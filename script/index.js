// let age = 56
// let days = age * 365
// console.log(days);

function calculateDays() {
    let age = document.getElementById('ageInput').value;

    let days = age * 365;

    document.getElementById('result').innerText = "Your Age In Days Is: " + days;
}