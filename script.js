import timeInfo from "./timeInfo.js";

function CountDownTimer(){
  
//Extracting the Time from the Input Field As i am using data-* (that is data-set where set is date we get a String) and we need to convert it into a date using expiredateTime
  const expiredate = document.getElementById('giveawayDateSpan').dataset.date;
  const expiredateTime = new Date(expiredate).getTime();
    console.log(expiredateTime);


//we are taking the time right now and converting it into sec
  const timeNow = new Date().getTime();
    console.log(timeNow)


// we are calculating the difference in sec between the expiredate and today
  const diffInSecounds = Math.abs(expiredateTime - timeNow)
  console.log(`Difference In Sec Between ExpiryDate and Today is : ${diffInSecounds}`);

//This Portion helps us map the diff in secounds of target and value into a Structured Object
const diffinSecoundsTimeInfo = timeInfo(diffInSecounds)
console.log(diffinSecoundsTimeInfo);
 
  
  const days = document.getElementById('days')
  const hours = document.getElementById('hours')
  const mins = document.getElementById('mins')
  const sec = document.getElementById('sec')



  days.textContent =diffinSecoundsTimeInfo.days
  hours.textContent =diffinSecoundsTimeInfo.hours
  mins.textContent =diffinSecoundsTimeInfo.min
  sec.textContent =diffinSecoundsTimeInfo.sec


}

setInterval(CountDownTimer,1000)

const inputField = document.getElementById('userDateInput')
const updateBtn = document.getElementById('updateDateBtn')
const rightDateSpan = document.getElementById('UIgiveawayDateSpan')

updateBtn.addEventListener('click',()=>{
  const newDate = inputField.value.trim();

  if(isNaN(new Date(newDate))){
    alert('Invalid Data Format . Please Use YYYY-MM-DDTHH:MM:SS')
    return
  }

  rightDateSpan.dataset.date=newDate

  rightDateSpan.textContent = new Date(newDate).toLocaleString('en-US',{
    dateStyle: 'long',
    timeStyle: 'short'
  });
  CountDownTimer()

})


