const VERSION = require("./app.js")
test("Substitute const for let or var", ()=>{
    expect(VERSION).toBeDefined();
    expect(typeof VERSION).toBe("string");
    //how do I specify that this should be var/let and not a const??
})