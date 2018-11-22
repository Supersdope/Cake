<%--
  Created by IntelliJ IDEA.
  User: LENOVO
  Date: 2018/6/15
  Time: 10:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>shero蛋糕官网</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-theme.css" rel="stylesheet">
    <link href="css/index.css" rel="stylesheet">
    <script type="text/javascript" charset="utf-8" src="js/jquery-2.0.2.js"></script>
    <!--[if lt IR 9]>
    <script src="https://cdn.bootcss.com/html5shiv.min.js" type="text/javascript"></script>
    <script src="https://cdn.bootcss.com/respond.min.js" type="text/javascript"></script>
    <![endif]-->
    <script src="js/index.js" type="text/javascript"></script>
  </head>
  <body>
    <!--导航栏-->
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

    <!--轮播图-->
    <div id="carousel" class="carousel" data-ride="carousel">
      <ol class="carousel-indicators sr-only">
        <li class="active" data-target="carousel" data-slide-to="0">1</li>
        <li data-target="carousel" data-slide-to="1">2</li>
        <li data-target="carousel" data-slide-to="2">3</li>
        <li data-target="carousel" data-slide-to="3">4</li>
        <li data-target="carousel" data-slide-to="3">5</li>
        <li data-target="carousel" data-slide-to="3">6</li>
      </ol>
      <div class="carousel-inner">
        <div class="active item" style="width: 100%; height: 608px;">
          <a href="#"><img src="images/index/1.jpg" width="100%"></a>
        </div>
        <div class="item" style="width: 100%; height: 608px;"><a href="#"><img src="images/index/2.jpg" width="100%"></a></div>
        <div class="item" style="width: 100%; height: 608px;"><a href="#"><img src="images/index/3.jpg" width="100%"></a></div>
        <div class="item" style="width: 100%; height: 608px;"><a href="#"><img src="images/index/4.jpg" width="100%"></a></div>
        <div class="item" style="width: 100%; height: 608px;"><a href="#"><img src="images/index/5.jpg" width="100%"></a></div>
        <div class="item" style="width: 100%; height: 608px;"><a href="#"><img src="images/index/6.jpg" width="100%"></a></div>
      </div>
    </div>
    <a class="left to-left" href="#carousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="right to-right" href="#carousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
    </a>

    <div class="container main-content">
        <div class="row">
            <div class="col-lg-3">
                <a href="#"><img src="images/index/新品.jpg"></a>
            </div>
            <div class="col-lg-3">
                <a href="#"><img src="images/index/人气.jpg"></a>
            </div>
            <div class="col-lg-3">
                <a href="#"><img src="images/index/下午茶.jpg"></a>
            </div>
            <div class="col-lg-3">
                <a href="#"><img src="images/index/活动专区.jpg"></a>
            </div>
        </div>
        <div class="new-content">
            <div class="content-title">
                <span>新品</span>
                <span>/专区</span>
            </div>
            <div>
                <a href="#"><img src="images/index/新品 专区.jpg" width="100%"></a>
            </div>
            <div class="row new-row">
                <div class="col-lg-3">
                    <img src="images/index/新品-1.png">
                    <div class="title"><a href="#">浅草</a></div>
                    <div class="ex"><a href="#">2018世界杯</a></div>
                    <div class="sign"><a href="#">标签 ></a><a href="#">标签 ></a></div>
                    <hr style=" height:2px;border:none;border-top:2px dotted #333;" />
                    <div>
                        <span class="price">￥12.0/2.0磅</span>
                        <span class="pull-right cart"><a href="#">加入购物车</a></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="popu-content">
            <div class="content-title">
                <span>人气</span>
                <span>/专区</span>
            </div>
            <div>
                <a href="#"><img src="images/index/人气专区.jpg" width="100%"></a>
            </div>
            <div class="row popu-row">
                <div class="col-lg-3">
                    <img src="images/index/新品-1.png">
                    <div class="title"><a href="#">浅草</a></div>
                    <div class="ex"><a href="#">2018世界杯</a></div>
                    <div class="sign"><a href="#">标签 ></a><a href="#">标签 ></a></div>
                    <hr style=" height:2px;border:none;border-top:2px dotted #333;" />
                    <div>
                        <span class="price">￥12.0/2.0磅</span>
                        <span class="pull-right cart"><a href="#">加入购物车</a></span>
                    </div>
                </div>
            </div>
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

    <script src="js/jquery.min.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
  </body>
</html>
