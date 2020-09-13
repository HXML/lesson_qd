//引入变量
const Koa = require('koa')

const app = new Koa() //定义一个新的koa实例
const main = ctx => {
    console.log(ctx.request);
}
app.listen(3000, () => { console.log('项目启动ing') })