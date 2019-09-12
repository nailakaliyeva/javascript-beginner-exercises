test("fizzBuzz", ()=>{
    function compare() {
        for (i=1; i<101; i++){
        if (i%15===0){
            console.log("FizzBuzz");
        }
            else if (i%5===0){
            console.log("Buzz");
            }
            else if (i%3===0){
            console.log("Fizz");
            }
            else console.log(i);
        }
    }
    const fizzBuzz = require ("./app.js")
    expect(fizzBuzz()).toBe(compare())
})