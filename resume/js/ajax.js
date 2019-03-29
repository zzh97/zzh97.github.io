var ajax = function(url, fnSucc, fnFaild, data){
    //创建Ajax对象
    if(window.XMLHttpRequest){
        //正常情况
        var xhr = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        //IE6
        var xhr = new ActiveXObject('Micorosoft.XMLHTTP');
    }
    else{
        alert('您的浏览器不支持Ajax!');
    }
    //时间戳
    var time = '?t='+new Date().getTime();
    //连接服务器
    //xhr.open('GET', url+time, true);
    xhr.open('POSt', url+time, true);
    //发生请求
    xhr.send(data);
    //接收返回值
    xhr.onreadystatechange = function(){
        //0还没open，1正在send，2完成send，3解析内容，4完成解析
        if(xhr.readyState === 4){
            //status是http状态码
            if(xhr.status === 200){
                fnSucc(xhr.responseText);
            }
            else{
                fnFaild(xhr.status);
            }
        }
    };
};