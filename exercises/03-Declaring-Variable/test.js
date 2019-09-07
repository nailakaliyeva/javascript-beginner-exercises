// const color = require("./app.js")
//Since I don't know what a developer going to call
//his variable I need to figure out a way
//to let him call it whatever he wants
let outputData = "";
storeLog = (inputs) => (outputData = outputData + inputs);
test("declare and console.log a variable", () => {
  console["log"] = jest.fn(storeLog);
  require("./app.js");
  expect(outputData).toBe("Yellow");
});
//when I copy line 9 from 02-Hello-world
//line 11 it at least counts if it was called 0
//or 1 time saying receved # of calls(line 13)
//global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");
// test("declare and console.log a variable", ()=>{
//     expect(color).toBeDefined();
//     expect(color).toBe("Yellow");
    //expect(console.log).toHaveBeenCalledTimes(1);
    //expect(console.log).toHaveBeenCalledWith("Yellow");

// })
