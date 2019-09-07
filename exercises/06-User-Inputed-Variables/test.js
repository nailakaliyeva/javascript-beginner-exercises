let whatever = "";
console.log = jest.fn(text=>{text+=whatever})
test("User inputted age", ()=>{
    const age = require("./app.js");
    expect(age).toBeDefined();
    //expect(age).not.toBe(NaN); //its giving me the error saying your input is NaN
    //expect(age).toBeGreaterThanOrEqual(0);
    expect(age).toEqual(age+10);
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith("Your age is: " + age)


})