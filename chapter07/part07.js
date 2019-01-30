(function(){
    //IIFE바디
    console.log("IIFE 바디")
})();

const message = (function(){
    const secret = "I'm a scret!";
    return `The secret is ${secret.length} characters long.`;
})();

console.log(message);

const f = (function(){
    let count = 0;
    return function(){
        return `I have been called ${++count} time(s).`
    }
})();

console.log(f());
console.log(f());