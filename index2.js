function foo(){
    let n=6;
    console.log(n);
}

var n=5;
console.log(n);
foo()

//inside function with let n and outside function n same variable declaration not allowed

console.log("nan Type:" + typeof(NaN))

var d1={a:5,b:6}
var d2={b:"abc",c:8}
console.log(d1)
console.log(d2)
var d3=Object.assign(d1,d2)

console.log(d3)
console.log(d1)
d1.a=7
console.log(d3)
console.log(d1)
console.log(d2)

var d4=Object.create(d1)
console.log(d4)

const myName=["Safola","is","my"]
const aboutMe=["olx",...myName,"name."]
console.log(aboutMe)

let myName2=["Safola","is","my"]
let aboutMe2=["olx",myName2,"name."]
console.log(aboutMe2)
myName2.push("rest2")
console.log(myName2)
console.log(aboutMe2)

let myName3=[["Safola","is","my"]]
let aboutMe3=["olx",...myName3,"name."]
console.log(aboutMe3)
myName3[0].push("rest3")
console.log(myName3)
console.log(aboutMe3)

for(var i=1;i<3;i++){
    console.log(i)
}
console.log("outside loop access var variable:" + i)

//let contains block scope so cannot access outside of it
for(let j=1;j<3;j++){
    console.log(j)
}
//console.log("Outside Loop access let variable:" + j)//throws error j is not defined

const user1 = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user1, title:'instructor'}
console.log(copiedUser)
console.log(user1)

myOrder = `{
    "name of product" : "earbuds", 
    "cost" : "799", 
    "warranty" : "1 year",
    "prodDate":"2004-11-09"
}`;

console.log(JSON.parse(myOrder))
console.log(JSON.stringify(myOrder))
//console.log(JSON.parse(new Date("2004-11-09")))
console.log(JSON.stringify(new Date("2004-11-09")))

const obj = {name: "John", today: new Date(), city : "New York"};
const myJSON = JSON.stringify(obj);// u can convert back string to date

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj1 = JSON.parse(text);
console.log(obj1.birth)
obj1.birth = new Date(obj1.birth);
console.log(obj1.birth)

const text3 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj3 = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});
console.log(obj3.birth)

const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser2 = {...user, title:'instructor'}
console.log(copiedUser2)
user.city="t"
console.log(user)
console.log(copiedUser2)