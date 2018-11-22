package com.itheima.po;

public class Page {
    private int cpage;
    private int count;

    public int getCpage() {
        return cpage;
    }

    public void setCpage(int cpage) {
        this.cpage = cpage;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public Page(int cpage, int count){
        this.cpage = cpage;
        this.count = count;
    }

    public Page(int count){
        this.count = count;
    }
}
