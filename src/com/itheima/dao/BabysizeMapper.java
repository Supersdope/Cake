package com.itheima.dao;

import com.itheima.po.Babysize;

public interface BabysizeMapper {
    int deleteByPrimaryKey(Integer sid);

    int insert(Babysize record);

    int insertSelective(Babysize record);

    Babysize selectByPrimaryKey(Integer sid);

    int updateByPrimaryKeySelective(Babysize record);

    int updateByPrimaryKey(Babysize record);
}