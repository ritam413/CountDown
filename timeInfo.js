export default function timeInfo(time){
    time = new Date(time)
    let toatlsecounds = Math.floor(time.getTime()/1000)

    const timeinfo={
        sec:toatlsecounds%60,
        min : Math.floor((toatlsecounds%3600)/60),
        hours : Math.floor((toatlsecounds%86400) / 3600),
        days:Math.floor(toatlsecounds/86400) 
    }

    return timeinfo
}