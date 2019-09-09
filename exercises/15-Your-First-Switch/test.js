let emptyString ="";
console.log = jest.fn(text=>{text+=emptyString});
test("function returns true for RGB colors and false for everything else", ()=>{
    const {getColor, colorname, isAvailable} = require("./app.js")
    expect(console.log).toBeCalled();
    expect(getColor("Red")).toBeTruthy();
    expect(getColor("Green")).toBeTruthy();
    expect(getColor("Blue")).toBeTruthy();
    expect(getColor("Black")).toBeFalsy();
    expect(getColor("White")).toBeFalsy();
    expect(getColor("Yellow")).toBeFalsy();
    if(isAvailable===true){
    expect(console.log).toBeCalledWith('Good news! That color is available');
    }
    else if(isAvailable===false){
        expect(console.log).toBeCalledWith("We are sorry, that color is not available")
    }
})