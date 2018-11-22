package com.itheima.dao;

import com.itheima.po.Cart;

import java.util.List;

public interface CartMapper {

    int insertToCart(Cart c);

    Cart selectByCart(Cart c);

    int updatanum(Cart c);

    List<Cart> selectCartByCuid(String cuid);

    int deletCartByCartid(int cartid);

    int deleteAllCart();

    int UpdataCardByCartid(Cart cart);

    List<Cart> selectAllCartByCuid(String cuid);

    int deleteCartByCuid(String cuid);
}