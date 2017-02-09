
/*ajax加载头部和底部*/
$(function () {
    /*封装的ajax动态引入公共代码的函数*/
    function loadHead(url, target, async) {
        $.ajax({
            type: "get",
            url: url,
            async: false,
            success: function (data) {
                target.html(data);
            }
        });
    }

    /*用封装的ajax动态引入公共的header、nav和侧边栏部分*/
    loadHead("./header.html", $(".top-header"), false);
    loadHead("./footer.html", $(".footer"), false);
})


