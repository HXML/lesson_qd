//引入变量
const Koa = require('koa')

const app = new Koa() //定义一个新的koa实例
const one = ctx => {
    console.log('one')
}
app.listen(3000)