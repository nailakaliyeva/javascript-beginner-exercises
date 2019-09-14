test("the beatles song chorus", ()=>{
    function check(){
        for(i=1; i<5; i++){console.log("let it be,")}
            console.log("words of wisdom, let it be,")
        for(i=1; i<5; i++){console.log("let it be,")}
            console.log("there will be an answer, let it be")}
    const sing = require ("./app.js");
    expect(sing()).toBe(check());
})