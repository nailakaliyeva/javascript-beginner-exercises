let emptyString = "";
console.log = jest.fn(text=>{text+=emptyString});
test("function prints from 100 - 0,and returns 0", ()=>{
    const startCounting = require("./app.js");
    expect(console.log).toHaveBeenCalledTimes(100);
    expect(startCounting()).toBeDefined();
    expect(startCounting()).toBe(0);
})