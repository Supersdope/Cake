package com.itheima.po;

import java.util.List;

public class Cart {
    private Integer cartid;

    private String cbid;

    private List<Baby> baby;

    private int num;

    private String cpound;

    private int ctable;

    private double cprice;

    private String birthcard;

    private String cuid;

    private String res3;

    public Integer getCartid() {
        return cartid;
    }

    public void setCartid(Integer cartid) {
        this.cartid = cartid;
    }

    public List<Baby> getBaby() {
        return baby;
    }

    public void setBaby(List<Baby> baby) {
        this.baby = baby;
    }

    public String getCbid() {
        return cbid;
    }

    public void setCbid(String cbid) {
        this.cbid = cbid;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String getCpound() {
        return cpound;
    }

    public void setCpound(String cpound) {
        this.cpound = cpound;
    }

    public int getCtable() {
        return ctable;
    }

    public void setCtable(int ctable) {
        this.ctable = ctable;
    }

    public double getCprice() {
        return cprice;
    }

    public void setCprice(double cprice) {
        this.cprice = cprice;
    }

    public String getBirthcard() {
        return birthcard;
    }

    public void setBirthcard(String birthcard) {
        this.birthcard = birthcard;
    }

    public String getCuid() {
        return cuid;
    }

    public void setCuid(String cuid) {
        this.cuid = cuid;
    }

    public String getRes3() {
        return res3;
    }

    public void setRes3(String res3) {
        this.res3 = res3;
    }
}
