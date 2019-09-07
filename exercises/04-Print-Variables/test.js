let _buffer = "";

console.log = jest.fn((text) => _buffer += text + "\n");

test('console.log() function should be called with Hello World',  () =>{
    const color = require("./app.js");
    expect(console.log).toHaveBeenCalledWith("red");
    expect(console.log.mock.calls.length).toBe(1);
    expect(color).toBeDefined();
    })






//this is the lamest way to do it bc it doesnt check
//if console.log was used
// test("print  a variable", ()=>{

//     expect(color).toBeDefined();
//     expect(color).toBe("red");
//     //expect(console.log.toHaveBeenCalledWith("red");

// })

// let text = "";//Is that how I do it?
// storeLog = (inputs) => (text = text + inputs);
// test("declare and console.log a variable", () => {
//   console["log"] = jest.fn(storeLog);
//   require("./app.js");
//   expect(text).toBe("red");
//   expect(text).toBeDefined();//can i check if it was
//   //defined specifically as a variable?
// });