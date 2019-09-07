// const color = require("./app.js")
//Since I don't know what a developer going to call
//his variable I need to figure out a way
//to let him call it whatever he wants
let text = "";//Is that how I do it?
storeLog = (inputs) => (text = text + inputs);
test("declare and console.log a variable", () => {
  console["log"] = jest.fn(storeLog);
  require("./app.js");
  expect(text).toBe("Yellow");
  expect(text).toBeDefined();//can i check if it was
  //defined specifically as a variable?
});
//when I copy line 17 from 02-Hello-world
//line 11 it at least counts if it was called 0
//or 1 time saying receved # of calls(line 21)
//global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");
// test("declare and console.log a variable", ()=>{
//     expect(color).toBeDefined();
//     expect(color).toBe("Yellow");
    //expect(console.log).toHaveBeenCalledTimes(1);
    //expect(console.log).toHaveBeenCalledWith("Yellow");

// })
//in 02-Hello-world test file senior developers set up
//console.log to be a global object variable(or a mock function?)
//then why didnt it work in this particular file?