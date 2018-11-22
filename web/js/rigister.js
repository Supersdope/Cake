$(function () {
    /*
        判断是否登录
        并显示登录用户名
     */
    if(localStorage.getItem('uname')==null || localStorage.getItem('uname')=="null"){
        $('.welcomeLi, .cartLi').hide();
    }else{
        $('.loginLi, .registerLi').hide();
        $('.welcomeSpan')[0].innerHTML = localStorage.getItem('uname');
    }

    /*
        邮箱地址自动补齐
     */
    var hosts = ['qq.com', '163.com', '126.com', 'gmail.com', 'hotmail.com', 'sina.com.cn'];
    $('[placeholder="输入邮箱地址"]').autocomplete({
        autoFocus : true,
        delay : 0,
        source : function(request, response){
            var term = request.term;
            var ix = term.indexOf('@');
            var name = "";
            var host = "";
            var result = [];
            var findHosts = [];

            result.push(term);

            if(ix>-1){
                name = term.slice(0, ix);
                host = term.slice(ix+1);
            }else{
                name = term;
                host = "";
            }

            if(name){
                if(host){
                    findHosts = $.grep(hosts, function(value, index){
                        return value.indexOf(host)>-1;
                    });
                }else{
                    findHosts = hosts;
                }

                var findResults = $.map(findHosts, function(value, index){
                    return name + '@' + value;
                });

                result = result.concat(findResults);
            }

            response(result);
        },
    });

    /*
        验证码
     */
    $('#mpanel').slideVerify({
        type : 1,		//类型
        vOffset : 5,	//误差量，根据需求自行调整
        barSize : {
            width : '280px',
            height : '40px',
        },
        ready : function() {
        },
        success : function() {
            $('#mpanel').attr('code', 'success');
        },
        error : function() {
        }

    });

    /*
        显示日历
     */
    $('[placeholder="选择生日"]').datepicker({
        //指定日历返回的日期格式
        dateFormat:'yy-mm-dd',
        //以数组的形式来指定星期的天的格式
        dayNamesMin:['日','一','二','三','四','五','六'],
        //以数组的形式来指定月份的格式
        monthNames:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        monthNamesShort:['一','二','三','四','五','六','七','八','九','十','十一','十二'],
        //为日期选择器指定一个域
        altField:'#email',
        altFormat:'dd-mm-yy',
        showWeek:true,
        weekHeader:'周',
        changeMonth:true,
        changeYear:true,
        //指定日历中可以选择的最小日期和最大日期
        maxDate: 0,
        //取值如果是字符串：m月    w周    y年    +代表当前日期之后，-代表当前日期之前
        //minDate:'-1m',
        //maxDate:'1m',
        yearRange:'1950:2020',//设置下拉菜单的年份区间
    });

    /*
        验证码验证
        添加用户到数据库
        跳转到登录页面
     */
    function useOther() {
        if($('#mpanel').attr('code')=='success'){
            $.ajax({
                url : "insert",
                type : "post",
                data : $('form').serialize(),
                dataType : 'html',
                success : function(re){
                    console.log(re);
                    window.location.href = "/login.jsp";
                },
            });
        }else{
            $('.error-text').css('display', 'block');
        }
    }
    
    /*
        验证邮箱格式
     */
    jQuery.validator.addMethod("isEmail", function(value, element) {
        var email = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        return this.optional(element) || email.test(value);
    }, "格式不正确");

    /*
        表单验证
     */
    $('form').validate({
        rules : {
            uemail : {
                required : true,
                isEmail : true,
                remote : {
                    url : "selectByUemail",
                    type : "POST",
                    dataType : "json",
                    data : {
                        uemail : function(){
                            return $('[placeholder="输入邮箱地址"]').val();
                        }
                    },
                },
            },
            uname : {
                required : true,
                rangelength : [2,10],
                remote : {
                    url : "selectByUname",
                    type : "POST",
                    dataType : "json",
                    data : {
                        uname : function(){
                            return $('[placeholder="输入用户名"]').val();
                        }
                    },
                },
            },
            upassword : {
                required : true,
                rangelength : [8,20],
            },
            upassword0 : {
                required : true,
                equalTo : '[name="upassword"]',
            },
            uquestion : {
                required : true,
            },
            uanswer : {
                required : true,
            },
            ubirthday : {
                required : true,
            },
        },
        messages : {
            uemail : {
                required : '邮箱不得为空！',
                isEmail : '邮箱格式错误',
                remote : '该邮箱已注册！',
            },
            uname : {
                required : '账号不得为空！',
                rangelength : '账号长度必须是{0}至{1}位！',
                remote : '该账号已经被占用！',
            },
            upassword : {
                required : '密码不得为空！',
                rangelength : '账号长度必须是{0}至{1}位！',
            },
            upassword0 : {
                required : '请确认密码！',
                equalTo : '两次输入的密码不一致！',
            },
            uquestion : {
                required : '请输入密保问题',
            },
            uanswer : {
                required : '请输入密保答案',
            },
            ubirthday : {
                required : '请输入生日',
            },
        },
        submitHandler : function(form){
            useOther();

        },
    });
});