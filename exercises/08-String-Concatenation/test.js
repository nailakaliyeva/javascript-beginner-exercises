const myVar1 = require("./app.js")
const myVar2 = require("./app.js")
//for some reason instead of expected output "Hello World"
//it outputs "Hello Hello" or "World World" and I believe it has
//smth to do with the way I imported and exported two things.
// Doesnt work with a coma

describe("string concatenation", () => {
    it("both variables should be defined", ()=>{
        expect(myVar1).toBeDefined();
        expect(myVar2).toBeDefined();
    })
    it("should have string value", ()=>{
        expect(typeof myVar1).toBe("string")
        expect(typeof myVar2).toBe("string")
    })
    it("should be concatenated", ()=>{
        expect(myVar1+myVar2).toBe("Hello World ")
    })
})