/**
 * Created by lig on 2016/12/27.
 */
$(function () {
    function bannerMenuChange(menu, submenu, jpg) {

        $(menu).mouseover(function () {
            $(submenu).show();
            $(submenu).css("background", "url(./images/index/" + jpg + ")");
            $(menu).css("background-color", "rgba(255,255,255,.4)");
        });
        $(menu).mouseout(function () {
            $(submenu).hide();
            $(menu).css("background-color", "");
        });
    };
    bannerMenuChange("#mouse-qianduan", "#hide-qianduan", "1.png");
    bannerMenuChange("#mouse-houduan", "#hide-houduan", "2.png");
    bannerMenuChange("#mouse-yidong", "#hide-yidong", "3.png");
    bannerMenuChange("#mouse-shujuku", "#hide-shujuku", "4.png");
    bannerMenuChange("#mouse-yunjisuan", "#hide-yunjisuan", "5.png");
    bannerMenuChange("#mouse-yunwei", "#hide-yunwei", "6.png");
    bannerMenuChange("#mouse-shijue", "#hide-shijue", "7.png");

    bannerMenuChange("#hide-qianduan", "#hide-qianduan", "1.png");
    bannerMenuChange("#hide-houduan", "#hide-houduan", "2.png");
    bannerMenuChange("#hide-yidong", "#hide-yidong", "3.png");
    bannerMenuChange("#hide-shujuku", "#hide-shujuku", "4.png");
    bannerMenuChange("#hide-yunjisuan", "#hide-yunjisuan", "5.png");
    bannerMenuChange("#hide-yunwei", "#hide-yunwei", "6.png");
    bannerMenuChange("#hide-shijue", "#hide-shijue", "7.png");


    function bannerMenuClick(bmclick, hideitem) {
        $(bmclick).click(function () {
            $(hideitem).toggle();
        });
    };
    bannerMenuClick("#mouse-qianduan", "#hide-qianduan");
    bannerMenuClick("#mouse-houduan", "#hide-houduan");
    bannerMenuClick("#mouse-yidong", "#hide-yidong");
    bannerMenuClick("#mouse-shujuku", "#hide-shujuku");
    bannerMenuClick("#mouse-yunjisuan", "#hide-yunjisuan");
    bannerMenuClick("#mouse-yunwei", "#hide-yunwei");
    bannerMenuClick("#mouse-shijue", "#hide-shijue");

/*通过ajax获取轮播图片*/
    $.getJSON("./json/banner.json", function (data) {

        var j = 1;
        var banner_timer = null;

        /*点击按钮时动画*/

        $("#banner-left").click(function(){
            j--;
             if(j<1) {
                 j=6;
              }
            geturl(j);
        });
        $("#banner-right").click(function(){
            j++;
            if(j>6) {
                j=1;
            }
            geturl(j);
        });

        /*循环数字*/
        fun1 = function(){
            j++;
            if(j>6){
                j = 1;
            }

            geturl(j);
        };

        clearInterval(banner_timer);
        var banner_timer = setInterval(fun1, 3000);
        /*????????*/

        /*对数字进行判断*/
        function geturl(num) {
            var i = parseInt(num);
            if (i == 1) {
                url = data.banner1;
            }
            else if (i == 2) {
                url = data.banner2;
            }
            else if (i == 3) {
                url = data.banner3;
            }
            else if (i == 4) {
                url = data.banner4;
            }
            else if (i == 5) {
                url = data.banner5;
            }
            else if (i == 6) {
                url = data.banner6;
            }else{
                url = data.banner1;
            }

            bannerChange(url);
        }

        function bannerChange(bannerjpg) {
            console.log(j);
            $("#banner").css("background", "url(" + bannerjpg + ")");
        };

        /*鼠标移入时清除定时器*/
        $("#banner").mouseover(function () {
            clearInterval(banner_timer);
        });
        $("#banner").mouseout(function () {
            clearInterval(banner_timer);
            banner_timer = setInterval(fun1, 3000);
        });
    })
    /*ajax加载首页所有小盒子*/
    $.getJSON("./json/index.json", function (data) {
        var html = "";
        var html1 ="";
        var html2 = "";
        var html3 = "";
        var html4 = "";
        var html5 = "";
        $.each(data, function (key, value) {
            for (var j = 0; j < 5; j++) {
                var image = value[j].image;
                var level = value[j].level;
                var student = value[j].student;
                var title = value[j].title;
                var content = value[j].content;
                html+='<div class="course-wrap course-wrap-in">';
                html+='<div class="course-wrap-img">'
                html+='<div class="course-wap-hd">'
                html+='<a href="./course.html">'
                html+='<img src="'+image+'" alt=""/>'
                html+='<div class="course-wrap-into">'
                html+='<h3><i>'+level+'</i><span>'+title+'</span></h3>'
                html+='<p>'+content+'</p>'
                html+='</div></a>'
                html+='</div>'
                html+='</div>'
                html+='<div class="course-wrap-sp"><span>'+student+'</span></div>'
                html+='</div>'
            }
            $('#containbox-course1').append(html);
        });

        $.each(data, function (key, value) {
            for (var j = 5; j < 10; j++) {
                var image = value[j].image;
                var level = value[j].level;
                var student = value[j].student;
                var title = value[j].title;
                var content = value[j].content;
                html1+='<div class="course-wrap course-wrap-in">';
                html1+='<div class="course-wrap-img">'
                html1+='<div class="course-wap-hd">'
                html1+='<a href="./course.html">'
                html1+='<img src="'+image+'" alt=""/>'
                html1+='<div class="course-wrap-into">'
                html1+='<h3><i>'+level+'</i><span>'+title+'</span></h3>'
                html1+='<p>'+content+'</p>'
                html1+='</div></a>'
                html1+='</div>'
                html1+='</div>'
                html1+='<div class="course-wrap-sp"><span>'+student+'</span></div>'
                html1+='</div>'
            }
            $('#containbox-course2').append(html1);
        });
        /*单个加载下面小盒子*/

        $.each(data, function (key, value) {
            for (var j = 10; j < 11; j++) {
                var image = value[j].image;
                var level = value[j].level;
                var student = value[j].student;
                var title = value[j].title;
                var content = value[j].content;
                html2+='<div class="course-wrap course-wrap-in">';
                html2+='<div class="course-wrap-img">'
                html2+='<div class="course-wap-hd">'
                html2+='<a href="./course.html">'
                html2+='<img src="'+image+'" alt=""/>'
                html2+='<div class="course-wrap-into">'
                html2+='<h3><i>'+level+'</i><span>'+title+'</span></h3>'
                html2+='<p>'+content+'</p>'
                html2+='</div></a>'
                html2+='</div>'
                html2+='</div>'
                html2+='<div class="course-wrap-sp"><span>'+student+'</span></div>'
                html2+='</div>'
            }
            $('#cb-center2').append(html2);
        });


        $.each(data, function (key, value) {
            for (var j = 11; j < 12; j++) {
                var image = value[j].image;
                var level = value[j].level;
                var student = value[j].student;
                var title = value[j].title;
                var content = value[j].content;
                html3+='<div class="course-wrap course-wrap-in">';
                html3+='<div class="course-wrap-img">'
                html3+='<div class="course-wap-hd">'
                html3+='<a href="./course.html">'
                html3+='<img src="'+image+'" alt=""/>'
                html3+='<div class="course-wrap-into">'
                html3+='<h3><i>'+level+'</i><span>'+title+'</span></h3>'
                html3+='<p>'+content+'</p>'
                html3+='</div></a>'
                html3+='</div>'
                html3+='</div>'
                html3+='<div class="course-wrap-sp"><span>'+student+'</span></div>'
                html3+='</div>'
            }
            $('#cb-center3').append(html3);
        });


        $.each(data, function (key, value) {
            for (var j = 12; j < 13; j++) {
                var image = value[j].image;
                var level = value[j].level;
                var student = value[j].student;
                var title = value[j].title;
                var content = value[j].content;
                html4+='<div class="course-wrap course-wrap-in">';
                html4+='<div class="course-wrap-img">'
                html4+='<div class="course-wap-hd">'
                html4+='<a href="./course.html">'
                html4+='<img src="'+image+'" alt=""/>'
                html4+='<div class="course-wrap-into">'
                html4+='<h3><i>'+level+'</i><span>'+title+'</span></h3>'
                html4+='<p>'+content+'</p>'
                html4+='</div></a>'
                html4+='</div>'
                html4+='</div>'
                html4+='<div class="course-wrap-sp"><span>'+student+'</span></div>'
                html4+='</div>'
            }
            $('#cb-center4').append(html4);
        });


        $.each(data, function (key, value) {
            for (var j = 13; j < 14; j++) {
                var image = value[j].image;
                var level = value[j].level;
                var student = value[j].student;
                var title = value[j].title;
                var content = value[j].content;
                html5+='<div class="course-wrap course-wrap-in">';
                html5+='<div class="course-wrap-img">'
                html5+='<div class="course-wap-hd">'
                html5+='<a href="./course.html">'
                html5+='<img src="'+image+'" alt=""/>'
                html5+='<div class="course-wrap-into">'
                html5+='<h3><i>'+level+'</i><span>'+title+'</span></h3>'
                html5+='<p>'+content+'</p>'
                html5+='</div></a>'
                html5+='</div>'
                html5+='</div>'
                html5+='<div class="course-wrap-sp"><span>'+student+'</span></div>'
                html5+='</div>'
            }
            $('#cb-center5').append(html5);
        });

    });

})












