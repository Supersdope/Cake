package com.itheima.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.itheima.dao.GorderMapper;
import com.itheima.po.Gorder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@Controller
public class GorderController {
    @Autowired
    private GorderMapper gorderMapper;

    @RequestMapping(value = "/selectGorderByOstate")
    public void selectGorderByOstate(Gorder gorder, HttpServletResponse response) throws ServletException, IOException {
        System.out.println(gorder.getOuid());
        List<Gorder> orders = gorderMapper.selectGorderByOstate(gorder);

        ObjectMapper mapper = new ObjectMapper();
        String jsonlist = mapper.writeValueAsString(orders);

        response.setContentType("text/html;charset=UTF-8;");
        PrintWriter out=response.getWriter();
        out.print(jsonlist);
        out.flush();
        out.close();
    }

    @RequestMapping(value = "/UpdataOstateByOrderid")
    public void UpdataOstateByOrderid(Gorder gorder, HttpServletResponse response) throws ServletException, IOException {
        int su = gorderMapper.UpdataOstateByOrderid(gorder);
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
