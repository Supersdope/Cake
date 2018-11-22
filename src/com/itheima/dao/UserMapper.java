package com.itheima.dao;

import com.itheima.po.User;

import java.util.List;

public interface UserMapper {
    List<User> selectByUname(String uname);

    List<User> selectByUemail(String uemail);

    List<User> selectPassworByUname(User user);

    int deleteByPrimaryKey(Integer userid);

    int insert(User user);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userid);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
}