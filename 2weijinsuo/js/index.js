/**
 * Created by zhousg on 2017/10/16.
 */
$(function () {

    $.get("PHP/data.php",function (res) {
        wjs_render(res);
        // =========测试用=============
        var isMobile2=$(window).width()<768?true:false;
        $(window).on("resize",function () {
            if(isMobile2!=($(window).width()<768?true:false)){
                wjs_render(res);
                isMobile2=$(window).width()<768?true:false;

            }
            // wjs_render(res);
        })
    });
    function wjs_render(res) {
        var isMobile=$(window).width()<768?true:false;
        var html_img=template("imageTemplate",{list:res,isMobile:isMobile});
        $(".carousel-inner").html(html_img);
        var html_indicator=template("indicatorTemplate",{list:res});
        $(".carousel-indicators").html(html_indicator);
        // console.log(html_img);
        // console.log(html_indicator);
        console.log("============");
    }
    function wjs_nav_tabwidth(){
        $(window).on("resize",function () {
            // console.log($(window).width());
            if($(window).width()<768){
                var tabwidth=5;
                $("ul.nav-wjs-product").find("li").each(function () {
                    tabwidth+=$(this).outerWidth(true);
                    // console.log($(this).outerWidth(true));
                });
                $("ul.nav-wjs-product").width(tabwidth);
            }
        });
    }
    wjs_nav_tabwidth();
    document.querySelector('.wjs-products-navtabs').addEventListener('touchmove',function(e){
        e.preventDefault();});//这段我自己加的，给模拟器用；
    var myScroll_wjs_nav = new IScroll('.wjs-products-navtabs', {
        scrollX:true,
        scrollY:false,
        click:true
    });
    var banner_X=0;
    var touchLength=0;
    var banner_slide=false;
    $(".wjs-banner").on("touchstart",function (e) {
        // console.log(e);
        banner_X=e.originalEvent.touches[0].clientX;
        // console.log(banner_X);
    }).on("touchmove",function (e) {
        touchLength=e.originalEvent.touches[0].clientX-banner_X;
        Math.abs(touchLength)>50?banner_slide=true:banner_slide=false;
    }).on("touchend",function (e) {
        // console.log(e.originalEvent);
        if(banner_slide){
            touchLength>0?$('.carousel').carousel("prev"):$('.carousel').carousel("next");
        }
        touchLength=0;
        banner_slide=false;
    })

    


});
