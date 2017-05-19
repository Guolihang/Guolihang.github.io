window.onload=function () {
// 微信效果
    var weixinxg=document.getElementsByClassName("weixin")[0];
    var erweimaxg=document.getElementsByClassName("erweima22")[0];
    weixinxg.onmouseover=function(){
        erweimaxg.style.display="block"
    };
    weixinxg.onmouseout=function(){
        erweimaxg.style.display="none"
    }

    // banner轮播图

    var dian1=document.getElementsByClassName("dian1");
    var banner222=document.getElementsByClassName("banner-tu");

    // banner自动换图
    var num=0;
    var s;
    var t1=setInterval(ww,3000);
    function ww(){
        num++;
        if(num==dian1.length){
            num=0;
        }
        if(num==-1){
            num=dian1.length-1;
        }
        for(let j=0;j<banner222.length;j++){
            dian1[j].style.background="#fff";
            banner222[j].style.opacity="0";
            banner222[j].style.zIndex="0";
        }
        banner222[num].style.opacity="1";
        banner222[num].style.zIndex="1";
        dian1[num].style.background="#920500"
    }
    var bannerbox=document.getElementsByClassName("banner-tu")[0];
    bannerbox.onmouseover=function () {
        clearInterval(t1);
    }
    bannerbox.onmouseout=function () {
        t1=setInterval(ww,3000);
    }


    for(let i=0;i<dian1.length;i++){
        dian1[i].onmouseover=function (){
            num=i-1;
            s=setTimeout(ww,500);
            clearInterval(t1);
            // for(let j=0;j<banner222.length;j++){
            //     dian1[j].style.background="#fff";
            //     banner222[j].style.opacity="0";
            //     banner222[j].style.zIndex="0";
            // }
            // dian1[i].style.background="#920500";
            // banner222[i].style.opacity="1";
            // banner222[i].style.zIndex="1";
            // num=i;
        }
        dian1[i].onmouseout=function () {
            clearTimeout(s);
            t1=setInterval(ww,3000);
        }
    }


//	banner图箭头切换
    var next=document.getElementsByClassName("jt-right")[0];
    var prev=document.getElementsByClassName("jt-left")[0];
    next.onmouseover=function () {
        clearInterval(t1);
    };
    next.onmouseout=function () {
        t1=setInterval(ww,3000);
    }
    next.onclick=function () {
        ww();
    }
    prev.onmouseover=function () {
        clearInterval(t1);
    };
    prev.onmouseout=function () {
        t1=setInterval(ww,3000);
    }
    prev.onclick=function () {
            num-=2;
            ww();
        }

    //导航栏效果
    var lis=document.querySelectorAll(".t3-list");
    lis=Array.from(lis).slice(1,-1);
    var uls=document.querySelectorAll(".t3-list ul");
    var heightarr=Array.from(uls).map(function (aa) {
        var lis=aa.querySelectorAll("li");
        return lis.length*30+5+"px";
    });
    lis.forEach(function (aa,i) {
        aa.onmouseover=function () {
            uls[i].style.height=heightarr[i]
        };
        aa.onmouseout=function () {
            uls[i].style.height="0";
        };
    })

//    返回顶部
    var demo=document.querySelector(".dingbu");
    demo.onclick=function () {
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        obj.scrollTop=0;
    }
//结束    
}