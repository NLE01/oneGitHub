window.onload=function(){
    search();
}
function search(){
    var searchBox=document.querySelector('.hm_header_box');
    var bannerBox=document.querySelector('.hm_banner');
    var h=bannerBox.offsetHeight;
    window.onscroll=function(){
        var top=document.body.scrollTop;
        var opacity=0;
        if(top<h){
            opacity=top/h*0.85
        }else{
            opacity=0.85;
        }
        searchBox.style.background="rgba(201,21,35,"+opacity+")";
    }
}
// 轮播图
var img4=document.querySelector('#images>a:nth-child(4)');
var img4=document.getElementById('images').children[4];
var img4=document.getElementsByClassName('hiddenImg')[3];
var img4=document.getElementsByTagName('a')[4];
var imagesA=document.getElementById("images").children;



var imagesA=document.getElementById('images').children;
console.log(imagesA);

var txtList=document.querySelectorAll(".txtItem");

var currentNo=0;//当前显示的图片编号

//利用计时器间隔1s，显示1张图像，其余图像隐藏
function changeImg(){
        //获取图片/文本总数量
          var nodeLength=txtList.length
        //排他原理1，将同类设置为统一状态，
    for(var i=0;i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        txtList[i].className="txtItem normalColor";
    }
    //再突出自己，当前图片透明度为一
    imagesA[currentNo].className="displayImg";
    txtList[currentNo].className="txtItem heighlightColor";
}
function leftImg(){
    if(currentNo>0){currentNo--;}
    else{
        currentNo=4;
    }
}
function rightImg(){
    if(currentNo<4){currentNo++;}
    else{
        currentNo=0;
    }
}
//网页加载后启动定时器
var timer=window.setInterval(rightImgGo,1000);
var imagesG=document.querySelector('#images');
console.log(imagesG);
//鼠标移入后重设定时器
function starChange(){
    timer=window.setInterval(rightImgGo,1000);
}
//鼠标移出后移除定时器
function stopChange(){
    window.clearInterval(timer);
}
//获取sliderDIV以注册移入移出事件
var sliderDIV=document.querySelector(".slider");
//为sliderDIV注册移入移出事件
sliderDIV.addEventListener('mouseover',stopChange);
sliderDIV.addEventListener('mouseout',starChange);

//为所有文本Li注册鼠标移入事件，移入之后，当前li高度，跳转到对应图片
for(var i=0;i<txtList.length;i++){
    txtList[i].addEventListener('mouseover',gotoImg);
    
    //添加自定义属性no 记录当前li的编号
    txtList[i].no=i;
}
function gotoImg(){
                     console.log(this.no);
                     //获得当前显示图像的编号/文本的编号 this是当前事件发生的本体
                     currentNo=this.no;
                     //调用更换图片/文本函数
                     changeImg();
}

var leftButton=document.querySelector('.leftButton');
var rightButton=document.querySelector('.rightButton');

leftButton.addEventListener('click',leftImgGo);
rightButton.addEventListener('click',rightImgGo);

function leftImgGo(){
    leftImg();
    changeImg();
}
function rightImgGo(){
    rightImg();
    changeImg();
}