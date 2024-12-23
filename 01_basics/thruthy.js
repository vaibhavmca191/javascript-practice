const userEmail = []

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Dont have user email");
    
}

//falsy values
//false, 0, BigInt 0n, "", null, undefined, NaN


//thruthy values
//"0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// }

const emptyobj ={}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
    
}

//Nullish coalescing Operator (??):null undefind

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15


console.log(val1);

// Ternary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : 
console.log("more than 80");




