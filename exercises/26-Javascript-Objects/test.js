let emptyString = "";
console.log= jest.fn(text=>{text+=emptyString});
test("sum of all lucky numbers", ()=>{
    require("./app.js");
    expect(sum).toBe(94)
})