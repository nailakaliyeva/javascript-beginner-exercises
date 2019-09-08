const generateRandom = require("./app.js")
// global.Math.random=jest.fn(()=>{return Math.random()})
test("Create a function that generates random number", ()=>{
    const random = generateRandom();

    // expect.assertions(5);
    // expect(Math.random()).toBeTruthy()
    // expect(Math.floor(1)).toBeTruthy()
    // generateRandom(Math.random(), (Math.floor(1))


    // expect(Math.random).toHaveBeenCalled()
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