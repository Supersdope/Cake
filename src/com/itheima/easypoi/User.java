package com.itheima.easypoi;

import cn.afterturn.easypoi.excel.annotation.Excel;
import cn.afterturn.easypoi.excel.annotation.ExcelCollection;
import cn.afterturn.easypoi.excel.annotation.ExcelEntity;
import cn.afterturn.easypoi.excel.annotation.ExcelTarget;
import com.itheima.po.Product;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 *
 * 系统用户表
 *
 */
@ExcelTarget("User")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    /** 用户ID */
    @Excel(name = "用户id" , needMerge = true)
    private Long id;

    /** 用户名 */
    @Excel(name = "用户名", needMerge = true)
    private String name;


    /** 用户年龄 */
    @Excel(name = "年龄", needMerge = true)
    private Integer age;

    @ExcelEntity(name = "商品")
    private Product product;

    /**购买的商品*/
    @ExcelCollection(name = "商品序列")
    private List<Product> products;

    /**创建时间*/
    @Excel(name = "创建时间" ,exportFormat="yyyy-mm-dd" , needMerge = true )
    private Date time;

    /**性别*/
    @Excel(name="性别" , replace={"男_1","女_0"}, needMerge = true)
    private int sex;



    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }



    public int getSex() {
        return sex;
    }

    public void setSex(int sex) {
        this.sex = sex;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }



    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return this.age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

}
