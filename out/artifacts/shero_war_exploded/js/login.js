$(function () {
    /*
        根据uname查询用户cuid，并保存
     */
    $('[name="uname"]').blur(function () {
        $.ajax({
            url: "selectUseridByUname",
            type: 'post',
            data: 'uname=' + $('[name="uname"]').val(),
            dataType: 'html',
            success: function (re) {
                localStorage.setItem('cuid', re);
            }
        });
    });

    /*
        判断是否登录
        当uname为空则未登录，隐藏用户名li和购物车li
        当uname不为空时，则跳转到index.jsp
     */
    if(localStorage.getItem('uname')==null || localStorage.getItem('uname')=="null"){
        $('.welcomeLi, .cartLi').hide();
    }else{
        alert("已登录");
        window.location.href = "index.jsp";
    }


    /*
        滑动验证码验证
        成功时添加属性code为success，为后面判断验证码是否成功留下验证方法
     */
    $('#mpanel').slideVerify({
        type : 1,
        vOffset : 5,
        barSize : {
            width : '280px',
            height : '40px',
        },
        ready : function() {
        },
        success : function() {
            $('#mpanel').attr('code', 'success');
            $('.error-text').css("display", "none");
        },
        error : function() {
        }

    });
    console.log();

    /*
        验证成功，跳转到index,jsp页面
        验证失败则显示错误信息
     */
    function useOther() {
        if($('#mpanel').attr('code')=='success'){
            localStorage.setItem('uname', $('[name="uname"]').val());
            window.location.href = "/index.jsp";
        }else{
            $('.error-text').css('display', 'block');
        }
    }

    /*
        用户名，密码验证
        都验证成功时，条用useOther方法验证
     */
    $('form').validate({
        rules : {
            uname : {
                required : true,
                remote : {
                    url : "selectByUname2",
                    type : "POST",
                    dataType : "json",
                    data : {
                        uname : function(){
                            return $('[name="uname"]').val();
                        },
                    },
                },
            },
            upassword : {
                required : true,
                remote : {
                    url : "selectPassworByUname",
                    type : "POST",
                    dataType : "json",
                    data : {
                        uname : function(){
                            return $('[name="uname"]').val();
                        },
                    },
                },
            },

        },
        messages : {

            uname : {
                required : '请输入用户名！',
                remote : '用户不存在！',
            },
            upassword : {
                required : '请输入密码！',
                remote : '密码错误！',
            },

        },
        submitHandler : function(form){
            useOther();
        },
    });

});