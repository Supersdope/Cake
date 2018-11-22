$(function(){
    /*
        判断是否登录
        并显示登录用户名
     */
    if(localStorage.getItem('uname')==null || localStorage.getItem('uname')=="null"){
        $('.welcomeLi, .cartLi, .orderLi').hide();
    }else{
        $('.loginLi, .registerLi').hide();
        $('.welcomeSpan')[0].innerHTML = localStorage.getItem('uname');
        console.log(localStorage.getItem('cuid'));
    }

    /*
        退出登录
     */
    $('.logout').click(function () {
        localStorage.setItem('uname', null);
        console.log(localStorage.getItem('uname'));
        window.location.reload();
    });
    /*
        传bclass=新品 到后台查询，
        查找到结果后只创建4中商品
     */
    $.ajax({
        url: "selectBabyBybclass",
        type: 'post',
        data: 'bclass=' + '新品',
        dataType: 'html',
        success: function (re) {
            var reda = eval('(' + re + ')');
            $('.new-row').empty();
            for (var i = 0; i < 4; i++){
                var v ="<div class=\"col-lg-3\">\n" +
                    "                    <a href='selectBabyByPrimaryKey?babyid="+reda[i].babyid+"'><img src=\""+reda[i].exphoto+"\" class='togoods'></a>\n" +
                    "                    <div class=\"title\"><a href=\"selectBabyByPrimaryKey?babyid="+reda[i].babyid+"\">"+reda[i].title+"</a></div>\n" +
                    "                    <div class=\"ex\"><a href=\"selectBabyByPrimaryKey?babyid="+reda[i].babyid+"\">"+reda[i].ex+"</a></div>\n" +
                    "                    <div class=\"sign\">";
                var arr = reda[i].sign.split("/");
                for (var j = 0; j < arr.length; j++){
                    v += "<a href=\"#\">" + arr[j] + " ></a>";
                }
                v += "</div>\n" +
                    "                    <hr style=\" height:2px;border:none;border-top:2px dotted #333;\" />\n" +
                    "                    <div>\n" +
                    "                        <span class=\"price\">￥"+reda[i].babysize[0].price+"/"+reda[i].babysize[0].pound+"磅</span>\n" +
                    "                        <span class=\"pull-right cart-btn\" data-cbid='"+reda[i].babyid+"' data-cpound='"+reda[i].babysize[0].pound+"' data-ctable='"+reda[i].babysize[0].mtableware+"' data-cprice='"+reda[i].babysize[0].price+"'>加入购物车</span>\n" +
                    "                    </div>\n" +
                    "                </div>"
                $('.new-row').append(v);
            }
        }
    });

    /*
        传bclass=人气 到后台查询，
        查找到结果后只创建4中商品
     */
    $.ajax({
        url: "selectBabyBybclass",
        type: 'post',
        data: 'bclass=' + '人气',
        dataType: 'html',
        success: function (re) {
            var reda = eval('(' + re + ')');
            $('.popu-row').empty();
            for (var i = 0; i < 4; i++){
                var v ="<div class=\"col-lg-3\">\n" +
                    "                    <a href='selectBabyByPrimaryKey?babyid="+reda[i].babyid+"'><img src=\""+reda[i].exphoto+"\" id='togoods'></a>\n" +
                    "                    <div class=\"title\"><a href=\"#\">"+reda[i].title+"</a></div>\n" +
                    "                    <div class=\"ex\"><a href=\"#\">"+reda[i].ex+"</a></div>\n" +
                    "                    <div class=\"sign\">";
                var arr = reda[i].sign.split("/");
                for (var j = 0; j < arr.length; j++){
                    v += "<a href=\"#\">" + arr[j] + " ></a>";
                }
                v += "</div>\n" +
                    "                    <hr style=\" height:2px;border:none;border-top:2px dotted #333;\" />\n" +
                    "                    <div>\n" +
                    "                        <span class=\"price\">￥"+reda[i].babysize[0].price+"/"+reda[i].babysize[0].pound+"磅</span>\n" +
                    "                        <span class=\"pull-right cart-btn\" data-cbid='"+reda[i].babyid+"' data-cpound='"+reda[i].babysize[0].pound+"' data-ctable='"+reda[i].babysize[0].mtableware+"' data-cprice='"+reda[i].babysize[0].price+"'>加入购物车</span>\n" +
                    "                    </div>\n" +
                    "                </div>"
                $('.popu-row').append(v);
            }
        }
    });

    /*
        加入购物车
        把Cart类的值传到后台
        返回成功时则显示成功信息，失败则不显示
     */
    $('.new-row, .popu-row').on('click', '.cart-btn', function (){
        if(localStorage.getItem('uname')==null || localStorage.getItem('uname')=="null"){
            alert("请先登录");
            window.location.href = "/login.jsp";
        }else {
            var cbid = $(this).attr("data-cbid"), cpound = $(this).attr("data-cpound"),
                ctable = $(this).attr("data-ctable"), cprice = $(this).attr("data-cprice");
            console.log(cbid + " " + cpound + " " + ctable + " " + cprice + " " + localStorage.getItem('cuid'));
            $.ajax({
                url: "insertToCart",
                type: 'post',
                data: 'cbid=' + cbid + "&cpound=" + cpound + "&ctable=" + ctable + "&cprice=" + cprice + "&cuid=" + localStorage.getItem('cuid'),
                dataType: 'html',
                success: function (re) {
                    getNum();
                }
            });
        }
    });

    /*
        查询用户购物车数量
        并显示数量在购物车上方
     */
    function getNum(){
        $.ajax({
            url: "selectCartByCuid",
            type: 'post',
            data: 'cuid=' + localStorage.getItem('cuid'),
            dataType: 'html',
            success: function (re) {
                var reda = eval('(' + re + ')');
                $('.badge')[0].innerHTML = reda.length;
            }
        });
    }
    getNum();
});