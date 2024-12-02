const user = {
    username: "vaibhav",
    price:999,
    welcomeMessage: function () {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
        
        
    }
}
// user.welcomeMessage()
// user.username = "harshu"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "vaibhav"
//     console.log(user.username);
    
// }
// chai()

const chai = () =>{
    let username = "vaibhav"
    console.log(this);
    
}
chai()

// const addTwo=(num1, num2) => {
//     return num1 + num2
// }


//const addTwo=(num1, num2) =>  num1 + num2

// const addTwo=(num1, num2) =>  (num1 + num2)

const addTwo=(num1, num2) =>  ({username: "vaibhav"})

console.log(addTwo(5,25));

// const myArray = [2, 3, 5, 7]
// myArray.forEach()
