<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/6/25 0025
  Time: 下午 15:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" import="com.itheima.po.Baby" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <title>Title</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-theme.css" rel="stylesheet">
    <link href="css/goods.css" rel="stylesheet">
    <script type="text/javascript" charset="utf-8" src="js/jquery-2.0.2.js"></script>
    <!--[if lt IR 9]>
    <script src="https://cdn.bootcss.com/html5shiv.min.js" type="text/javascript"></script>
    <script src="https://cdn.bootcss.com/respond.min.js" type="text/javascript"></script>
    <![endif]-->
    <script src="js/goods.js" type="text/javascript"></script>
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

    <div class="container">
        <%--图片展示--%>
        <c:forEach items="${inf}" var="ba">
        <div class="row row-photo">
            <div class="col-lg-11">
                <span style="display: none;">${ba.hephoto}</span>
            </div>
            <div class="col-lg-1">
                <div><img src="images/goods/0.jpg"></div>
            </div>
        </div>

        <%--宝贝信息--%>
        <div class="row row-info">
            <div class="col-lg-6">
                <div class="baby-title">${ba.title}</div>
                <div class="baby-sign">
                    <span style="display: none;">${ba.sign}</span>
                </div>
                <div class="baby-exp">
                    <span class="remove" style="display: none;">${ba.exp}</span>
                </div>
                <div class="baby-text">
                    ${ba.extext}
                </div>
                <div class="baby-bt">
                    <img src="images/goods/size/条件.png">
                    保鲜条件：0-4℃保藏10小时，5℃食用为佳
                </div>
                <div class="baby-grade">
                    <span style="display: none;">${ba.grade}</span>
                    <img src="images/goods/size/甜度.png">
                    参考甜度
                </div>
            </div>
            <div class="col-lg-6">
                <div class="baby-info">
                    <div class="info-size">
                        <c:forEach items="${ba.babysize}" var="si">
                            <div pound="${si.pound}磅" class="row-size" style="display: none;">
                                <img src="${si.sphoto}" class="sphoto">
                                <div class="sinfo">
                                    <div><img src="images/goods/size/尺寸.png"> ${si.size}</div>
                                    <div><img src="images/goods/size/人像.png"> 适合${si.mpople}人分享</div>
                                    <div><img src="images/goods/size/餐具.png"> 含<span class="ctable">${si.mtableware}</span>套餐具</div>
                                    <div><img src="images/goods/size/时间.png"> 最早明天 ${si.time}配送</div>
                                    <div class="baby-price">¥<span class="cprice">${si.price}</span>/<span class="cpound">${si.pound}磅</span></div>
                               </div>
                            </div>
                        </c:forEach>
                    </div>
                    <div style="clear: both"></div>
                    <div class="baby-size">
                        商品规格
                        <c:forEach items="${ba.babysize}" var="si">
                            <span style="color: #684029;">${si.pound}磅</span>
                        </c:forEach>
                    </div>
                    <div class="baby-hg">
                        换购商品
                        <img src="images/goods/size/hg-1.jpg">
                        <img src="images/goods/size/hg-2.jpg">
                        <img src="images/goods/size/hg-3.jpg">
                        <span class="hg-text"></span>
                    </div>
                    <div class="cart-success">
                        <p>成功添加购物车</p>
                        <a href="cart.jsp">查看购物车</a>
                    </div>
                    <div class="baby-btn">
                        <span>立即购买</span>
                        <span class="cart-btn" babyid="${ba.babyid}">加入购物车</span>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="main-photo">
            <span>${ba.mphoto}</span>
        </div>
        </c:forEach>
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
