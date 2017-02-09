/**
 * Created by lig on 2016/12/25.
 */
$(function () {

    /*页码选中切换*/
    $('#page .number').click(function () {
        $(this).addClass('active').siblings('.number').removeClass('active');
    });

    /*ajax动态获取course部分*/

    /*'<div class="course-wrap">'
    '<div class="course-wrap-img">'
     '<div class="course-wap-hd">'
     '<a href="#">'
     '<img src="images/course/course-21.jpg" alt=""/>'
     '<div class="course-wrap-into">'
     '<h3><i>中</i><span>在react中使用redux数据流。</span></h3>'
     '<p>在react中使用redux数据流。</p>'
     '</div>'
     '</a>'
     '</div>'
     '</div>'
     '<div class="course-wrap-sp"><span>243人在学</span></div>'
     '</div>'*/
   /* "./json/course.json"*/
    function loadCourseWrap(url){
        $.getJSON(url, function (data) {
            var html = "";
            $.each(data, function (key, value) {
                for (var j = 0; j < value.length; j++) {
                    var image = value[j].image;
                    var level = value[j].level;
                    var student = value[j].student;
                    var title = value[j].title;
                    var content = value[j].content;
                    html+='<div class="course-wrap course-wrap-in">';
                    html+='<div class="course-wrap-img">'
                    html+='<div class="course-wap-hd">'
                    html+='<a href="./index.html">'
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
                $('.course-wrap-in').remove();
                $('#course-list-box').append(html);
            });
        });
    };
    loadCourseWrap("./json/course.json");
    $('a').click(function(){
        var name = $(this).attr('name');
        var url = './json/course-'+name+'.json';
        loadCourseWrap(url);
        console.log(url);
    });

});