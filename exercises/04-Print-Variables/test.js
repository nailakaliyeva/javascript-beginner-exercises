const color = require("./app.js")
test("print  a variable", ()=>{

    expect(color).toBeDefined();
    expect(color).toBe("red");
    //expect(console.log.toHaveBeenCalledWith("red");

})
