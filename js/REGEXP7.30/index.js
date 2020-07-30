//正则的定义
let patt1 = new RegExp("hello")
let patt2 = /world/
    //正则的使用 test()
    // let pat = /my/
    // let str = "this is my code..."

// let arr = str.split(' ')
// console.log(arr);
// console.log(arr.indexOf('my'));
// console.log(pat.test(str));
// let pat = /hello/
// let msg = 'oh hello world'
// console.log(pat.exec(msg));
// 正则表达式的匹配
// /pattern/attributes g i  全局匹配,区分大小写匹配

//不区分大小写
// let str = 'visit NanChang oh my world'
// let pat = /nanchang/i
// let pat2 = /nanchang/gi
// console.log(pat.test(str));
// console.log(pat2.test(str));
//字符串的正则
// let str = 'Visit W3School'
// console.log(str.search(/W3school/i));
// let str = '1 plus 2 equl 33'
// console.log(str.match(/\d+/g));
// let str = "Hello oh i am wn"
// console.log(str.replace(/wn/, "snail"));

// console.log(str.split(""));
// console.log(str.split());
//正则写法
//[abc]查找方括号之间的任何字符
// let str = "Is this all there is?"
// let pat = /[a-h]/g
// console.log(str.match(pat));
//[^abc]查找任何不在方括号之间的字符
// let str = "hello pp like"
// let pat = /[^like]/g
// console.log(str.match(pat));
// let str = 'hello ziChen! How are you?'
// let pat = /hello|you/g
// console.log(str.match(pat));
// let str = "That's hot wal!"
//     // let pat = /h.t/g
// let pat = /\W/g
// console.log(str.match(pat));
// let str = 'moom'
// let pat = /\mo/g
// console.log(str.match(pat));
let str = 'hello yangyang!hello world!'
let pat = /h+/g
console.log(str.match(pat));