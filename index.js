/* Given Code, don't edit */

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {

    let newTime = parseInt(time)
    if (newTime > 17) {
        return "Good Evening"
    }
    if (newTime < 12) {
        return "Good Morning"
    }
    if (12 < newTime < 17) {
        return "Good Afternoon"
    }
}
/* Write your implementation of displayMessage() */
function displayMessage(time) {
    document.querySelector("#greeting").innerText = time
}