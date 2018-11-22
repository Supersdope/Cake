package com.itheima.po;

import java.util.List;

public class Gorder {
    private String orderid;

    private String otime;

    private String opattern;

    private String ostate;

    private Double oprice;

    private String obid;

    private String ouid;

    private String res;

    private String res2;

    private String res3;

    private List<Baby> baby;

    public String getOrderid() {
        return orderid;
    }

    public void setOrderid(String orderid) {
        this.orderid = orderid == null ? null : orderid.trim();
    }

    public String getOtime() {
        return otime;
    }

    public void setOtime(String otime) {
        this.otime = otime == null ? null : otime.trim();
    }

    public String getOpattern() {
        return opattern;
    }

    public void setOpattern(String opattern) {
        this.opattern = opattern == null ? null : opattern.trim();
    }

    public String getOstate() {
        return ostate;
    }

    public void setOstate(String ostate) {
        this.ostate = ostate == null ? null : ostate.trim();
    }

    public Double getOprice() {
        return oprice;
    }

    public void setOprice(Double oprice) {
        this.oprice = oprice;
    }

    public String getObid() {
        return obid;
    }

    public void setObid(String obid) {
        this.obid = obid == null ? null : obid.trim();
    }

    public String getOuid() {
        return ouid;
    }

    public void setOuid(String ouid) {
        this.ouid = ouid == null ? null : ouid.trim();
    }

    public String getRes() {
        return res;
    }

    public void setRes(String res) {
        this.res = res == null ? null : res.trim();
    }

    public String getRes2() {
        return res2;
    }

    public void setRes2(String res2) {
        this.res2 = res2 == null ? null : res2.trim();
    }

    public String getRes3() {
        return res3;
    }

    public void setRes3(String res3) {
        this.res3 = res3 == null ? null : res3.trim();
    }

    public List<Baby> getBaby() {
        return baby;
    }

    public void setBaby(List<Baby> baby) {
        this.baby = baby;
    }

    public Gorder(String orderid, String otime, String opattern, String ostate, double oprice, String obid, String ouid){
        this.orderid = orderid;
        this.otime = otime;
        this.opattern = opattern;
        this.ostate = ostate;
        this.oprice = oprice;
        this.obid = obid;
        this.ouid = ouid;
    }

    public Gorder(){}
}