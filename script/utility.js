// color chane 
function setBackgroundColorById(id) {
  document.getElementById(id).style.backgroundColor='green'
}

// set Inner Text
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// set total cost 
function totalCost(id, value) {
   const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sumTotalPrice = convertedTotalPrice +value;
    setInnerText(id, sumTotalPrice);
}

// set grand total cost 
function grandTotalCost(id, value) {
   const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sumTotalPrice = convertedTotalPrice +value;
    setInnerText(id, sumTotalPrice);
}

function applyCoupon() {
  const inputValue = document.getElementById('coupon-value').value
  if (inputValue === 'NEW15' || inputValue === 'Couple 20') {
    
  }
}
 