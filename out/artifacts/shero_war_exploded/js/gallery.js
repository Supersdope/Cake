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
    }

    /*
        退出登录
     */
    $('.logout').click(function () {
        localStorage.setItem('uname', null);
        window.location.reload();
    });

    /*
        获取由a标签传来的值
        并对应设置分类栏的样式
     */
    var hrefValue = window.location.href;
    var aValue = hrefValue.substring(hrefValue.length-1);
    if(aValue >= 1 && aValue <= 3){
        $($('.title-one').find('li')[aValue]).css('color', '#BB9772');
    }else{
        $($('.title-one').find('li')[0]).css('color', '#BB9772');
    }


    /*
        分类栏显示
     */
    $('.title-one').find('li').click(function(){
        $('.title-one').find('li').css("color", "#684029");
        $(this).css("color", "#BB9772");
        $('#cpage')[0].innerHTML = 1;
        getData();
    });
    $('.title-two').find('li').click(function(){
        $('.title-two').find('li').css("color", "#684029");
        $(this).css("color", "#BB9772");
        $('#cpage')[0].innerHTML = 1;
        getData();
    });

    /*
        根据分类栏字体颜色来选取分类
        传到后台，并获取数据
        根据数据建立节点
     */
    function getData(){
        var titleont = $('.title-one').find('li');
        var titletwo = $('.title-two').find('li');
        var sclass = "";
        var cclass = "";
        for (var i = 0; i < titleont.length; i++){
            if(titleont[i].style.color=="rgb(187, 151, 114)"){
                sclass = titleont[i].innerHTML;
                if(sclass=='全部分类'){
                    sclass = "";
                }
            }
        }
        console.log(sclass);
        for (var i = 0; i < titletwo.length; i++){
            if(titletwo[i].style.color=="rgb(187, 151, 114)"){
                cclass = titletwo[i].innerHTML;
                if(cclass=='全部口味'){
                    cclass = "";
                }
            }
        }
        console.log(cclass);
        $.ajax({
            url: "selectBabyBySclassAndCclass",
            type: 'post',
            data: 'sclass=' + sclass + '&cclass=' + cclass + "&cpage=1&count=100",
            dataType: 'html',
            success: function (re) {
                var reda = eval('(' + re + ')');
                $("#totalpage").html(Math.ceil(reda.length/8));
            }
        });
        $.ajax({
            url: "selectBabyBySclassAndCclass",
            type: 'post',
            data: 'sclass=' + sclass + '&cclass=' + cclass + "&cpage=" + $("#cpage").html() + "&count=8",
            dataType: 'html',
            success: function (re) {
                var reda = eval('(' + re + ')');
                $('.main-content').empty();
                var tier = Math.ceil(reda.length/4);
                var i = 0;
                for (var k = 0; k < tier; k++) {
                    var v = '<div class="row">';
                    for (var l = 0; l < (k!=tier-1?4:(reda.length-(tier-1)*4)); l++) {
                        v += "<div class=\"col-lg-3\">\n" +
                            "                    <a href='selectBabyByPrimaryKey?babyid=" + reda[i].babyid + "'><img src=\"" + reda[i].exphoto + "\" width='100%'></a>\n" +
                            "                    <div class=\"title\"><a href=\"#\">" + reda[i].title + "</a></div>\n" +
                            "                    <div class=\"ex\"><a href=\"#\">" + reda[i].ex + "</a></div>\n" +
                            "                    <div class=\"sign\">";
                        var arr = reda[i].sign.split("/");
                        for (var j = 0; j < arr.length; j++) {
                            v += "<a href=\"#\">" + arr[j] + " ></a>";
                        }
                        v += "</div>\n" +
                            "                    <hr style=\" height:2px;border:none;border-top:2px dotted #333;\" />\n" +
                            "                    <div>\n" +
                            "                        <span class=\"price\">￥" + reda[i].babysize[0].price + "/" + reda[i].babysize[0].pound + "磅</span>\n" +
                            "                        <span class=\"pull-right cart-btn\" data-cbid='" + reda[i].babyid + "' data-cpound='" + reda[i].babysize[0].pound + "' data-ctable='" + reda[i].babysize[0].mtableware + "' data-cprice='" + reda[i].babysize[0].price + "'>加入购物车</span>\n" +
                            "                    </div>\n" +
                            "                </div>"
                        i++;
                    }
                    v += '</div>';
                    $('.main-content').append(v);
                }
            }
        });
    }
    getData();


    /*
        翻页功能
     */
    $("#prevpage").bind("click",function(){
        var cpage=parseInt($("#cpage").html())-1;
        if(cpage<=0){
            alert("已经到达首页！");
            return;
        }
        $("#cpage").html(cpage);
        getData();
    });
    $("#nextpage").bind("click",function(){
        var cpage=parseInt($("#cpage").html())+1;
        if(cpage>parseInt($("#totalpage").html())){
            alert("已经到达最后一页！");
            return;
        }
        $("#cpage").html(cpage);
        getData();
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
        加入购物车
        把Cart类的值传到后台
        返回成功时则显示成功信息，失败则不显示
     */
    $('.main-content').on('click', '.cart-btn', function (){
        if(localStorage.getItem('uname')==null || localStorage.getItem('uname')=="null"){
            alert("请先登录");
            window.location.href = "/login.jsp";
        }else {
            var cbid = $(this).attr("data-cbid"), cpound = $(this).attr("data-cpound"),
                ctable = $(this).attr("data-ctable"), cprice = $(this).attr("data-cprice");
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
});