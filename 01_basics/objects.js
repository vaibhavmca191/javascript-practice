//singleton

//object literals

const MySymb= Symbol("key1")

const JsUser={
    name: "vaibhbav",
    "full name": "vaibhav Thombare",
    age: 23,
    [MySymb]: "mykey1",
    location:"Pune",
    email: "vaibhav@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.MySymb);
// console.log(typeof JsUser.MySymb);
// console.log(JsUser[MySymb]);  //symb datatype

JsUser.email="vaibhav@chatgpt.com"
//Object.freeze(JsUser)  //freeze values
JsUser.email="ishu@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());













