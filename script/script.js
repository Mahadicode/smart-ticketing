
// function setBackgroundColoById(id) {
//   document.getElementById(id).style.backgroundColor = 'green';
// }
const seatElements = document.getElementsByClassName('seats');
// console.log(seatElements);
let availableSeat = 40;
let selectedSeat = 0;
for (const seat of seatElements) {
  
  seat.addEventListener('click', function (e) {
    const seatId = seat.innerText;
    availableSeat = availableSeat - 1;
    selectedSeat = selectedSeat + 1;
     setBackgroundColorById(seatId);
    setInnerText('seats-left', availableSeat)
    setInnerText('selected-seat', selectedSeat);

    // show selected tickets 
    const seatName = e.target.innerText;
    const bookingSeatContainer = document.getElementById('booking-seat-container')
    const li = document.createElement('li')
    const p1 = document.createElement('p');
    p1.innerText = seatName;
    const p2 = document.createElement('p');
    p2.innerText = 'Economy'
    const p3 = document.createElement('p');
    p3.innerText =550;
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);
    bookingSeatContainer.appendChild(li);
    
    // set the total price 
    totalCost('total-cost', parseInt(p3.innerText));

    // grand total price 
    grandTotalCost();
})
  }



