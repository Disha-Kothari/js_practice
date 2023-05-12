let msg="Hello World!",num=5;
let price ; //default value s undefined
price=5
console.log(price)
price='hello'
console.log(price)

if(true){
    var strTest="test";
    console.log("Inside "+ strTest)
}
console.log("outside "+ strTest)


const value=['a','b','c']
console.log("Org:" + value)
value.push('d','f') //modify original
console.log("Push:" + value)
const last=value.pop()//modify original and return and last element
console.log("Pop:"+ value,last)

const first=value.shift() //removes the first element and modify original and return first one
console.log("shift:"+ value,first)

value.unshift('hello','wolrd') //adds elements at start of index 
console.log("unshift:" + value)


//slice and splice() 
// slice for seperating from original // start is inclusive and end is exclusive
// splice() for removing an item and inserting new one
//hello world b c d
let newVal = value.slice(2,4) // output b c
console.log("slice org"+ value + ",new:"+newVal)

//splice for removing an element and if required inserts new element also
let newSp=value.splice(1,2) //removing an item
//hello world b c d
console.log("unslice org"+ value + ",new:"+newSp)

//adding an item
let newspl=value.splice(2,0,'newadd1','newadd2')
console.log("unslice insert org"+ value + ",new:"+newSp)

let values=['a','b','c']
const valflt=values.filter(function(item){
    return item>'b'
});
console.log("filter:",valflt) //returns an array of string

values=['a','bbb','c','ddd']
const valfnd=values.find(function(item){
    return item.length>1
});
console.log("find:",valfnd)//returns singal string //bbb //first matching condition

values.forEach(function(item){
    console.log(item)
});

showMessage(msg);   

let person = {
  name: 'John',
  age: 25,
};

function increaseAge(obj) {
  obj.age += 1;
}

increaseAge(person);

console.log(person.age);