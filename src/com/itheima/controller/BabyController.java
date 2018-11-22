package com.itheima.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.itheima.dao.BabyMapper;
import com.itheima.po.Baby;
import com.itheima.po.Combine;
import com.itheima.po.Page;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@Controller
public class BabyController {
    @Autowired
    private BabyMapper babyMapper;
    private Page page;
    private Combine combine;

    /*
        通过bclass来查询baby商品
     */
    @RequestMapping(value = "/selectBabyBybclass")
    public void selectBabyBybclass(Baby baby, HttpServletResponse response) throws IOException {
        page = new Page(4);

        combine = new Combine(baby, page);

        List<Baby> ba = babyMapper.selectBabyBybclass(combine);

        ObjectMapper mapper = new ObjectMapper();
        String jsonlist = mapper.writeValueAsString(ba);

        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(jsonlist);
        out.flush();
        out.close();
    }

    /*
        通过bclass和sclass来查询baby商品
     */
    @RequestMapping(value = "/selectBabyBySclassAndCclass")
    public void selectBabyBySclassAndCclass(Baby baby, int cpage, int count, HttpServletResponse response) throws IOException {
        System.out.println(baby.getSclass() + baby.getCclass());
        page = new Page((cpage-1)*count, count);
        System.out.println(page.getCpage());
        combine = new Combine(baby, page);

        List<Baby> ba = babyMapper.selectBabyBySclassAndCclass(combine);
        ObjectMapper mapper = new ObjectMapper();
        String jsonlist = mapper.writeValueAsString(ba);
        System.out.println(jsonlist);
        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(jsonlist);
        out.flush();
        out.close();
    }

    /*
        通过主键babyid来查询baby商品
     */
    @RequestMapping(value = "/selectBabyByPrimaryKey")
    public String selectBabyByPrimaryKey(int babyid, Model model){

        List<Baby> ba = babyMapper.selectByPrimaryKey(babyid);

        model.addAttribute("inf", ba);

        return "goods.jsp";
    }

    /*
        通过id，名称，大分类，小分类查询
     */
    @RequestMapping(value = "/selectBabyByMany")
    public String selectBabyByMany(Baby baby, Model model){
        if(baby.getSclass().equals("全部")){
            baby.setSclass("");
        }
        List<Baby> babies = babyMapper.selectBabyByMany(baby);

        model.addAttribute("inf", babies);

        return "maintain.jsp";
    }

    /*
     *  根据babyid删除
     */
    @RequestMapping(value = "/deleteBabyByBabyid")
    public void deleteBabyByBabyid(Integer babyid, HttpServletResponse response) throws IOException {
        System.out.println(babyid);
        int su = babyMapper.deleteBabyByBabyid(babyid);

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
     *  添加商品
     */
    @RequestMapping(value = "/addBaby")
    public void addBaby(@Param("baby") Baby baby, @Param("babysize") String babysize, HttpServletResponse response) throws IOException {
        System.out.println(baby.getExphoto());
        System.out.println(baby.getMphoto());
        System.out.println(babysize);

//        String str = "success";
//
//        if(su < 1){
//            str = "fail";
//        }
//
//        response.setContentType("text/html;charset=UTF-8;");
//        PrintWriter out=response.getWriter();
//        out.print(str);
//        out.flush();
//        out.close();
    }
}
