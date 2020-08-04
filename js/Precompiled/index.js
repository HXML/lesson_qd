// function test(a) {

//     console.log(a);

//     var a = 123;

//     console.log(a);

//     function a() {

//     };

//     console.log(a);

//     var b = function() {

//     };

//     console.log(b);

//     function d() {

//     };
// }

// test(1);
function fn(a, b) {
    console.log(a); //1

    console.log(b); //b(){}

    var b = 234;

    console.log(b); //234

    a = 123;

    console.log(a); //123

    function a() {

    };

    var a;

    var b = function() {

    }

    console.log(a); //a(){}

    console.log(b); //function(){}
}

fn(1);