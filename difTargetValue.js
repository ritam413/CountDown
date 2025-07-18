import timeInfo from "./timeInfo.js";

export default function diffInSecounds(expiredateTime) {
//we are taking the time right now and converting it into sec
  const timeNow = new Date().getTime();
    console.log(timeNow)

// we are calculating the difference in sec between the expiredate and today
return  diffInSecounds = Math.abs(expiredateTime - timeNow)
  console.log(`Difference In Sec Between ExpiryDate and Today is : ${diffInSecounds}`);
}

