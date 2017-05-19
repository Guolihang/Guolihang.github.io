//滚动广告
window.onload=function () {

    // 轮播
    var banner = $(".bannersss")[0];
    var img1= $(".img1");
    console.log(img1)
    var btn = $(".yuan");
    var left1 = $(".jiantou2")[0];
    var right1 = $(".jiantou3")[0];
    for (let i = 0; i < img1.length; i++) {
        img1[i].style.left = "740px";
    }
    img1[0].style.left = "0";
    btn[0].style.background = "red";


    var now = 0;
    var next= 0;
    var flag1= true;
    var t;
    t = setInterval(move,3000);
    function move(type) {
        type = type || "r";
        next++;
        console.log(next);
        if (next >= img1.length) {
            next = 0;
        }
        if (next <= -1) {
            next = img1.length-1;
        }
        if (type == "r") {
            img1[next].style.left="740px";
            animate(img1[now], {left: -740});
        }else{
            img1[next].style.left = "-740px";
            animate(img1[now], {left: 740})
        }

        animate(img1[next], {left: 0}, function () {
            now = next;
            flag1= true;
        });
        for (var i = 0; i < btn.length; i++) {
            btn[i].style.background = "#c9b3b4";
        }
        btn[next].style.background = "red";
    }

    banner.onmouseover = function () {
        clearInterval(t);
    }
    banner.onmouseout = function () {
        t = setInterval(move, 3000);
    }
    right1.onmouseover = function () {
        clearInterval(t);
    }
    right1.onmouseout = function () {
        t = setInterval(move, 3000);
    }
    left1.onmouseover = function () {
        clearInterval(t);
    }
    left1.onmouseout = function () {
        t = setInterval(move, 3000);
    }
    for (var i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].onmouseover = function () {
            clearInterval(t);
        }
        btn[i].onmouseout = function () {
            t = setInterval(move, 3000);
        }
        btn[i].onclick = function () {
            next = this.index - 1;
            if (now < this.index) {
                move();
                // alert(1)
            }else if (now > this.index) {
                move("l");
                // alert(1)
            }
        }
    }
    right1.onclick = function () {
        if (flag1) {
            flag1 = false;
            move();
        }
    }

    left1.onclick = function () {
        if (flag1) {
            flag1 = false;
            next -= 2;
            move("l");
        }
    }
    // 轮播1
    var gd=document.querySelector(".gd-box");
    var t1=setInterval(ww,3000);
    var num=1;
    function ww() {
        flag=false;
        flag2=false;
        if(num==1||num==6){
        gd.style.transition="all 1s";
        }
        num++;
        gd.style.marginLeft=-300*num+"px";
    }

    gd.addEventListener("transitionend",function () {
        if(num==9){
            gd.style.transition="none";
            gd.style.marginLeft="-300px";
            num=1;
        }
        if(num==0){
            gd.style.transition="none";
            gd.style.marginLeft="-2400px";
            num=8;
        }
        flag=true;
        flag2=true;
    });

    var bannerbox=document.getElementsByClassName("gd-box2")[0];
    bannerbox.onmouseover=function () {
        clearInterval(t1);
    };
    bannerbox.onmouseout=function () {
        t1=setInterval(ww,3000);
    }

    	//banner图箭头切换
    var next1=document.querySelector(".gdjiantou2");
    var prev1=document.querySelector(".gdjiantou");
    var flag=true;
    var flag2=true;
    next1.onclick=function () {
        if(flag) {
            ww();
        }
    }
    prev1.onclick=function () {
        if(flag2){
        num-=2;
        ww();
        }
    }


// 微信
    var shoujik=document.getElementsByClassName("shoujik")[0];
    var ewmbox=document.getElementsByClassName("ewmbox")[0];
    shoujik.onmouseover=function () {
        ewmbox.style.display="block";
    }
    shoujik.onmouseout=function () {
        ewmbox.style.display="none";
    }

    //公告轮播效果
    var content=document.querySelector(".gonggaowenzi1")
    var title=document.querySelectorAll(".paiming");
    var time=document.querySelectorAll(".riqi");
    var content=[{title:"客户个人信息收集、使用的目的、范围、方式以...",time:"2017-02-07"},
        {title:"关于2月9日至10日网站系统升级的公告",time:"2017-02-09"},
        {title:"针对存量来电显示收费客户开展服务回馈活动的...",time:"2016-12-26"},
        {title:"中国移动通信集团公司2016年下半年服务质...",time:"2017-02-21"}]
    var num1=0;
    var num2=1;
    var t2=setInterval(asd,3000)

    function asd() {
        num1++;
        if(num1==content.length){
            num1=0;
        }
        if(num1==-1){
            num1=content.length-1;
        }
        title[0].innerHTML=content[num1].title;
        time[0].innerHTML=content[num1].time;

        num2++;
        if(num2==content.length){
            num2=0;
        }
        title[1].innerHTML=content[num2].title;
        time[1].innerHTML=content[num2].time;
    }


    var yiru=document.querySelector(".gonggao");
    console.log(yiru)
       yiru.onmouseover=function () {
            clearInterval(t2);
        // console.log(clearInterval(t2));
       }
       yiru.onmouseout=function () {
        t2=setInterval(asd,1000);
       }



    var next2=document.querySelector(".youdaoxiang");
    var prev2=document.querySelector(".zuodaoxiang");
    next2.onclick=function () {
        asd();
    }
    prev2.onclick=function () {
        num-=2;
        asd();
    }


    

    
    
    
    
    
    
    
    
    
    
    
    //结束
}