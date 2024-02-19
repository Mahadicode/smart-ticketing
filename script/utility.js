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


function grandTotalCost() {
   const totalPrice = document.getElementById('total-cost').innerText;
 let convertedTotalPrice = parseInt(totalPrice);
 
   setInnerText('grand-total', convertedTotalPrice);
}
function coupon() {
   const totalPrice = document.getElementById('total-cost').innerText;
 let convertedTotalPrice = parseInt(totalPrice);
    const input = document.getElementById('coupon-value')
  const inputValue = input.value;
  console.log(inputValue);
 
    if (inputValue === 'Couple 20') {
      convertedTotalPrice = convertedTotalPrice - (convertedTotalPrice * 20 / 100);
       setInnerText('grand-total', convertedTotalPrice);
    }
   else if (inputValue === 'NEW15') {
      convertedTotalPrice = convertedTotalPrice - (convertedTotalPrice * 15 / 100);
       setInnerText('grand-total', convertedTotalPrice);
    }
   
}
  
// function btnDisable() {
//   const input = document.getElementById('coupon-value')
//   const inputValue = input.value;
//   const btn = document.getElementById('apply-btn')
//   if (inputValue === 'Couple 20' || inputValue === 'NEW15') {
//     btn.removeAttribute('disabled');
//    }
// }
 

 