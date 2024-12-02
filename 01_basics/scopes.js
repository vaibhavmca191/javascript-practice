// let a = 10
// const b = 20
// var c =300

let a=300    //global scope

if (true) {
    let a = 10
const b = 20
 //console.log("INNER: ", a);
  

}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "vaibhav"

    function two(){
        const website = "youtube"
        console.log(username);     

    }
    //console.log(website);
    two()
    
}
// one()

if(true){
    const username = "vaibhav"
    if(username === "vaibhav"){
        const website = "youtube"
       // console.log(username + website);
        

    }
    //console.log(website);
    
}

//console.log(username);

//+++++++++++++++++++++++++  Interesting   +++++++++++++++++++++++++



console.log(addone(5));

function addone(num) {
    return num + 1
    
}


const addTwo = function (num) {
    return num + 2
    
}
addTwo(50)


