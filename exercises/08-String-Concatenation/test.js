let emptyString = "";
console.log = jest.fn(text=>{text+=emptyString});
test("string concatenation", ()=>{
    function noExtraSpaces(myVar1, myVar2){
        myVar1 = myVar1.trim()
        myVar2 = myVar2.trim()
        return myVar1 + " " + myVar2
    }
    const {myVar1, myVar2 }= require("./app.js")
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(myVar1).toBeDefined();
    expect(myVar2).toBeDefined();
    expect(noExtraSpaces(myVar1, myVar2)).toBe("Hello World")

})






//old lame code


// const {myVar1, myVar2 }= require("./app.js")
// //const myVar2 = require("./app.js")
// //for some reason instead of expected output "Hello World"
// //it outputs "Hello Hello" or "World World" and I believe it has
// //smth to do with the way I imported and exported two things.
// // Doesnt work with a coma

// //still need to figure out the console thing

// describe("string concatenation", () => {
//     it("both variables should be defined", ()=>{
//         expect(myVar1).toBeDefined();
//         expect(myVar2).toBeDefined();
//         //what if they want to put this in onw string
//     })
//     it("should have string value", ()=>{
//         expect(typeof myVar1).toBe("string")
//         expect(typeof myVar2).toBe("string")
//         //How do I predict if they want to put a space in first
//         //or second string or maybe separately
//     })
//     it("should be concatenated", ()=>{
//         expect(myVar1+myVar2).toBe("Hello World ")
//     })
// })