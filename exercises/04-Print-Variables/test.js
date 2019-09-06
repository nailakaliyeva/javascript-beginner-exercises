const color = require("./app.js")
test("declare and console.log a variable", ()=>{

    expect(color).toBeDefined();
    expect(color).toBe("red");
    //expect(console.log.toHaveBeenCalledWith("red");

})
