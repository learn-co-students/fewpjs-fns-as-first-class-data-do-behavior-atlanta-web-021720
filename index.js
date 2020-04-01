/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function displayMessage(string){
  document.getElementById("greeting").innerText = string

}

function greet(string){
  const parsTime = parseInt(string, 10)
    if (parsTime < 12){
      return "Good Morning"
    }  else if (parsTime >= 12  && parsTime < 17 ){
      return "Good Afternoon"
    }  else if (parsTime > 17){
      return "Good Evening"
    } else {}
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
