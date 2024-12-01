function addTwoNumbers(number1, number2)
{
//   let result = number1 + number2
//   return result
return number1 + number2
  
}

// addTwoNumbers(3,"4")

// addTwoNumbers(3, null)

// addTwoNumbers(3,"a")
const result = addTwoNumbers(10, 20)
// console.log("result: ", result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("plz enterd a username");
//         return
        

//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("vaibav"));

function loginUserMessage(username = "vaibahv"){
    if(!username){
        console.log("plz enterd a username");
        return
        

    }
    return `${username} just logged in`
}


console.log(loginUserMessage("vaibhav"));
