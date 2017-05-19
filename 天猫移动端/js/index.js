


$(function () {



    var content_Box= $(".box")[0];
    var content = $("li",content_Box);
    var box=$(".banner")[0];
    var anbox=$(".quanquan")[0]
    var an=$(".an")
    console.log(an)
    var num1=0;
    var t;
    var s;
    t = setInterval(move1, 5000);


    var ul=document.querySelector(".box");
    var list=ul.querySelectorAll("li");
    var dx=0;//位置
    var fx;
    var list_w=list[0].offsetWidth;
    var num=0;
    var num2;
    var flag2=false;
//判断移动端事件还是pc端事件
    var flag="ontouchstart" in window;
//    console.log("ontouchstart" in window)判断ontouchstart是否是window上面的事件。
//    兼容
    var moveStart;
    var moveMove;
    var moveEnd;
    if(flag){
        moveStart="touchstart"
        moveMove="touchmove"
        moveEnd="touchend"
    }else {
        moveStart="mousedown"
        moveMove="mousemove"
        moveEnd="mouseup"
    }
    ul.addEventListener(moveStart,function (e) {
        flag2=true;
        mun2=num1;
//      开始 终止时间
        var stime=e.timeStamp;
        var etime;
        num1++;
//      获取两个终端不同的事件对象
        var e=flag?e.touches[0]:e;
//      开始位置 移动时的位置;
        var x1=e.clientX;
        console.log(x1);
        var x2;
        function move(e) {
            var e=flag?e.touches[0]:e;
            x2=e.clientX;
            console.log(x2)
            if(x2-x1>0){
                fx="left";
            }else if(x2-x1<0){
                fx="right";
            }
            ul.style.left=dx+x2-x1+"px";
        }
        function up(e) {
            if(flag2){
                for(let j=0;j<an.length;j++){
                    an[j].style.background="#777679";
                }
                an[num1].style.background="#fff";
                // t=setInterval(move1,5000)
            }
            etime=e.timeStamp;
            if(Math.abs(x2-x1)>list_w/3||((etime-stime<60)&&(Math.abs(x2-x1)>100))){
                if(fx=="left"){
                    num--;
                }else if(fx=="right"){
                    num++;
                }
                if(num<0){
                    num=0;
                }
                if(num>list.length-1){
                    num=list.length-1
                }
            }
            ul.style.left=-num*list_w+"px";
            dx=-num*list_w;

            ul.removeEventListener(moveMove,move);
            ul.removeEventListener(moveEnd,up);
        }
        ul.addEventListener(moveMove,move);
        ul.addEventListener(moveEnd,up);
    },false)

    // 轮播
    function move1() {
        if(flag2){
            num1=num2;
            flag2=false;
        }
        var wid=box.offsetWidth;
        if(num1==0){
            an[num1].style.background="#fff";
        }
        num1++;
        animate(content_Box,{marginLeft: -wid*num1}, function () {
            if (num1 == content.length-1) {
                num1 = 0;
                content_Box.style.marginLeft = 0;
            }
                for(let i=0;i<an.length;i++){
                    an[i].style.background="#777679";
                }
                an[num1].style.background="#fff";

        })
    }



    })








































