let data = [
    { value: '周杰伦的听妈妈的话,我听了10年!', time = 5, color: 'red', speed: 1, fontSize: 22 }, { value: '周杰伦的听妈妈的话,我听了10年!', time = 5, color: 'red', speed: 1, fontSize: 22 },
    { value: '快快长大吧!', time = 5, color: 'blue', speed: 1, fontSize: 22 },
    { value: '听妈妈的话吧!', time = 5, color: 'black', speed: 2, fontSize: 30 },
    { value: '别让他受伤!', time = 5, color: 'red', speed: 4, fontSize: 20 },
    { value: '长大以后要!', time = 5, color: 'red', speed: 5, fontSize: 22 }
]

//获取所有需要的dom元素
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $txt = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

//创建CanvasBarrage 类
class CanvasBarrage {
    constructor(canvas, video, opts = {}) {
            //opts{}表示如果没有传值,就默认为{},防止报错

            if (!canvas || !video) return
                //将传进来的参数挂载到this上
            this.video = video
            this.canvas = canvas
                //设置canvas的宽度和高度
            this.video.width = video.width
            this.canvas.height = canvas.height
                //获取画布,操作画布
            this.ctx = canvas.getContext('2d')
                //设置默认参数,如果没传就给带上
            let defOpts = {
                    color: '#e91e63',
                    speed: 1.5,
                    opacity: 0.5,
                    fontSize: 20,
                    data: []
                }
                //合并对象,在挂载到this上
            Object.assign(this, defOpts, opts)
                //添加属性,用来判断播放暂停,默认true为暂停
            this.isPaused = true
                //得到所有的弹幕消息
            this.Barrages = this.data.map((item => new Barrage(item, this.ctx)))
                //渲染操作
            this.render()
        }
        //渲染canvas绘制的弹幕
    render() {
        //渲染的第一步,清除原来的画布
        this.clear()
            //渲染弹幕
        this.renderBarrage()
        if (this.isPaused === false) {
            //递归进行渲染
            requestAnimationFrame(this.render.bind(this))
        }
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    renderBarrage() {
        //首先拿到当前视频播放的时间
        //要根据该时间和弹幕要展示的时间做对比,来判断是否延展是弹幕
        let time = this.video.currentTime
            //遍历所有的弹幕,每一个barrage都是Barrage的实例
        this.Barrages.forEach(Barrage => {
            //用一个flag来处理是否默认渲染,默认是false
            //并且只有在视频播放大于等于当前这个弹幕展示时间是才处理
            if (!barrage && time >= barrage.time) {
                //判断当前这条弹幕是否被初始化过了
                if (!barrage.isInit) {
                    barrage.init()
                    barrage.isInit = true
                }
                //弹幕要从右往左渲染,所以x坐标减去当前的弹幕的speed即可
                barrage.x -= barrage.speed
                barrage.render()
                    //如果当前的弹幕x坐标比自身的宽度负值还小,就表示结束渲染
                if (barrage.x < -barrage.width) {
                    barrage.flag = true //flag设置成true下次就不会渲染了
                }

            }
        });
    }
}

//创建Barrage,用来实例化每一条弹幕
class Barrage {
    constructor(obj, ctx) {
            this.value = obj.value; //弹幕的内容
            this.time = obj.time; //弹幕出现的时间
            //把obj和ctx都挂载到this上方便获取
            this.obj = obj
            this.context = ctx
        }
        //初始化弹幕
    init() {
            //如果数据里没有涉及到这4种参数,就直接取默认参数
            this.color = this.obj.color || this.context.color;
            this.speed = this.obj.speed || this.context.speed;
            this.opacity = this.obj.opacity || this.context.opacity;
            this.fontSize = this.obj.fontSize || this.context.fontSize;
            //计算每一条弹幕的原理
            let p = document.createElement('p')
            p.style.fontSize = this.fontSize + 'px'
            p.innerHTML = this.value
            document.body.appendChild(p)

            //把p标签添加到body里,这样就可以拿到宽度
            //设置弹幕的宽度
            this.width = p.clientWidth
                //得到了弹幕宽度之后,就把p标签移除
            document.body.removeChild(p)
                //设置弹幕出现的位置
            this.x = this.context.canvas.width
            this.y = this.context.canvas.height * Math.random()
                //做一下超出范围的处理
            if (this.y < this.fontSize) {
                this.y = this.fontSize
            } else if (this.y > this.context.canvas.height - this.fontSize)
                this.y = this.context.canvas.height - this.fontSize
        }
        // 渲染每一条弹幕
    render() {
        //设置画布文字的字体和字号
        this.context.ctx.font = `${this.fontSize}px Arial`
            //设置画布的文字颜色
        this.context.ctx.fillstyle = this.color;
        //绘制文字
        this.context.ctx.fillText(this.value, this.x, this.y)
    }
}
//创建CanvasBarrage
let CanvasBarrage = new CanvasBarrage(canvas, video, { data })
video.addEventListener('play', () => {
    canvasBarrage.isPaused = false
    canvasBarrage.render()
})