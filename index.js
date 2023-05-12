    if(1==1){
        var car="Toyoto";
        let model="v1"
        const fname="Disha"
    }

    console.log(car) //as var has function scope it can access outside of block
    //console.log(model) //while model and fname as block scope it cannot access outside of it
    //console.log(fname)

    function test(){
           var car1="Toyoto";
            let model1="v1"
            const fname1="Disha"

    //        name="test"

    }

    //console.log(car1) // cannot access outside of function all are decalre function scope so
   // console.log(model1) // cannot access outside of function all are decalre function scope so
   // console.log(fname1) // cannot access outside of function all are decalre function scope so
  // console.log(name) //it auto converts global scope declare using var

  const num=[1,2,3]
  num.forEach(element => {  // use for iteration only return void means nothing
    console.log(element)
  })

  let amap=num.map(element=>{ //returns whole array with bool value whether condition for each element is satisfied or not
    return element%2==0
  }
    )

let flt=num.filter(element=>{
    return element%2==0
})

console.log(amap)
console.log(flt)

if(true==" "){ // string with emepty character returns true
    console.log("Empty string true comparision " + true)
}
else{
    console.log("Empty string true comparision " +  false)
}
if(true =="a"){// string with non emepty character returns true
    console.log("Non Empty string True Comparision " + true)
}
else{
    console.log("Non Empty string True Comparision " +  false)
}

if(false=='a'){ // string with non emepty character returns false so condition is true
    console.log("Non Empty string false comparision " + true)
}
else{
    console.log("Non Empty string false comparision " +  false)
}

if(false==" "){ // string with emepty character returns true so condition is true
    console.log("Empty string false comparision " + true)
}
else{
    console.log("Empty string false comparision " + false)
}

let fn=function(){
    console.log("Anonoymous function called")
}
fn()

let dog={}
console.log(dog)
dog.name="Lalu"
dog.color="white"
dog.bark=function(){return "YOYO"}
console.log(dog)
console.log(dog.bark())

let skills= [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ]
  console.log(skills)
  let skillsWithoutLastSkill = skills.splice(0, skills.length - 1).join(', ')
    console.log(skillsWithoutLastSkill)

    let lastSkill = skills.splice(skills.length - 1)[0]
    console.log(lastSkill)

    const numbers = [1, 2, 3]
    let [numOne,second=3 , numThree] = numbers 
  
    console.log(numOne,second, numThree)

    const usersText = `{
        "users":[
          {
            "firstName":"Asabeneh",
            "lastName":"Yetayeh",
            "age":250,
            "email":"asab@asb.com"
          },
          {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
          },
          {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "age":28,
          "email":"lidiya@lidiya.com"
          }
        ]
        }`
        
        const usersObj = JSON.parse(usersText, (key, value) => {
          let newValue =
            typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
          return newValue
        })
        console.log(usersObj)