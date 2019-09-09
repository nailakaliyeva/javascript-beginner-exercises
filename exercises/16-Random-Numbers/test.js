let emptyString="";
console.log=jest.fn(text=>{text+=emptyString});
test("function need to generate integer numbers from 1 to 10", ()=>{
    const getRandomInt=require("./app.js");
    expect(getRandomInt()).toBeGreaterThanOrEqual(1)
    expect(getRandomInt()).toBeLessThanOrEqual(10)
    expect(getRandomInt()).not.toBe(NaN)
    expect(console.log).toHaveBeenCalled();
})