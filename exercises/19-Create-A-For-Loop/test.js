let emptyString= "";
console.log = jest.fn(text=>{text+=emptyString});
test("function that prints 300 times the phrase 'I will write questions if I'm stuck'", ()=>{
    const standardsMaker = require("./app.js");
    expect(console.log).toBeCalledTimes(300);
    expect(console.log).toBeCalledWith("I will write questions if I'm stuck");
})