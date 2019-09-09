const getAllStudentColors = require("./app.js");
describe("getAllStudentColors", ()=>{
    it("should return an array with ten items", ()=>{
        expect(typeof getAllStudentColors()).toBe("object");
        expect(getAllStudentColors().length).toBe(10);
    })
    it("should only contain allowed colors", ()=>{
        expect(getAllStudentColors()).toContain("yellow")
        expect(getAllStudentColors()).toContain("blue")
        expect(getAllStudentColors()).toContain("green")
        expect(getAllStudentColors()).toContain("red")
    })
})