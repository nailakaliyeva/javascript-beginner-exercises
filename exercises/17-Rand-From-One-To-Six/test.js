let emptyString="";
console.log=jest.fn(text=>{text+=emptyString});
test("function need to generate integer numbers from 1 to 6", ()=>{
    const getRandomInt=require("./app.js");
    expect(getRandomInt()).toBeGreaterThanOrEqual(1)
    expect(getRandomInt()).toBeLessThanOrEqual(6)
    expect(getRandomInt()).not.toBe(NaN)
    expect(console.log).toHaveBeenCalled();
})