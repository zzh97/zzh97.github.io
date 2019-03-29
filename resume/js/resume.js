//自定义输出语句
var log = console.log.bind(console);
//数据绑定(可接受多个参数）
//第一个为选择器，第二个为标题(若没有，这填'')，之后皆为正文
var data_bind = function(el, title){
    var app = new Vue({
        el,
        data: {
            title,
            todos: [],
        },
    });
    var i = 2;
    while(arguments[i]){
        app.todos.push({text: arguments[i]});
        i++;
    }
};
//要绑定的内容（如果要修改简历中的信息，请到这里）
var bind_what = function(){
    //绑定head
    data_bind('.head','',
        '姓名：张子涵',
        '出生年月：1997-5',
        '学历：本科',
        'WeChat：zzh199759',
        'Email: wzdzzh@outlook.com',
        'GitHub: gihub.com/zzh97',
        '期望岗位：Web前端工程师',
        '期望薪资：税后5K以上',
        '期望城市：杭州/福州/其他也行',
    );
    //绑定part们
    data_bind('.part:nth-child(2)','个人项目',
        '简历生成系统-基于Vue和Less',
        '个人技术博客-基于Vue和Node',
        'MarkDown编辑器-基于Jquery',
        'Html5游戏引擎-基于Canvas',
        '数据可视化工具-基于Canvas',
        '问卷调查系统-基于Jquery和Node',
        '粒子动画插件-基于Canvas',
        '(外包)飞镖转盘游戏-基于DOM',
        '(外包)雨刷展示网页-只写前端',
        '注：以上皆可见于github',
    );
    data_bind('.part:nth-child(3)','技术栈',
        '喜欢算法，有不错的数学和计算机基础',
        '喜欢板绘和手绘，有一定的美术基础',
        '擅长用Canvas实现各种特效/功能',
        '热衷专研新技术，常看/写技术性文章',
        '良好代码风格(OOP/函数式)，常写注释',
        '会用MarkDown、Latex进行文档编写',
        '熟练掌握HTML、CSS、JavaScript',
        '熟悉HTML5、CSS3、ES6/7等新特性',
        '熟悉Ajax、JSON、JSONP等前端技术',
        '会用Node.js+MySQL进行后端开发',
        '掌握Git版本管理和Webpack包管理',
        '掌握Adobe旗下PS、AI、Flash等软件',
    );
    data_bind('.part:nth-child(4)','我所能做',
        '开发PC端/移动端的响应式网页',
        '开发HTML5网页小型游戏',
        '开发微信小程序',
        '开发前端插件并给出API文档',
    );
    data_bind('.part:nth-child(5)','在校经历',
        '2018-2019 互联网+（二等奖）',
        '2017-2018 兼职外包项目(主要是前端)',
        '2016-2017 荣获“国家励志奖学金”',
        '2015年9月 商洛学院-文化产业管理专业',
    );
    data_bind('.part:nth-child(6)','希望贵司',
        '不要996，尽量少加班',
        '最好有免费的饮料/水果',
        '五险一金不能没有啊',
        '要是有吃住补就更开心了',
    );
}
/*---------------------------------------------------
可用toDataURL和toBlob转换格式，再上传后端，实现本地下载
或用Canvas2Image便可绕开后端，实现本地下载
var canvas=document.getElementsByTagName("canvas")[0];
var dataURL = canvas.toDataURL("image/png");
Canvas2Image.saveAsImage(canvas,900,1000,"png","ZZH"); 
上面的是示例代码，至于保存为PDF，可用jspdf.js
---------------------------------------------------*/
//截图（通过html2canvas.js）
var camera = function(area){
    html2canvas(area).then(function(canvas) {
        document.body.appendChild(canvas);
    });
};
//底边按钮click事件
var btn_click = function(btn){
    var box = document.getElementById('zzh_box'); //要截图的区域
    var colse = 0; //用于判断按键状态
    btn.click(function(){ 
        if(colse){
            //删除截图
            var canvas = document.getElementsByTagName('canvas')[0];
            document.body.removeChild(canvas);
            //改变按钮状态
            colse = 0;
            btn.text('输出PNG格式图片');
        }else{
            //添加截图
            camera(box);
            //改变按钮状态
            colse = 1;
            btn.text('关闭(右键直接保存)');
        } 
    });
};
var zzh_main = function(){
    bind_what();
    btn_click($("#button"));
}
zzh_main();