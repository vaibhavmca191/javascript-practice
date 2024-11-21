// primitive -

// 7 types :String,Number,Boolean,Null,Undefined,Symbol,BigInt

// const score=100
// const scoreValue=100.3

// const isLoggedIn=false
// const outsideTemp=null
// let userEmail;

// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id==anotherId);

const bigNumber =34522234533n

const heros=["shaktiman","nagarjun","doga"];
let myobj={
    name:"vaibhav",
    age:23,
}

const myFunction=function(){
    console.log("hello world");
    
}

console.log(typeof bigNumber);
console.log(typeof myFunction);



// Reference(Non-Primitive)
// Arrays,Objects,Functions


// ******************************************************************************************************************************************

// Stack(Primitive)


let myYoutubename="vaibhavHefshinedotcom"

let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userone={
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo=userone

usertwo.email="vaibhavt@gmail.com"
console.log(userone.email);
console.log(usertwo.email);



