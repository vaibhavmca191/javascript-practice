//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
    
// }

for(let i=0; i<= 10; i++){
    const element = i;
    if(element == 5){
       // console.log("5 is best number");
        
    }
    //console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop values: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner loop values ${j}and inner loop ${i}`);
       // console.log(i + '*' + j  +'=' + i*j);
        
        
        
    }

    
}


let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
    
}

//break and continue

// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break
        
//     }
//     console.log(`value of i is ${index}`);
    
   
    
// }


for (let index = 1; index <= 20; index++) {
    if(index == 5){
       // console.log(`Detected 5`);
       continue
        
    }
    //console.log(`value of i is ${index}`);
    
   
    
}



//while and do-while loops

let index = 0
while (index <= 10) {
    //console.log(`Value of index is ${index}`);
    index = index + 2

    
}

let myArray1 = ['ironman' , "batman", "Hulk"]

let arr = 0
while (arr < myArray1.length){
    //console.log(`value is ${myArray1[arr]}`);
    arr = arr + 1
    
}


let score = 11

do {
    console.log(`score is ${score}`);
        score++
    
} while (score <= 10);

