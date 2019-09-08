test("Substitute const for let or var", ()=>{
const VERSION = require("./app.js")
    function isConst(VERSION){
        try {
        VERSION = "test";
        }
        catch(err){}
        if (VERSION==="test"){
            return "You've successfully changed the type of variable to const"
        }
        else return "Cannot change const"}
        //the reason I created this function is because I want to see if VERSION
        //will be reassigned with a different value
        //if it doesn't get reassigned then it means the student failed to change const
        //for var
    expect(VERSION).toBeDefined();
    expect(typeof VERSION).toBe("string");
    expect(isConst(VERSION)).toBe("You've successfully changed the type of variable to const");
    //how do I specify that this should be var/let and not a const easier way??
})