function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();

console.log(1+2+'5') //concatenate string
console.log(eval(1+2+'5')) //concatenate string

a=[1,2,3]
console.log(a.join("--"))

url="http://www.google.com?a=5"
url2="http://www.google.com"
console.log(encodeURI(url))
console.log(encodeURI(url2))
console.log(encodeURIComponent(url))