let emptyString="";
console.log=jest.fn(text=>{text+=emptyString});
test("This test checks if the output for wedding price is correct", ()=>{
    const tellThePrice = require ("./app");
    expect(tellThePrice(43)).toBe("$4000");
    expect(tellThePrice(78)).toBe("$10000");
    expect(tellThePrice(199)).toBe("$15000");
    expect(tellThePrice(201)).toBe("$20000");
    expect(console.log).toBeCalled();
})