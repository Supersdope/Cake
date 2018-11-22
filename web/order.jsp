<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/1 0001
  Time: 下午 16:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>订单管理——shero_蛋糕商城</title>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="css/bootstrap-theme.css" rel="stylesheet" type="text/css">
    <link href="css/order.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" charset="utf-8" src="js/jquery-2.0.2.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/jquery.validate.js"></script>
    <script src="js/order.js" type="text/javascript"></script>
    <!--[if lt IR 9]>
    <script src="https://cdn.bootcss.com/html5shiv.min.js" type="text/javascript"></script>
    <script src="https://cdn.bootcss.com/respond.min.js" type="text/javascript"></script>
    <![endif]-->
</head>
<body>
    <nav class="navbar navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".responsive-nav">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <span class="navbar-brand">
            <a href="#">
              <img src="images/index/logo.jpg" width="150px" height="40px" style="margin: 0;">
            </a>
          </span>
        </div>
        <div class="collapse navbar-collapse responsive-nav">

            <ul class="nav navbar-nav">
                <li><a href="index.jsp">首页</a></li>
                <li><a href="gallery.jsp?a=1">蛋糕</a></li>
                <li><a href="gallery.jsp?a=2">冰淇淋</a></li>
                <li><a href="gallery.jsp?a=3">咖啡下午茶</a></li>
                <li><a href="">咖啡全国送</a></li>
                <li><a href="">企业专区</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li class="loginLi"><a href="login.jsp">登录</a></li>
                <li class="registerLi"><a href="rigister.jsp">注册</a></li>
                <li class="welcomeLi">
                    <span>欢迎您！</span>
                    <span class="welcomeSpan"></span>
                    <span class="logout">退出登录</span>
                </li>
                <li class="orderLi">
                    <a href="order.jsp">
                        <span class="glyphicon glyphicon-user" style="padding-top: 3px"></span>
                    </a>
                </li>
                <li class="cartLi">
                    <a href="cart.jsp">
                        <span class="glyphicon glyphicon-shopping-cart"></span>
                        <span class="badge"></span>
                    </a>
                </li>
            </ul>

        </div>
    </div>
</nav>
    <div class="container" style="margin-top: 7%;">
        <div class="content-title">
            <ul>
                <li>未完成</li>
                <li>已付款</li>
                <li>已完成</li>
                <li>所有订单</li>
            </ul>
        </div>
        <div style="clear: both"></div>
        <div class="main-content">
            <div class="row order-title">
                <div class="col-lg-3">
                    订单编号
                </div>
                <div class="col-lg-3">
                    下单时间
                </div>
            </div>
            <div class="row order-product">
                <div class="col-lg-3">
                    <img src="images/index/新品-1.png">
                </div>
                <div class="col-lg-3">
                    支付方式
                </div>
                <div class="col-lg-2">
                    状态
                </div>
                <div class="col-lg-2">
                    价格
                </div>
                <div class="col-lg-2">
                    <span class="pay"></span>
                </div>
            </div>
        </div>
        <div style="text-align: center; height: 200px;padding-top: 100px;color: #D5BFA7;" class="emptyDiv">
            没有相关订单...
        </div>
    </div>

    <div class="footer-content">
        <div class="container">
            <img src="">
            <ul class="footer-ul">
                <li><a href="#">联系我们</a></li>
                <li>丨</li>
                <li><a href="#">订购帮助</a></li>
                <li>丨</li>
                <li><a href="#">企业合作</a></li>
                <li>丨</li>
                <li><a href="#">生产经营资质</a></li>
                <li>丨</li>
                <li><a href="#">公告专区</a></li>
            </ul>
            <div class="footer-photo">
                <a href="#"><img src="images/index/footer-1.png"></a>
                <a href="#"><img src="images/index/footer-2.png" height="50px"></a>
                <a href="#">APP</a>
            </div>
            <div>
                <p>订购专线：123 456 7890（服务时间 08:00–22:00）</p>
                <p>客服电话：123-12345678（全国） | kefu@21cake.com（邮箱）</p>
                <p>武汉/广州：提前1小时预订；上海：提前3小时预订；深证：提前4小时预订；天津/苏州/无锡/江苏：提前8小时预订（当日22点以后订单，于次日8点开始审核） </p>
                <p>当日蛋糕配送截止下单时间：北京：16:50；上海：16:30；杭州/广州：13:50；天津：10:30；苏州/无锡/深圳：11:00</p>
                <p>网站注册公司名称: 武汉shero食品有限公司 地址: 湖北省武汉市江夏区光谷大道114号 </p>
                <hr>
                <p style="padding-bottom: 1%">Copyright© shero蛋糕官网商城 2018, 版权所有 京ICP备1234567号-1</p>
            </div>
        </div>
    </div>
</body>
</html>
