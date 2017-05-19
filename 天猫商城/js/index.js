window.onload=function () {

    // 我的淘宝

    var disps=document.getElementsByClassName("dispsss")[0];
    var right4=document.querySelector(".right4");
    right4.onmouseover=function () {
        disps.style.display="block";
    }
    right4.onmouseout=function () {
        disps.style.display="none";
    }
// 收藏夹
    var disp=document.getElementsByClassName("disp")[0];
    var right3=document.querySelector(".right3");
    right3.onmouseover=function () {
        disp.style.display="block";
    }
    right3.onmouseout=function () {
        disp.style.display="none";
    }
// 二维码
    var wwws=document.getElementsByClassName("www1")[0];
    var shoujis=document.getElementsByClassName("phone")[0];
    // console.log(shouji);
    shoujis.onmouseover=function () {
        wwws.style.display="block";
        // alert(1);
    }
    shoujis.onmouseout=function () {
        wwws.style.display="none";
    }

    // 返回顶部右边
    var demo=document.querySelector(".erweima222");
    demo.onclick=function () {
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0},200);
    }
// 我的特权
    var wodet=document.querySelectorAll(".wodet")[0];
    var wodetequan=document.querySelectorAll(".wodetequan")[0];
    wodet.onmouseover=function () {
        // wodetequan.style.display="block";
        wodetequan.style.opacity=1;
        wodetequan.style.left="-106px";
    }
    wodet.onmouseout=function () {
        // wodetequan.style.display="none";
        wodetequan.style.opacity=0;
        wodetequan.style.left="-150px";
    }

// 轮播
    var kuais=document.getElementsByClassName("kuai");
    var aasds=document.getElementsByClassName("aasd");
    var num=0;
    var s1;
    var t1=setInterval(move,3000);
    function move() {
        num++;
        if(num==kuais.length){
            num=0;
        }

        if(num==0){
            banners1.style.background="#fd6331";
        }
        if(num==1){
            banners1.style.background="#e8e8e8";
        }
        if(num==2){
            banners1.style.background="#cb2926";
        }
        if(num==3){
            banners1.style.background="#e0ffff";
        }
        if(num==4){
            banners1.style.background="#810c99";
        }
        if(num==5){
            banners1.style.background="#3fc1c3";
        }

        for(let j=0;j<aasds.length;j++){
            kuais[j].style.background="rgba(0,0,0,0.5)";
            // aasds[j].style.zIndex="1";
            kuais[j].style.border="none";
            aasds[j].style.opacity="0";
            //glhs[j].style.display="none";
        }
        kuais[num].style.background="rgba(255, 255, 255, 0.7)";
        // aasds[num].style.zIndex="2";
        aasds[num].style.opacity="1";
        kuais[num].style.border="2px solid rgba(0, 0, 0, 0.5)";

    }
    var banners1=document.getElementsByClassName("banner")[0];
    var banners=document.getElementsByClassName("banner1")[0];

    for(let i=0;i<kuais.length;i++){
        kuais[i].onmouseover=function () {
            num=i-1;
            s1=setTimeout(move,300);
        }
        kuais[i].onmouseout=function () {
            clearTimeout(s1);
        }
    }

    banners.onmouseover=function () {
        clearInterval(t1);
    }
    banners.onmouseout=function () {
        t1=setInterval(move, 3000);
    }



    //侧边隐藏栏   顶部弹出设置
    var list=document.getElementsByClassName('cbla1')[0];
    var cblas=document.querySelector(".cbla");
    var dbys=document.querySelector(".dbys");

    var li=document.getElementsByClassName('dh1');
    var lc=document.querySelectorAll(".hang");
    // console.log(lc)
    var colorarr=["#EA5F8D","#19C8A9","#0AA6E8","#F7A945","#F15453","#64C333","#ff0000"];
    // var lc=$(".lc");
    window.onscroll=function () {
        var sTop=document.body.scrollTop || document.documentElement.scrollTop;
        if(sTop>800){
            dbys.style.top=0;
            cblas.style.width="36px";
            cblas.style.height="332px";
        }else{
            cblas.style.width=0;
            cblas.style.height=0;
            dbys.style.top="-50px";
        }
        for(let i=0;i<li.length;i++){
            if(sTop>lc[i].offsetTop-400){
                for(var j=0;j<li.length;j++){
                    li[j].style.cssText="background:#7a7a7a;color:#fff;"
                }
                li[i].style.cssText="background:"+colorarr[i]+";color:#000;"
            }
            if(sTop>8000){
                li[li.length-1].style.cssText="background:#7a7a7a;color:#fff;"
            }
        }
    }
    for(var i=0;i<li.length;i++){
        li[i].index=i;
        li[i].onclick=function () {
            var   sTop=lc[this.index].offsetTop;
            for(var j=0;j<li.length;j++){
                li[j].style.cssText="background:#7a7a7a;color:#fff;"
            }
            li[this.index].style.cssText="background:"+colorarr[this.index]+";color:#000;"
            if(this.index==0){
                animate(document.body||document.documentElement,{scrollTop:sTop-50});
            }else{
                animate(document.body||document.documentElement,{scrollTop:sTop-50});
            }
        }
    }

// 返回顶部左边
    var demo1=document.querySelector(".dh111");
    console.log(demo1);
    demo1.onclick=function (){
        var obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0},200);
    }


    // var top=document.querySelector(".yincangtop");
    // var top2=document.querySelector(".cebian-box");
    // var btns=document.querySelectorAll(".dhlist");
    // var floors=document.querySelectorAll(".yindao");
    // var btns2=document.querySelector(".dhlist3");
    // var floors2=document.querySelector(".xihuan");
    // var colorarr2=["#EA5F8D","#19C8A9","#0AA6E8","#F7A945","#F15453","#64C333"];
    // var obj;
    // window.onscroll=function (){
    //     obj=document.body.scrollTop==0?document.documentElement:document.body;
    //     var st=obj.scrollTop;
    //     if(st>750){
    //         top.style.top=0;
    //     }else{
    //         top.style.top="-50px";
    //     }
    //     if(st>680){
    //         top2.style.width="36px";
    //         top2.style.height="332px";
    //     }else{
    //         top2.style.width="0";
    //         top2.style.height="0";
    //     }
    //     for (let x=0;x<btns.length;x++) {
    //         var ot = floors[x].offsetTop - 50;
    //         if (st > ot[x + 1] && st < ot[x]) {
    //             for(var j=0;j<btns.length;j++){
    //                 btns[j].style.background="#626262";
    //             }
    //             btns[x].style.background=colorarr2[x];
    //         }
    //     }
    //
    // }
    // for (let x=0;x<btns.length;x++){
    //     // btns[x].index=x;
    //     btns[x].onclick=function () {
    //         var ot=floors[x].offsetTop-50;
    //         animate(obj,{scrollTop:ot},500);
    //     }
    // }
    // btns2.onclick=function () {
    //     var ot2=floors2.offsetTop-50;
    //     animate(obj,{scrollTop:ot2},500);
    // }























































    //结束
}
