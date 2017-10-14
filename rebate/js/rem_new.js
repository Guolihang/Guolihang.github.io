(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=800){
                // 这里的750 取决于设计稿的宽度
                docEl.style.fontSize = '25px';
            }else if(clientWidth<800 && clientWidth>=750){
                docEl.style.fontSize = '23.5px';
                // docEl.style.fontSize = 10 * (clientWidth / 750) + 'px';
            }else if(clientWidth<=749 && clientWidth>=720){
                docEl.style.fontSize = '22.5px';
            }else if(clientWidth<=719 && clientWidth>=640){
                docEl.style.fontSize = '20px';
            }else if(clientWidth<=639 && clientWidth>=415){
                docEl.style.fontSize = '15px';
            }else if(clientWidth<=414 && clientWidth>=376){
                docEl.style.fontSize = '12px';
            }else if(clientWidth<=375 && clientWidth>320){
                docEl.style.fontSize = '11px';
            }else{
                docEl.style.fontSize = '10px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


