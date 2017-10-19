window.onload=function () {
    var contributionNav=document.querySelectorAll('.contribution_nav li');
    var orderContent=document.querySelector('.contribution_content .order_content');
    var recommendBox=document.querySelector('.contribution_content .recommend_box');
    // 初始化
    for(var i=0;i<contributionNav.length;i++){
        contributionNav[i].num=i;
        contributionNav[i].classList.remove('active')
    }
    contributionNav[0].classList.add('active');
    orderContent.style.display="block";
    recommendBox.style.display="none";
    for(var i=0;i<contributionNav.length;i++){
        contributionNav[i].onclick=function () {
            for(var i=0;i<contributionNav.length;i++){
                contributionNav[i].num=i;
                contributionNav[i].classList.remove('active')
            }
            this.classList.add('active');
            if(this.num==0){
                orderContent.style.display="block";
                recommendBox.style.display="none";
            }else{
                recommendBox.style.display="block";
                orderContent.style.display="none";
            }
        }
    }
}