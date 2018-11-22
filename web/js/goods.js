$(function () {
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
        头部图片显示
        将从数据库中获取的连接在一起的多张图片地址分割成单张地址。
     */
    var hephoto = $('.col-lg-11')[0].textContent.trim();
    var heArr = hephoto.split(',');
    for (var i = 0; i < heArr.length; i++) {
        if (i == 0) {
            $('.col-lg-11').append("<div><img src=\"" + heArr[i] + "\" width=\"100%\"></div>");

        } else {
            $('.col-lg-11').append("<div><img src=\"" + heArr[i] + "\" width=\"100%\" style=\"display: none;\"></div>");
        }
        $('.col-lg-1').append("<div><img src=\"" + heArr[i] + "\"></div>");
    }
    $('.col-lg-11').find('span').remove();

    /*
        头部图片显示效果
        通过判断两张照片的src是否相同来显示相同的照片
     */
   $('.col-lg-1').find('img').mouseover(function () {
       $('.col-lg-1').find('img').css('cursor', 'default');
       var li = $('.col-lg-1').find('img');
       var ll = $('.col-lg-11').find('img');
       var th = $(this).attr('src');
       for (var i = 0; i < li.length; i++){
           var src = li[i].attributes.src.textContent;
           if(i!=0 && src==th){
               $('.col-lg-1').find('img').css('cursor', 'pointer');
               ll.css('display', 'none');
               ll[i-1].style.display = 'block';
           }
       }
   });

    /*
        标签显示
        将从数据库中获取的连接在一起的多个标签名称分割成单个标签。
     */
    var babySign = $('.baby-sign')[0].textContent.trim();
    var signArr = babySign.split('/');
    for (var i = 0; i < signArr.length; i++){
        $('.baby-sign').append("<a href=\"#\">"+signArr[i]+" ></a>");
    }
    $('.baby-sign').find('span').remove();

    /*
        修饰图片文字显示
        将从数据库中获取的连接在一起的多个修饰图片文字分割成单个修饰图片文字。
     */
    var babyExp = $('.baby-exp')[0].textContent.trim();
    var expArr = babyExp.split(',');
    for (var i = 0; i < expArr.length; i+=2){
        $('.baby-exp').append("<img src=\""+expArr[i]+"\"><span>"+expArr[i+1]+"</span>");
    }
    $('.remove').remove();

    /*
        甜度参考显示
        根据从数据库获取的数字来生成相应的图片
     */
    var babyGrade = $('.baby-grade')[0].textContent.trim();
    var grade = babyGrade.substring(0, 1);
    for (var i= 0; i < grade; i++){
        $('.baby-grade').append("<img src=\"images/goods/size/甜度.png\">");
    }
    for (var i= 0; i < 5 - grade; i++){
        $('.baby-grade').append("<img src=\"images/goods/size/无甜度.png\">");
    }
    $('.baby-grade').find('span').remove();

    /*
        规格显示
        根据span里面的文本内容匹配到pound
     */
    $('.baby-size').find('span').click(function () {
        $('.baby-size').find('span').css("border-color", "#e7e0dd");
        $('.baby-size').find('span').css("color", "#684029");
        $(this).css("border-color", "#D5BFA7");
        $(this).css("color", "#D5BFA7");
        var pound = $(this)[0].textContent;
        var row = $('.row-size');
        for (var i = 0; i < row.length; i++){
            row[i].style.display = "none";
            if(pound == row[i].attributes.pound.nodeValue){
                row[i].style.display = "block";
            }
        }
    });

    $('.baby-hg').find('img').click(function () {
        $('.baby-hg').find('img').css("border-color", "#e7e0dd");
        $(this).css("border-color", "#D5BFA7");
        var im = $('.baby-hg').find('img');
        for (var i = 0; i < im.length; i++){
            if($(this)[0] == im[i]){
                var text = "购买任意磅数蛋糕+" + ((i+1)*10) + "元换购蓝莓 " + (i+1) + "盒";
                $('.hg-text')[0].textContent = text;
            }
        }

    });

    /*
        进入页面时的显示
     */
    var size = $('.baby-size').find('span');
    for (var i = 0; i < size.length; i++){
        if(size[i].textContent == "2.0磅"){
            size[i].style.color = "#D5BFA7";
            size[i].style.border = "1px solid #D5BFA7";
        }
    }
    var row = $('.row-size');
    for (var i = 0; i < size.length; i++){
        if(row[i].attributes.pound.nodeValue == "2.0磅"){
            row[i].style.display = "block";
        }
    }

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
    $('.cart-success').hide();
    $('.cart-btn').click(function () {
        console.log($(this).attr("babyid"));
        if(localStorage.getItem('uname')==null || localStorage.getItem('uname')=="null"){
            alert("请先登录");
            window.location.href = "/login.jsp";
        }else {
            var cpound = '', ctable = '', cprice = '';
            for (var i = 0; i < $('.row-size').length; i++) {
                if ($('.row-size')[i].style.display == 'block') {
                    ctable = $('.row-size')[i].children[1].children[2].children[1].innerHTML;

                    cpound = $('.row-size')[i].children[1].children[4].children[1].innerHTML;

                    cprice = $('.row-size')[i].children[1].children[4].children[0].innerHTML;
                }
            }
            $.ajax({
                url: "insertToCart",
                type: 'post',
                data: 'cbid=' + $(this).attr("babyid") + "&cpound=" + cpound + "&ctable=" + ctable + "&cprice=" + cprice + "&cuid=" + localStorage.getItem('cuid'),
                dataType: 'html',
                success: function (re) {
                    if (re == "success") {
                        $('.cart-success').fadeIn(300).delay(2000).fadeOut(300);
                        getNum();
                    }
                }
            });
        }
    });

    /*
        主体图片显示
        将从数据库中获取的连接在一起的多张图片地址分割成单张地址。
     */
    var mphoto = $('.main-photo').find('span')[0].textContent.trim();
    var mphArr = mphoto.split(',');
    for (var i = 0; i < mphArr.length; i++){
        $('.main-photo').append("<img src=\""+mphArr[i]+"\">");
    }
    $('.main-photo').find('span').remove();

    /*
        设置页面标题为商品标题
     */
    $('title')[0].textContent = $('.baby-title')[0].textContent + "--SHREO_蛋糕商城";
});