package com.itheima.controller;

import com.itheima.dao.UserMapper;
import com.itheima.po.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@Controller
public class UserController {
    @Autowired
    private UserMapper userMapper;

    @RequestMapping(value = "/selectByUname")
    public void selectByUname(String uname, HttpServletResponse response) throws IOException {

        List<User> u = userMapper.selectByUname(uname);
        String str = "true";
        if(u.size() != 0){
            str = "false";
        }
        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(str);
        out.flush();
        out.close();
    }

    @RequestMapping(value = "/selectByUname2")
    public void selectByUname2(String uname, HttpServletResponse response) throws IOException {
        List<User> u = userMapper.selectByUname(uname);
        String str = "true";
        if(u.size() == 0){
            str = "false";
        }
        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(str);
        out.flush();
        out.close();
    }

    @RequestMapping(value = "/selectPassworByUname")
    public void selectPassworByUname(User user, HttpServletResponse response) throws IOException {
        List<User> u = userMapper.selectPassworByUname(user);
        String str = "true";
        if(!user.getUpassword().equals(u.get(0).getUpassword())){
            str = "false";
        }

        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(str);
        out.flush();
        out.close();
    }

    @RequestMapping(value = "/selectByUemail")
    public void selectByUemail(String uemail, HttpServletResponse response) throws IOException {
        List<User> u = userMapper.selectByUemail(uemail);
        System.out.println(u);
        String str = "true";
        if(u.size() != 0){
            str = "false";
        }
        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(str);
        out.flush();
        out.close();
    }

    @RequestMapping(value = "/selectUseridByUname")
    public void selectUseridByUname(String uname, HttpServletResponse response) throws IOException {
        System.out.println(123456);
        int userid = userMapper.selectByUname(uname).get(0).getUserid();

        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(userid);
        out.flush();
        out.close();
    }

    @RequestMapping(value = "/insert")
    public void insert(User user, HttpServletResponse response) throws IOException {
        int u = userMapper.insert(user);

        String str = "success";
        if(u < 1){
            str = "fail";
        }
        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(str);
        out.flush();
        out.close();
    }
}
