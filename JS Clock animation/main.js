const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const seconddegrees = ((seconds/60)*360) +90
    secondHand.style.transform =`rotate(${seconddegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins/60)*360) +90
    minHand.style.transform =`rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursdegrees = ((hours/60)*360) +90
    hourHand.style.transform =`rotate(${hoursdegrees}deg)`;
   
}
setInterval(setDate, 1000);
setDate()