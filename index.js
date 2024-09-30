var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

//6
submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

//5

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPrecentage = (loss / initial) * 100;
    showOutput(`oops! loss is ${loss} and the  percent is ${lossPrecentage}%`);
    lossPrecentage.innerText =initial, quantity, current;
    loss.innerText=initial, quantity, current;
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
   showOutput(`wow the profit is ${profit} and the percent is ${profitPercentage}`);
    return (profit,profitPercentage);
  } else {
    showOutput("nothing this there");
    
  }
}


function showOutput(message ,ty){

  outputBox.innerHTML=message;
  outputBox.className =ty; 
    outputBox.style.display = "block";

}
