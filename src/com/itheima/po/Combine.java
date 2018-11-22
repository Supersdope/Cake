package com.itheima.po;

public class Combine {
    private Baby baby;
    private Page page;

    public Baby getBaby() {
        return baby;
    }

    public void setBaby(Baby baby) {
        this.baby = baby;
    }

    public Page getPage() {
        return page;
    }

    public void setPage(Page page) {
        this.page = page;
    }

    public Combine(Baby baby, Page page){
        this.baby = baby;
        this.page = page;
    }
}
