package com.itheima.po;

public class Babysize {
    private Integer sid;

    private String pound;

    private String sphoto;

    private String size;

    private String mpople;

    private String mtableware;

    private String time;

    private String price;

    private String sbid;

    private String res1;

    private String res2;

    public Integer getSid() {
        return sid;
    }

    public void setSid(Integer sid) {
        this.sid = sid;
    }

    public String getPound() {
        return pound;
    }

    public void setPound(String pound) {
        this.pound = pound == null ? null : pound.trim();
    }

    public String getSphoto() {
        return sphoto;
    }

    public void setSphoto(String sphoto) {
        this.sphoto = sphoto == null ? null : sphoto.trim();
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size == null ? null : size.trim();
    }

    public String getMpople() {
        return mpople;
    }

    public void setMpople(String mpople) {
        this.mpople = mpople == null ? null : mpople.trim();
    }

    public String getMtableware() {
        return mtableware;
    }

    public void setMtableware(String mtableware) {
        this.mtableware = mtableware == null ? null : mtableware.trim();
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time == null ? null : time.trim();
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price == null ? null : price.trim();
    }

    public String getSbid() {
        return sbid;
    }

    public void setSbid(String sbid) {
        this.sbid = sbid == null ? null : sbid.trim();
    }

    public String getRes1() {
        return res1;
    }

    public void setRes1(String res1) {
        this.res1 = res1 == null ? null : res1.trim();
    }

    public String getRes2() {
        return res2;
    }

    public void setRes2(String res2) {
        this.res2 = res2 == null ? null : res2.trim();
    }
}