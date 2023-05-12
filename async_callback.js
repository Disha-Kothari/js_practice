console.log('fired first');
console.log('fired second');

setTimeout(()=>{
    console.log('fired third');
},2000);

console.log('fired last');  

try{
    throw new Error("testing")
}
catch(error){
    console.log("Error:" + error)
}
finally{
    console.log("Executed..")
}

const loadScript=()=>{
    return new Promise()
}

function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);

