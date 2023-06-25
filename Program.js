function checkEvenOdd() {
    let number = document.getElementById("numberInput").value;
  
    number = parseInt(number);
  
    let result = document.getElementById("result");
    if (number % 2 === 0) {
      result.textContent = number + " is even.";
    } else {
      result.textContent = number + " is odd.";
    }
  }
  
