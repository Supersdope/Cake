<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/6/17 0017
  Time: 上午 8:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-theme.css" rel="stylesheet">
    <link href="css/list.css" rel="stylesheet">
    <script type="text/javascript" charset="utf-8" src="js/jquery-2.0.2.js"></script>
    <!--[if lt IR 9]>
    <script src="https://cdn.bootcss.com/html5shiv.min.js" type="text/javascript"></script>
    <script src="https://cdn.bootcss.com/respond.min.js" type="text/javascript"></script>
    <![endif]-->
    <script src="js/list.js"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-1">

            </div>
            <div class="col-lg-11">
                <ul class="nav nav-tabs a">
                    <li class="active"><a href="#all-pane" class="list-all" data-toggle="tab">所有订单</a></li>
                    <li><a href="#nopay-pane" class="list-nopay" data-toggle="tab">待付款</a></li>
                    <li><a href="#nosend-pane" class="list-nosend" data-toggle="tab">待发货</a></li>
                    <li><a href="#nosure-pane" class="list-nosure" data-toggle="tab">待收货</a></li>
                    <li><a href="#noreview-pane" class="list-noreview" data-toggle="tab">待评价</a></li>
                </ul>
                <div class="list-content">
                    <div class="row content-title">
                        <div class="col-lg-5">
                            宝贝
                        </div>
                        <div class="col-lg-2">
                            单价
                        </div>
                        <div class="col-lg-1">
                            数量
                        </div>
                        <div class="col-lg-1">
                            商品操作
                        </div>
                        <div class="col-lg-1">
                            实付款
                        </div>
                        <div class="col-lg-1">
                            交易状态
                        </div>
                        <div class="col-lg-1">
                            交易操作
                        </div>
                    </div>

                    <input type="checkbox" name="listBox" id="checkAll" onclick="checkOne()"> 全选
                    <input type="button" value="下一页" class="pull-right">
                    <input type="button" value="上一页" class="pull-right">
                </div>
                <div class="tab-content">
                    <div class="tab-pane active in" id="all-pane">
                        <div class="row content-one">
                            <div class="col-lg-5">
                                <input type="checkbox" name="listBox" onclick="checkOne()"> 时间 订单号：
                            </div>
                            <div class="col-lg-2">
                                卖家
                            </div>
                            <div class="col-lg-4">

                            </div>
                            <div class="col-lg-1">
                                删除图标<span class="ui-icon ui-icon-trash"></span>
                            </div>
                        </div>
                        <div class="row content-two">
                            <div class="col-lg-5">
                                <img src="images\4.jpg" />
                                <img src="ui-icons_444444_256x240.png">
                                <a href="">宝贝标题</a>
                            </div>
                            <div class="col-lg-2">
                                ￥25
                            </div>
                            <div class="col-lg-1">
                                1
                            </div>
                            <div class="col-lg-1">
                                <a href="">申请售后</a>
                                <a href="">投诉商家</a>
                            </div>
                            <div class="col-lg-1">
                                ￥25
                            </div>
                            <div class="col-lg-1">
                                <a href="">物流详情</a>
                            </div>
                            <div class="col-lg-1">
                                <div class="two-ope">
                                    <a href="">评价</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="nopay-pane"></div>
                    <div class="tab-pane" id="nosend-pane"></div>
                    <div class="tab-pane" id="nosure-pane"></div>
                    <div class="tab-pane" id="noreview-pane"></div>
                </div>

            </div>
        </div>
    </div>


    <script src="js/jquery.min.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
</body>
</html>
