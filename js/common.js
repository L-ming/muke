/**
 * Created by lig on 2016/12/9.
 */
/*ͷ头部的动画*/
$(function () {
    $("#phone-icon").mousemove(function () {
        $("#appdownload").show();
    });
    $("#phone-icon").mouseout(function () {
        $("#appdownload").hide();
    });
    /*获取焦点和失去焦点动画*/
    $('.top-search-input').focus(function () {
        $(".top-search-tags").hide();
    })
    $('.top-search-input').blur(function () {
        $(".top-search-tags").show();
    })
    /*懒加载*/
    $("img").lazyload({
        effect : "fadeIn",
        threshold : -200
    });
    $('#top-header-left li').click(function(){
        $(this).addClass('actived').siblings().removeClass('actived');
    });

    /*右侧二维码显示效果*/
    $('#icon-shouji').mouseover(function () {
        $('#icon-shouji-app').show();
    });
    $('#icon-shouji').mouseout(function () {
        $('#icon-shouji-app').hide();
    });

    $('#icon-weixinxiaoxi').mouseover(function () {
        $('#icon-weixinxiaoxi-app').show();
    });
    $('#icon-weixinxiaoxi').mouseout(function () {
        $('#icon-weixinxiaoxi-app').hide();
    });

    /*上箭头滚动隐藏效果*/

    (function(){
        var scrollTop ="";
        $(window).scroll(function(){
            var gt = $("body").height()*0.3;
            scrollTop =$(window).scrollTop();
            if(scrollTop>gt) {
                $("#go-top").css("display","block");
                $("#top-header").css("display", "none");
            }
            else {
                $("#go-top").css("display","none");
                $("#top-header").css({"display": "block", "position": "fixed", "top": 0});
            }
        });
    })();



    $("#go-top").click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        /*$("#top-header").css({"display": "block", "position": "fixed", "top": 0});
        console.log(gt)*/
    });

});

