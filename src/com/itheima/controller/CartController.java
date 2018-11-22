package com.itheima.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.itheima.dao.CartMapper;
import com.itheima.dao.GorderMapper;
import com.itheima.po.Cart;
import com.itheima.po.Gorder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
public class CartController {
    @Autowired
    private CartMapper cartMapper;
    @Autowired
    private GorderMapper gorderMapper;

    /*
        添加商品id到购物车表中
        当表中存在此商品时，则数量加1
        当表中不存在此商品时，则新添加进表中
    */
    @RequestMapping(value = "/insertToCart")
    public void insertToCart(Cart c, HttpServletResponse response) throws IOException {
        Cart cart = cartMapper.selectByCart(c);
        int su = 0;
        if(cart==null){
            su = cartMapper.insertToCart(c);
        }else{
            cart.setNum(cart.getNum() + 1);
            su = cartMapper.updatanum(cart);
        }

        String str = "success";
        if(su < 1){
            str = "fail";
        }
        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(str);
        out.flush();
        out.close();
    }

    /*
        查找购物车cart表中所有商品
        并传送json格式数据到前端
     */
    @RequestMapping(value = "/selectCartByCuid")
    public void selectCartByCuid(String cuid, HttpServletResponse response) throws IOException {
        List<Cart> carts = cartMapper.selectCartByCuid(cuid);

        ObjectMapper mapper = new ObjectMapper();
        String jsonlist = mapper.writeValueAsString(carts);

        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(jsonlist);
        out.flush();
        out.close();
    }

    /*
        通过cartid删除数据
     */
    @RequestMapping(value = "/deletCartByCartid")
    public void deletCartByCartid(int cartid, HttpServletResponse response) throws IOException {
        int su = cartMapper.deletCartByCartid(cartid);

        String str = "success";

        if(su!=1){
            str = "fail";
        }

        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(str);
        out.flush();
        out.close();
    }

    /*
        删除所有数据
     */
    @RequestMapping(value = "/deleteAllCart")
    public void deleteAllCart(HttpServletResponse response) throws IOException {
        int su = cartMapper.deleteAllCart();
        String str = "success";

        if(su < 1){
            str = "fail";
        }

        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(str);
        out.flush();
        out.close();
    }

    /*
        根据id修改购物车中商品
     */
    @RequestMapping(value = "/UpdataCardByCartid")
    public void UpdataCardByCartid(Cart cart, HttpServletResponse response) throws IOException {
        int su = cartMapper.UpdataCardByCartid(cart);
        String str = "success";

        if(su < 1){
            str = "fail";
        }

        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(str);
        out.flush();
        out.close();
    }

    /*
        根据cuid查询购物车中所有商品
        把查找到的商品添加到订单表中
        是否成功传到前台
     */
    @RequestMapping(value = "/insertOrderFromCart")
    public void insertOrderFromCart(String cuid, HttpServletResponse response) throws IOException {
        List<Cart> carts = cartMapper.selectAllCartByCuid(cuid);
        int su = 0;
        for (Cart c:carts) {
            String orderid = "WH";
            SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
            orderid += df.format(new Date()) + c.getCuid() + c.getCbid();

            SimpleDateFormat da = new SimpleDateFormat("yyyy-MM-dd HH:mm");
            String otime = da.format(new Date());

            String opattern = "支付宝支付";

            String ostate = "未完成";

            double oprice = c.getCprice() * c.getNum();

            String obid = c.getCbid();

            String ouid = c.getCuid();

            Gorder order = new Gorder(orderid, otime, opattern, ostate, oprice, obid, ouid);
//            System.out.println(order.getOrderid() + order.getOtime() + order.getOpattern() + order.getOstate() + order.getOprice() + order.getObid() + order.getOuid());
            su += gorderMapper.insertGorder(order);
        }
        String str = "success";

        if(su < 1){
            str = "fail";
        }

        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(str);
        out.flush();
        out.close();
    }

    /*
        购物车提交后根据cuid删除购物车中数据
     */
    @RequestMapping(value = "/deleteCartByCuid")
    public void deleteCartByCuid(String cuid, HttpServletResponse response) throws IOException {
        int su = cartMapper.deleteCartByCuid(cuid);
        String str = "success";

        if(su < 1){
            str = "fail";
        }

        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(str);
        out.flush();
        out.close();
    }
}
