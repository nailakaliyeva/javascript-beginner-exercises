let emptyString="";
console.log=jest.fn(text=>{text+=emptyString});
test("calling a function AND printing it in the console", ()=>{
    const isOdd = require ("./app.js");
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(true)
    expect(isOdd).toBeDefined()
    // expect(isOdd).toHaveBeenCalledTimes(1)
    //Why does it say line 7 (recieved-isOdd) value
    //must be a mock or a spy function
    expect(isOdd(45345)).toBeTruthy()
//Still need to figure out if student actually called
//the function

//Also how do I know if he called the function passing
//45345 or just any other odd number
})