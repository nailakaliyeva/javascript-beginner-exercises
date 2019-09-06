import {color} from "./app.js"
test("declare and console.log a variable", ()=>{
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(color).toBeDefined()
    expect(color).toBe("Yellow")

})