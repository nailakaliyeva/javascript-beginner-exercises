const color = require("./app.js")
//Since I don't know what a developer going to call
//his variable I need to figure out a way
//to let him call it whatever he wants
test("declare and console.log a variable", ()=>{
    expect(color).toBeDefined();
    expect(color).toBe("Yellow");
    //expect(console.log).toHaveBeenCalledWith("Yellow");

})