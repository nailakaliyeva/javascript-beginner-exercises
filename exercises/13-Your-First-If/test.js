let emptyString="";
console.log=jest.fn(text=>{text+=emptyString});
test("The output depends on users input", ()=>{
    const total = require("./app.js");

    expect(total).not.toBe(NaN);
    //expect(total).toBeGreaterThanOrEqual(0);
    if (total > 100){
        expect(console.log).toBeCalledWith("Give me your money!")
    }
    else if (total > 50){
        expect(console.log).toBeCalledWith("Buy me some coffee, you cheap!")
    }
    else if (total <=50){
        expect(console.log).toBeCalledWith("You are a poor guy, go away!")
    }
})