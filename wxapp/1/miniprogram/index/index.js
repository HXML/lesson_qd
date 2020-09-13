//index.js
const db = wx.cloud.database()
const projects = db.collection('projects')

const app = getApp()
    // 数据库`

Page({
    data: {
        title: '',
        images: []
    },
    upload() {
        wx.chooseImage({
            count: 9,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: (res) => {
                // 1. 本地地址
                // 2. 云端
                // 3. this.data.images []
                const images = [];
                let idx = 0;
                const tempFilePaths = res.tempFilePaths;
                for (let filePath of tempFilePaths) {
                    let tmpFileName = (+new Date() + Math.floor(
                        Math.random() * 1000)).toString() + '.png'
                    wx.cloud.uploadFile({
                        cloudPath: tmpFileName,
                        filePath: filePath,
                        fail: error => {
                            idx++;
                        },
                        success: res => {
                            idx++;
                            images.push(res.fileID)
                            if (idx == tempFilePaths.length) {
                                console.log('图片上传完毕')
                                this.setData({
                                    images: images
                                })
                            }
                        }
                    })
                }
            }
        })
    },
    createProject() {

    }
})