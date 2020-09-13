function foo(str, a) {
    'use strict'
    eval('var b = 3')
    console.log(b, a);
}
var b = 2
foo('var b = 3', 1)