describe("First test suite", function(){
    it("It should be output hello", function(){
        expect("hello").toBe("hello", "Words didnt match");
});
});

function test(x, y){
    return ((x == 50 || y ==50) || (x + y == 50));
}
console.log(test(50, 50))
console.log(test(20, 50))
console.log(test(20, 20))
console.log(test(20, 30))
   


function add (x, y){
        return x+y;
}
function substract (x, y){
        return x-y;
}
    
describe("Calculator", function(){
    it("should add two numbers together", function() {
        expect(add(1, 2)).toBe(3, "Calculator isn't working as expected");
    });
    it("should add two numbers together", function() {
        expect(substract(3, 2)).toBe(1, "Calculator isn't working as expected");
    });
})


