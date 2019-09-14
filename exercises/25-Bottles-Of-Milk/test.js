let emptyString = "";
console.log=jest.fn(text=>{text+=emptyString});
test("99 bottles of milk on the wall", ()=>{
    require("./app.js")
    expect(console.log).toHaveBeenCalledTimes(99)
    expect(console.log).toHaveBeenCalledWith("2 bottles of milk on the wall, 2 bottles of milk. \n Take one down and pass it around, 1 bottle of milk on the wall.")
    expect(console.log).toHaveBeenCalledWith("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")
})