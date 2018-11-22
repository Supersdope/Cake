$(function () {
    /*
        判断是否登录
        并显示登录用户名
       */
    if(localStorage.getItem('uname')==null || localStorage.getItem('uname')=="null"){
        alert("请先登录");
        window.location.href = "login.jsp";
    }else{
        $('.loginLi, .registerLi').hide();
        $('.welcomeSpan')[0].innerHTML = localStorage.getItem('uname');
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

    /*
        点击显示
     */
    $('.content-title').find('li').click(function () {
        $($('.content-title').find('li')).css("color", "#D5BFA7");
        $($('.content-title').find('li')).css("border-color", "#EFEFEF");
        $(this).css("border-color", "#684029");
        $(this).css("color", "#684029");
        var ostate = $(this)[0].innerHTML;
        if(ostate=="所有订单"){
            ostate = "";
        }
        getData(ostate);
    });

    /*
        根据ostate获取数据
     */
    function getData(ostate) {
        $.ajax({
            url: "selectGorderByOstate",
            type: 'post',
            data: 'ostate=' + ostate + '&ouid=' + localStorage.getItem('cuid'),
            dataType: 'html',
            success: function (re) {
                $('.main-content').empty();
                if (re == "[]") {
                    $('.emptyDiv').show();
                } else {
                    $('.emptyDiv').hide();
                    var reda = eval('(' + re + ')');
                    for (var i = 0; i < reda.length; i++) {
                        var v = "<div class=\"row order-title\">\n" +
                            "                <div class=\"col-lg-3\">订单编号：" + reda[i].orderid +
                            "                </div>\n" +
                            "                <div class=\"col-lg-3\">下单时间：" + reda[i].otime +
                            "                </div>\n" +
                            "            </div>\n" +
                            "            <div class=\"row order-product\">\n" +
                            "                <div class=\"col-lg-3\">\n" +
                            "                    <a href=\"selectBabyByPrimaryKey?babyid=" + reda[i].obid + "\"><img src=\"" + reda[i].baby[0].exphoto + "\"></a>" +
                            "                </div>\n" +
                            "                <div class=\"col-lg-3\">\n" + reda[i].opattern +
                            "                </div>\n" +
                            "                <div class=\"col-lg-2\">\n" + reda[i].ostate +
                            "                </div>\n" +
                            "                <div class=\"col-lg-2\">￥" + reda[i].oprice +
                            "                </div>\n" +
                            "                <div class=\"col-lg-2\">";
                        var operate = "";
                        if (reda[i].ostate == "未完成") {
                            operate = "<span class=\"pay\" data-orderid=\"" + reda[i].orderid + "\">去付款";
                        } else if (reda[i].ostate == "已付款") {
                            operate = "<span class=\"shou\" data-orderid=\"" + reda[i].orderid + "\">去收货";
                        } else if (reda[i].ostate == "已完成") {
                            operate = "已完成";
                        }
                        v += operate + "</span></div></div>";
                        $('.main-content').append(v);
                    }
                }
            },
        })
    }

    /*
        进页面时显示
     */
    var ostate = "未完成";
    getData(ostate);
    $('.content-title').find('li:first-child').css("border-color", "#684029");
    $('.content-title').find('li:first-child').css("color", "#684029");

    /*
        修改状态（付款，收货）
     */
    function updateOstate(orderid, os, ostate) {
        $.ajax({
            url: "UpdataOstateByOrderid",
            type: 'post',
            data: 'orderid=' + orderid + '&ostate=' + os,
            dataType: 'html',
            success: function (re) {
                if(re=="success"){
                    getData(ostate);
                }
            }
        });
    }
    $('.main-content').on('click', 'span', function () {
       if($(this).attr('class')=="pay"){
           var orderid = $(this).attr('data-orderid');
           var os = "已付款";
           var ostate = "未完成";
           updateOstate(orderid, os, ostate);

       }else if($(this).attr('class')=="shou"){
           var orderid = $(this).attr('data-orderid');
           var os = "已完成";
           var ostate = "已付款";
           updateOstate(orderid, os, ostate);
       }
    });
});