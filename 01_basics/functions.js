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


// console.log(loginUserMessage("vaibhav"));

function calculateCarPrice(val1, val2, ...num1){
    return num1

}
// console.log(calculateCarPrice(200, 400, 500, 2000));

const user = {
    username: "vaibhav",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and 
        price is ${anyobject.price}`);
    }
    
// handleObject(user)
handleObject({
    username: "vaibhav",
    price: 499
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));



