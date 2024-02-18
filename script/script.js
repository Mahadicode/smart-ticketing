// document.getElementById('buy-ticket').addEventListener('click', function () {
//   const purchase=document.getElementById('purchase-section')
//   console.log(purchase)
// })

function seatNumberBook() {
  const seats = document.getElementsByClassName('seats');
  for (const seat of seats) {
    const seatId = seat.innerText;
   
  }
}
function setBackgroundColoById(id) {
  document.getElementById(id).style.backgroundColor = 'green';
}