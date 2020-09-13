// function foo(a) {
//     var b = 2

//     function bar() {
//         console.log(4);
//     }
//     var c = 3
// }
// foo(1)
//foo外部是访问不到
// console.log(a, b, c);
// var a = 2

// function foo() {
//     var a = 3
//     console.log(a);
// }
// foo()
// console.log(a);
var a = 2;

(function foo() {
    var a = 3
    console.log(a)
})()

console.log(a);