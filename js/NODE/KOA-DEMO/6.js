//引入 koa模块

var Koa = require('koa');

var Router = require('koa-router');

//实例化
var app = new Koa();

var router = new Router();


//ctx  上下文 context ，包含了request 和response等信息

//配置路由
router.get('/', async(ctx) => {

    ctx.body = '首页';
})

router.get('/news', async(ctx) => {

        ctx.body = "这是一个新闻页面"
    })
    /*启动路由*/
app.use(router.routes())
    .use(router.allowedMethods());


app.listen(3000);