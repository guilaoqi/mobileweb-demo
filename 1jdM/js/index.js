/**
 * Created by zhousg on 2017/10/12.
 */
window.onload=function () {

    jd_slideImage();
    jd_slideUpDown();
    jd_sk_time();

    function jd_slideUpDown() {
        var img_height=document.querySelector(".jd_slideshow").offsetHeight;
        var search_box=document.querySelector(".jd_search_box");
        // var scrollTop=document.body.scrollTop;
        window.onscroll=function () {
            var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            var level=scrollTop/img_height;
            level=level>1?1:level;
            console.log(level);
            search_box.style.background="rgba(201,21,35,"+level*0.85+")";
        }
    }

    

    function jd_slideImage(){
        var slideShow=document.querySelector(".jd_slideshow");
        var imgWidth=slideShow.offsetWidth;
        var slideImg=document.querySelector(".jd_slideshow ul:first-child");
        var slideBar=document.querySelectorAll(".jd_slideshow ul:last-child li");
        var index=1;
        var time=setInterval(function () {
            index++;
            slideImg.style.transition="transform 0.2s";
            slideImg.style.transform="translateX("+index*(-10)+"%)";
        },2000);
        slideImg.addEventListener("transitionend",function () {
            if(index>=9){
                index=1;
                slideImg.style.transition="none";
                slideImg.style.transform="translateX("+index*(-10)+"%)";
            }else if(index<=0){
                index=8;
                slideImg.style.transition="none";
                slideImg.style.transform="translateX("+index*(-10)+"%)";
            }
            setSlidebar(index);
        });
        var setSlidebar=function (index) {
            for(var i=0;i<slideBar.length;i++){
                slideBar[i].classList.remove("now");
            }
            slideBar[index-1].classList.add("now");
        };
        var touchX0=0;
        var slideLength=0;
        var onslide=false;
        slideShow.addEventListener("touchstart",function (e) {
            // console.log(e.touches[0].clientX,e.touches[0].clientY);
            touchX0=e.touches[0].clientX;
        });
        slideShow.addEventListener("touchmove",function (e) {
            // console.log(e.touches[0].clientX,e.touches[0].clientY);
            slideLength=(e.touches[0].clientX-touchX0)/imgWidth*10;
            clearInterval(time);
            slideImg.style.transition="none";
            slideImg.style.transform="translateX("+(index*(-10)+slideLength)+"%)";
            if(Math.abs(slideLength)>0.5){onslide=true;}
        });
        slideShow.addEventListener("touchend",function (e) {
                if(onslide&&Math.abs(slideLength)>2){
                    slideLength>0?index--:index++;
                }
                onslide=false;
                slideImg.style.transition="transform 0.2s";
                slideImg.style.transform="translateX("+index*(-10)+"%)";
                clearInterval(time);
                time=setInterval(function () {
                    index++;
                    slideImg.style.transition="transform 0.2s";
                    slideImg.style.transform="translateX("+index*(-10)+"%)";
                },2000);
            });

    }


    function jd_sk_time() {
        var totalTime=2*60*60;
        var spans=document.querySelectorAll(".sk .time span");
        // console.log(spans);
        // console.log(spans[0]);
        var time2=setInterval(function () {
            totalTime--;
            var h=Math.floor(totalTime/3600);
            var m=Math.floor(totalTime%3600/60);
            var s=Math.floor(totalTime%60);
            // console.log(h,m,s);
            spans[0].innerHTML=Math.floor(h/10);
            spans[1].innerHTML=h%10;
            spans[3].innerHTML=Math.floor(m/10);
            spans[4].innerHTML=m%10;
            spans[6].innerHTML=Math.floor(s/10);
            spans[7].innerHTML=s%10;
        },1000)
    }


};