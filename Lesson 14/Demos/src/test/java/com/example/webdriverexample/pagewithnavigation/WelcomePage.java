package com.example.webdriverexample.pagewithnavigation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.*;

public class WelcomePage {
    protected WebDriver driver;

    public WelcomePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(tagName = "h1")
    private WebElement header;

    private String getHeader(){
        return this.header.getText();
    }

    public void verifyHeaderMessage(String string){
        assertThat(getHeader(), is(string));
    }
}
