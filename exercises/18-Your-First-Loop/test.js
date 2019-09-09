let emptyString = "";
console.log= jest.fn(text=>{text+=emptyString});
test("tests function that counts up to 100", ()=>{

   // const startCounting  =
    require("./app.js")
    expect(console.log).toHaveBeenCalledTimes(101)
})