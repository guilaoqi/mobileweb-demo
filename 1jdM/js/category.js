/**
 * Created by hustg on 2018/8/8.
 */
window.onload=function () {
    // document.querySelector('.left_content').addEventListener('touchmove',function(e){
    //     e.preventDefault();});
    var myScroll_left = new IScroll('.left_content', {
        scrollX:false,
        scrollY:true
    });
    // document.querySelector('.right_content').addEventListener('touchmove',function(e){
    //     e.preventDefault();});
    var myScroll_right = new IScroll('.right_content', {
        scrollX:false,
        scrollY:true
    });
};
