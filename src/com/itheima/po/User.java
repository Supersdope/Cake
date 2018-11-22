package com.itheima.po;

public class User {
    private Integer userid;

    private String uemail;

    private String uname;

    private String upassword;

    private String uquestion;

    private String uanswer;

    private String ubirthday;

    private String res;

    private String res2;

    private String res3;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUemail() {
        return uemail;
    }

    public void setUemail(String uemail) {
        this.uemail = uemail == null ? null : uemail.trim();
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname == null ? null : uname.trim();
    }

    public String getUpassword() {
        return upassword;
    }

    public void setUpassword(String upassword) {
        this.upassword = upassword == null ? null : upassword.trim();
    }

    public String getUquestion() {
        return uquestion;
    }

    public void setUquestion(String uquestion) {
        this.uquestion = uquestion == null ? null : uquestion.trim();
    }

    public String getUanswer() {
        return uanswer;
    }

    public void setUanswer(String uanswer) {
        this.uanswer = uanswer == null ? null : uanswer.trim();
    }

    public String getUbirthday() {
        return ubirthday;
    }

    public void setUbirthday(String ubirthday) {
        this.ubirthday = ubirthday;
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
}