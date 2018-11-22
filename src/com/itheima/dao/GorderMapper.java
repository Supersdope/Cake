package com.itheima.dao;

import com.itheima.po.Gorder;

import java.util.List;

public interface GorderMapper {
    int insertGorder(Gorder gorder);

    List<Gorder> selectGorderByOstate(Gorder gorder);

    int UpdataOstateByOrderid(Gorder gorder);

    int deleteByPrimaryKey(String orderid);

    int insert(Gorder record);

    int insertSelective(Gorder record);

    Gorder selectByPrimaryKey(String orderid);

    int updateByPrimaryKeySelective(Gorder record);

    int updateByPrimaryKey(Gorder record);
}