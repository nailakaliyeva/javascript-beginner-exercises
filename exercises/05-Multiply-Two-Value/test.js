let emptyString ="";
console.log=jest.fn(text=>{text=emptyString+text})


test("Multiply two values", ()=>{
    const variablesAreCool = require("./app.js")
    expect(variablesAreCool).toBe(17172435);
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(17172435)
})