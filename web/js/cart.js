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

    function getData() {
        $.ajax({
            url: "selectCartByCuid",
            type: 'post',
            data: 'cuid=' + localStorage.getItem('cuid'),
            dataType: 'html',
            success: function (re) {
                if(re == "[]"){
                    $('.cartEmpty').show();
                    $('.cart-submit').hide();
                    $('.main-content').css('border', 'none');
                    $('.main-content').css('min-height', '124px');
                    $('.row-title').css('border', 'none');
                    $('.row-title').empty();
                }else{
                    var reda = eval('(' + re + ')');
                    var price = 0;
                    for (var i = 0; i < reda.length; i++) {
                        $('.main-content').append("<div class=\"row\">\n" +
                            "                <div class=\"col-lg-4 img-text\">\n" +
                            "                    <a href=\"selectBabyByPrimaryKey?babyid=" + reda[i].baby[0].babyid + "\"><img src=\"" + reda[i].baby[0].exphoto + "\"></a>\n" +
                            "                    <div class=\"text\">\n" +
                            "                        <div class=\"text-title\"><a href=\"selectBabyByPrimaryKey?babyid=" + reda[i].baby[0].babyid + "\">" + reda[i].baby[0].title + "</a></div>\n" +
                            "                        <div class=\"text-size\">" + reda[i].cpound + "</div>\n" +
                            "                        <div class=\"text-table\">\n" +
                            "                            <div><img src=\"images/cart/table.png\"></div>\n" +
                            "                            <div>赠送 " + reda[i].ctable + " 套餐具</div>\n" +
                            "                        </div>\n" +
                            "                    </div>\n" +
                            "                </div>\n" +
                            "                <div class=\"col-lg-4\">\n" +
                            "                    <div class=\"birthCard\"  show=\"" + i + "\">\n" +
                            "                        <span class=\"birthText\">选择生日牌</span>\n" +
                            "                        <span class=\"glyphicon glyphicon-chevron-down\"></span>\n" +
                            "                    </div>\n" +
                            "                    <ul class=\"birthContent\" show=\"" + i + "\" style=\"display: none;\">\n" +
                            "                        <li>生日快乐</li>\n" +
                            "                        <li>Happy Birthday</li>\n" +
                            "                        <li>节日快乐</li>\n" +
                            "                        <li>自定义</li>\n" +
                            "                        <li>\n" +
                            "                            <input type=\"text\" placeholder=\"可输入8个汉字或16个字符\">\n" +
                            "                            <span data-cartid=\""+reda[i].cartid+"\">确定</span>\n" +
                            "                        </li>\n" +
                            "                    </ul>\n" +
                            "                </div>\n" +
                            "                <div class=\"col-lg-1\">\n" + reda[i].cprice +
                            "                </div>\n" +
                            "                <div class=\"col-lg-1\">\n" + reda[i].num +
                            "                </div>\n" +
                            "                <div class=\"col-lg-1\">\n" + (reda[i].cprice * reda[i].num) +
                            "                </div>\n" +
                            "<div class=\"col-lg-1\">" +
                            "<span class=\"glyphicon glyphicon-remove\" cartid=\"" + reda[i].cartid + "\"></span>" +
                            "</div>" +
                            "            </div>");
                        if(reda[i].birthcard!=null){
                            var at = "[show=" + i + "]";
                            $(at).find('.birthText')[0].innerHTML = reda[i].birthcard;
                            $(at).find('.birthText').css("color", "#684029");
                        }
                        price += reda[i].cprice * reda[i].num;
                    }
                    $('.price')[0].innerHTML = "商品金额：￥" + price;
                    $('.submit-price')[0].innerHTML = price;
                }
            }
        });
    }
    getData();

    /*
        显示相应影藏的下拉菜单
        点击div[show]，查找其属性值
        并匹配到拥有相等属性值的下拉单
     */
    $('.main-content').on('click', 'div[show]', function () {
        var ul = $('.main-content').find('ul[show]');
        for (var i = 0; i < ul.length; i++){
            if($(ul[i]).attr('show') == $($(this)[0]).attr('show')){
                $(ul[i]).toggle();
            }
        }
    });
    $('.main-content').on('click', '.birthText, .glyphicon-chevron-down', function () {
        // console.log(this);
        // var ul = $('.main-content').find('ul[show]');
        // for (var i = 0; i < ul.length; i++){
        //     console.log($(ul[i]).attr('show'));
        //     if($(ul[i]).attr('show') == $(this.parentNode).attr('show')){
        //         console.log($(ul[i]));
        //         $(ul[i]).toggle();
        //     }
        // }
        console.log(123);
        $('.birthContent').toggle();
    });

    /*
        修改数据库中的生日牌
     */
    function updataCard(cartid, val) {
        $.ajax({
            url: "UpdataCardByCartid",
            type: 'post',
            data: 'cartid=' + cartid + '&birthcard=' + val,
            dataType: 'html',
            success: function (re) {
                if(re == "success"){
                }
            }
        });
    }

    /*
        点击前三项任意一项，把值传到显示框中
        点击第四项，隐藏此项，并显示自定义输入框和确定按钮
        点击自定义确定，当值的长度小于16时，则把输入框中的值传到显示框中
     */
    $('.main-content').on('click', 'li', function (evt) {
        $(this.parentNode).find('li').css("color", "#D8C3AD");
        $(this).css("color", "#684029");
        if(this == $(this.parentNode).find('li')[3]){
            $($(this.parentNode).find('li')[4]).show();
            $(this).hide();
        }else if(evt.target == $(this.parentNode).find('input')[0]){

        }else if(evt.target == $(this.parentNode).find('span')[0]){
            var val = $(this.parentNode).find('input').val();
            if(val.length > 16){
                alert("生日牌最多只能填写8个汉字或16个字符");
            }else{
                console.log(123);
                $(this.parentNode.parentNode).find('span')[0].innerHTML = val;
                $($(this.parentNode.parentNode).find('span')[0]).css("color", "#684029");
                var cartid = $($(this).find('[data-cartid]')).attr("data-cartid");
                updataCard(cartid, val);
            }
        }else{
            $(this.parentNode.parentNode).find('span')[0].innerHTML = this.innerHTML;
            $($(this.parentNode.parentNode).find('span')[0]).css("color", "#684029");
            var cartid = $(this.parentNode.parentNode).find('[data-cartid]').attr("data-cartid");
            var val = this.innerHTML;
            updataCard(cartid, val);
        }
    });

    /*
        当点击生日显示框，自定义li，自定义输入框时，下拉菜单不收起
        点击其他位置时，下拉菜单收起。
     */
    $(document).bind("click",function(evt){
        var inputM = true;
        $('.birthCard').each(function (index, val) {
            if(val == evt.target){
                inputM = false;
            }
        });

        $('.birthContent').find('li').each(function (index, val) {
            if(val == evt.target && index % 5 == 3){
                inputM = false;
            }
        });

        $('[placeholder="可输入8个汉字或16个字符"]').each(function (index, val) {
            if(evt.target == val){
                inputM = false;
            }
        });

        if(inputM){
            $('.birthContent').hide();
        }

    });

    /*
        清空购物车
     */
    $('.clear-cart').click(function () {
        console.log(123456);
        $.ajax({
            url: "deleteAllCart",
            type: 'post',
            success: function (re) {
                if(re == "success"){
                    window.location.reload();
                }
            }
        });
    });

    /*
        商品移出购物车
     */
    $('.main-content').on('click', '[cartid]', function () {
       var cartid = $(this).attr('cartid');
        $.ajax({
            url: "deletCartByCartid",
            type: 'post',
            data: 'cartid=' + cartid,
            dataType: 'html',
            success: function (re) {
                if(re == "success"){
                    window.location.reload();
                }
            }
        });
    });

    /*
        结算购物车
     */
    $('.pay').click(function () {
        $.ajax({
            url: "insertOrderFromCart",
            type: 'post',
            data: 'cuid=' + localStorage.getItem("cuid"),
            dataType: 'html',
            success: function (re) {
                if(re == "success"){
                    console.log(123);
                    $.ajax({
                        url: "deleteCartByCuid",
                        type: 'post',
                        data: 'cuid=' + localStorage.getItem("cuid"),
                        dataType: 'html',
                        success: function (re) {
                            if(re == "success"){
                                window.location.href = "order.jsp";
                            }
                        }
                    });
                }
            }
        });
    });
});