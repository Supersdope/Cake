package com.itheima.po;

import java.util.List;

public class Baby {
    private Integer babyid;

    private String exphoto;

    private String title;

    private String ex;

    private String grade;

    private String bclass;

    private String sclass;

    private String cclass;

    private String mphoto;

    private String sign;

    private String exp;

    private List<Babysize> babysize;

    private String hephoto;

    private String extext;

    public Integer getBabyid() {
        return babyid;
    }

    public void setBabyid(Integer babyid) {
        this.babyid = babyid;
    }

    public String getExphoto() {
        return exphoto;
    }

    public void setExphoto(String exphoto) {
        this.exphoto = exphoto == null ? null : exphoto.trim();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getEx() {
        return ex;
    }

    public void setEx(String ex) {
        this.ex = ex == null ? null : ex.trim();
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade == null ? null : grade.trim();
    }

    public String getBclass() {
        return bclass;
    }

    public void setBclass(String bclass) {
        this.bclass = bclass == null ? null : bclass.trim();
    }

    public String getSclass() {
        return sclass;
    }

    public void setSclass(String sclass) {
        this.sclass = sclass == null ? null : sclass.trim();
    }

    public String getCclass() {
        return cclass;
    }

    public void setCclass(String cclass) {
        this.cclass = cclass;
    }

    public String getMphoto() {
        return mphoto;
    }

    public void setMphoto(String mphoto) {
        this.mphoto = mphoto == null ? null : mphoto.trim();
    }

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign == null ? null : sign.trim();
    }

    public String getExp() {
        return exp;
    }

    public void setExp(String exp) {
        this.exp = exp;
    }

    public List<Babysize> getBabysize() {
        return babysize;
    }

    public void setBabysize(List<Babysize> bsid) {
        this.babysize = bsid;
    }

    public String getHephoto() {
        return hephoto;
    }

    public void setHephoto(String hephoto) {
        this.hephoto = hephoto;
    }

    public String getExtext() {
        return extext;
    }

    public void setExtext(String extext) {
        this.extext = extext;
    }
}