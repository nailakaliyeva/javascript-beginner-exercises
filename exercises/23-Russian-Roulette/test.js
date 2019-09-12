test("Russian Roulette", ()=>{
    const {bulletPosition, spinChamber, fireGun} = require("./app.js");
    expect(spinChamber()).toBeLessThan(7);
    expect(spinChamber()).toBeGreaterThan(0);
    expect(bulletPosition).toBe(3);
    expect(fireGun(bulletPosition)).toBe('you are dead!');
    expect(fireGun(5)).toBe('Keep playing :)');


})