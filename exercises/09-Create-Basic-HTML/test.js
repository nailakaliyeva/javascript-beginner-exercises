let emptyString = "";
console.log = jest.fn(text=>{text+=emptyString})
test("Check the right order of html elements", ()=>{
    const htmlDocument = require("./app.js")
    expect(htmlDocument).toBeDefined();
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith("<html><head><title></title></head><body></body></html>")
})