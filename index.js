/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let comparison = parseInt(time.slice(0,2));
  if ( comparison < 12) {
    return "Good Morning";
  } else if (comparison >= 12 && comparison <= 17) {
    return "Good Afternoon";
  } else if (comparison > 17) {
    return "Good Evening";
  };
}

function displayMessage(string) {
  document.querySelector('#greeting').innerText = string;
}