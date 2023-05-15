let car = {
    "name": "Nexon",
    getName: function () {
        return(() => {
            return this.name;
        })();
        //return aerow1();
    //    let aerow1= () => {
    //         return this.name;
    //     }
    //     return aerow1();
        //(this.name);
    },
    // getName2: function () {
    //     // console.log(this.name);
    //     return this.name;
    // }
    getName3:function(){return (()=>this.name)();} //aerrow function to access its parent property must return value in function
}
console.log(car.getName3())