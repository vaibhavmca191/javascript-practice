// const tinderUser = new Object()
const tinderUser={}

tinderUser.id = "123abc"
tinderUser.name = "Ishu"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "ishu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vaibahv",
            lastname: "thombre"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2,obj4)
// console.log(obj3);

const obj3 = { ...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        emai: "v@gmail.com"

    },
    {
        id:2,
        emai: "I@gmail.com"

    },
    {
        id:3,
        emai: "P@gmail.com"

    }
]
users[1].emai
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));





