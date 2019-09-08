let emptyString="";
console.log=jest.fn(text=>{text+=emptyString});
test("Creating a function", ()=>{
    const addNumbers =require("./app.js")
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(7);
    expect(addNumbers(5,10)).toBe(15);

})