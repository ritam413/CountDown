export default function dateStringObjectFormatter(userInput){    
    const dateObject = new Date(userInput)

    if(isNaN(dateObject)){
    console.error("Invalid Date Object Format")
    return null
    }

// Convert to ISO Style Date String Format:
// :- yyyy-mm-ddthh:mm:ss
    const formattedDateTime = dateObject.toLocaleString().slice(0,19)
 
    return formattedDateTime
}