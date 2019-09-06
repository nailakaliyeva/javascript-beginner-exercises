const VERSION = require("./app.js")
test("Substitute const for let or var", ()=>{
    expect(VERSION).toBeDefined();
    expect(typeof VERSION).toBe("string");
})