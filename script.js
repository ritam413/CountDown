import timeInfo from "./timeInfo.js";
import dateStringObjectFormatter from './dateStringObjectFormatter.js';

let timerInterval = null
function CountDownTimer() {
  //Extracting the Time from the Input Field As i am using data-* (that is data-set where set is date we get a String) and we need to convert it into a date using expiredateTime
  const userInput = document.getElementById('userDateInput').value;
  const expiredate = dateStringObjectFormatter(userInput)
  
  if(!expiredate) return 

  const expiredateTime = new Date(expiredate).getTime();
  const timeNow = new Date().getTime();
  console.log(timeNow)



  // we are calculating the difference in sec between the expiredate and today
  const diffInSecounds = Math.floor(expiredateTime - timeNow)
  console.log(`Difference In Sec Between ExpiryDate and Today is : ${diffInSecounds}`);





  //This Portion helps us map the diff in secounds of target and value into a Structured Object
  

  const days = document.getElementById('days')
  const hours = document.getElementById('hours')
  const mins = document.getElementById('mins')
  const sec = document.getElementById('sec')

  if (diffInSecounds <= 0) {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });

    days.textContent = 0
    hours.textContent = 0
    mins.textContent = 0
    sec.textContent = 0

    clearInterval(timerInterval)
    return 
  }

  const diffinSecoundsTimeInfo = timeInfo(diffInSecounds)
  console.log(diffinSecoundsTimeInfo);

  days.textContent = diffinSecoundsTimeInfo.days
  hours.textContent = diffinSecoundsTimeInfo.hours
  mins.textContent = diffinSecoundsTimeInfo.min
  sec.textContent = diffinSecoundsTimeInfo.sec


}



const inputField = document.getElementById('userDateInput')
const updateBtn = document.getElementById('updateDateBtn')
const rightDateSpan = document.getElementById('UIgiveawayDateSpan')
const leftDateSpan = document.getElementById('giveawayDateSpan')
updateBtn.addEventListener('click', () => {
  // const newDate = inputField.value.trim();

  // if (isNaN(new Date(newDate))) {
  //   alert('Invalid Data Format . Please Use YYYY-MM-DDTHH:MM:SS')
  //   return
  // }

  // rightDateSpan.dataset.date = newDate

  // rightDateSpan.textContent = new Date(newDate).toLocaleString('en-US', {
  //   dateStyle: 'long',
  //   timeStyle: 'short'
  // });

  //  leftDateSpan.textContent = new Date(newDate).toLocaleString('en-US', {
  //   dateStyle: 'long',
  //   timeStyle: 'short'
  // });

  

  // if(timerInterval) clearInterval(timerInterval)

  // timerInterval = setInterval(CountDownTimer,1000)


  updateUI()

})

function updateUI(){
  const newDate =  inputField.value;
  if(!newDate|| isNaN(new Date(newDate))){
    alert('Please select a valid Date')
    return 
  }

  rightDateSpan.dataset.date = newDate


  const formatted = new Date(newDate).toLocaleString('en-US',{
    dateStyle:"long",
    timeStyle:"short"
  })
  rightDateSpan.textContent = formatted
  leftDateSpan.textContent = formatted

  if(timerInterval) clearInterval(timerInterval)

  timerInterval=setInterval(CountDownTimer,1000);
  CountDownTimer()
}
