const generateRandom = require("./app.js")
test("Create a function that generates random number", ()=>{
    const random = generateRandom();

    // const spy = jest.spyOn(global.Math, 'random');
    // expect(spy).toHaveBeenCalled();

    //const childFunction = jest.fn(Math.random())
    //expect(childFunction).toBeCalled();

    expect(random).not.toBe(NaN);
    expect(random).toBeLessThan(10);
    expect(random).toBeGreaterThanOrEqual(0);

    //theese three lines below don't check the app
    // expect(Math.random()).toBeGreaterThanOrEqual(0)
    // expect(Math.random()).toBeLessThanOrEqual(1)
    // expect(Math.random()).toBeDefined()

    //HOW DO I CHECK IF MATH RANDOM AND MATH FLOOR
    //METHODS WERE USED?
})