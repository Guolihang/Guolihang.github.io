//                                                   封装函数




// 实现功能：在任意浏览器中可以通过类名获取元素，不从在兼容问题。
function getClass(sel,obj) {
          obj = obj || document;
       if (obj.getElementsByClassName) {
           return obj.getElementsByClassName(sel);
       } else {
           var arr = [];
           var arr1 = obj.getElementsByTagName('*');
           for (var i = 0; i < arr1.length; i++) {
               var str = arr1[i].className
               if (check(str, sel)) {
                   arr.push(arr1[i]);
               }
           }
           return arr;
       }
   }
// 匹配函数：
   function check(sel1,sel2) {
//        console.log(sel1);
//        //将类名的字符串转化为数组；
       var newarr=sel1.split(" ");
       console.log(newarr);
//       // 将每个获取的元素sel1的类名进行遍历
           for(var i=0;i<newarr.length;i++){
//                //当与传入的类名匹配时返回真
               if(newarr[i]==sel2){
//                    alert(1);
                   return true;
               }
           }
       return false;
   }



// 实现功能：获取内容
function getText(obj,value) {
    if(value==undefined){
        return obj.innerHTML
    }else {
        return obj.innerHTML=value;
    }
}


//实现功能： 获取元素样式(第一个参数为获取的元素，第二个参数为元素样式）
 function getStyle(obj,prop){
    if(obj.currentStyle==undefined){
            return  window.getComputedStyle(obj,null)[prop];
        }else{
            return  obj.currentStyle[prop];
        }
    }


//实现功能： $()两个功能：
//          1.传入函数的时候    执行页面加载后执行内容；
//          2.传入参数为字符串后跟对象时（可以不跟）   万能获取元素，
function $(sel,obj) {
    var  obj=obj || document;
    if(typeof sel=="string"){
       if(sel.charAt(0)=="."){
           return getClass(sel.slice(1),obj);
       }else if(sel.charAt(0)=="#"){
           return obj.getElementById(sel.slice(1));
        }else if(/^[a-z|1-6]{1,10}$/g.test(sel)){
            return obj.getElementsByTagName(sel);
        }else{
            console.error("非法输入")
        }
    }else if(typeof sel=="function"){
        window.onload=function () {
            sel();
        }
    }
}


//实现功能：求数组中的最大值：(数组中的元素全是数值类型);
function arrMax(a) {
              var Max=a[0];
              for(var i=1;i<a.length;i++){
                  if(a[i]>Max){
                      Max=a[i];
                  }
              }
              return Max;
          }



//实现功能：筛选二维数组中最长的数组：
function twoArrMax(arr) {
    var max=[];
    for (var i=0;i<arr.length;i++){
        if(typeof arr[i]=="object" && arr[i]!=null){
            if(arr[i].length>max.length){
                max=arr[i];
            }
        }
    }
    return max;
}


// 实现功能：密码输入次数限制
function passWord(num,str) {
    var password=prompt("请输入密码",0);
    for(var i=0;i<num;i++){
        if(password!=str && i<num){
            password=prompt("请重新输入密码",0)
        }
    }
    if(password==str){
        alert("登录成功！");
    }else{
        alert("禁止再次输入！");
    }
}


// 实现功能：数组元素排序封装：(type参数表示正反顺序）
function arrSort(v,type) {
         var type= type || "asc";
         var a;
            for (var i=0;i<v.length;i++){
               for (var j=i+1;j<v.length;j++){
                  if (type=="asc"){
                      if (v[i]>v[j]){
                            a=v[j];
                            v[j]=v[i];
                            v[i]=a;
                      }
                  }else if(type=="dasc"){
                            if (v[i]<v[j]){
                                 a=v[j];
                                 v[j]=v[i];
                                 v[i]=a;
                            }
                       }
               }
            }
            return v;
      }


// 实现功能：去除数组中未赋值元素
function quChong(arr) {
           var newarr=[];
           for(var i=0;i<arr.length;i++){
               if(arr[i]){
                   newarr[newarr.length]=arr[i];
               }
           }
           return newarr;
       }


//实现功能: 让多个数组相连(返回值为新数组)
function concat() {
   var newarr = [];
   for (i = 0; i < arguments.length; i++) {
       for (j = 0; j < arguments[i].length; j++) {
           newarr[newarr.length] = arguments[i][j];
       }
   }
   return newarr;
}


// 实现功能：封装乘法表
        function jiuJiu(num) {
           for(var i=1;i<=num;i++){
               for(var j=1;j<=i;j++){
                   document.write(i+"*"+j+"="+(i*j)+"&nbsp&nbsp&nbsp&nbsp&nbsp");
               }
               document.write('<br/>');
           }
        }


// 实现功能：十行十列表格(颜色变换)
function table(num,bg1,bg2) {
    var  str="<table border='1' cellpadding='10' cellspacing='0' align='center'>";
    var  bg;
    for(var i=1;i<=num;i++){
        if(i%2==0){
            bg=bg1;
        }else{
            bg=bg2;
        }
        str+="<tr bgcolor="+bg+">"
        for(var j=1;j<=num;j++){
            str+="<td>第"+i+"行<br>第"+j+"列</td>"
        }
        str+="</tr>"
    }
    str+="</table>";
    document.write(str);
}










// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：
// 实现功能：








































































































































































































































































































































































































































































































