//入口文件
import React from "react"; //es6 import 全面使用es6
import ReactDom from "react-dom"; //
import "./styles.css"; //css Wxss global.css
//react 语法 小程序

function App() {
    return (
        //Wxml JSX
        <div className="App">
            App
        </div>
    )
}
const rootElement = document.getElementById('root')
ReactDom.render(< APP />, rootElement)