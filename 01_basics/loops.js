// for of 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
    
    
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //
    // console.log(`Each char is  ${greet}`);
    
    
}

//maps


const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('UK', "United Kingdom")

//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
    
// }


const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    java: 'Java'
}

for (const key in myObject1) {
   // console.log(`${key} shortcut is for ${myObject1[key]}`);
    
    
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   // console.log(programming[key]);
    
   
}


const map1 = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('UK', "United Kingdom")

for (const key in map1) {
   // console.log(key);
    
   
}

const coding = ["js", "ruby", "java", "python", "sql"]
coding.forEach( function (val){
   // console.log(val);
    

})

coding.forEach( (item) =>{
   // console.log(item);
    
})


coding.forEach( (item, index, arr)=>{
    //console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
    
})
