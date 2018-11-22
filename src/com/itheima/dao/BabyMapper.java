package com.itheima.dao;

import com.itheima.po.Baby;
import com.itheima.po.Combine;

import java.util.List;

public interface BabyMapper {
    List<Baby> selectBabyBybclass(Combine combine);

    List<Baby> selectBabyBySclassAndCclass(Combine combine);

    List<Baby> selectBabyByMany(Baby baby);

    int deleteBabyByBabyid(Integer babyid);

    int deleteByPrimaryKey(Integer babyid);

    int insert(Baby record);

    int insertSelective(Baby record);

    List<Baby> selectByPrimaryKey(Integer babyid);

    int updateByPrimaryKeySelective(Baby record);

    int updateByPrimaryKey(Baby record);
}