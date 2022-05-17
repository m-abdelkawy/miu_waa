package com.example.nopcommerce.assignment;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterResultPage {
    protected WebDriver driver;

    @FindBy(className = "result")
    private WebElement msgDiv;

    public RegisterResultPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public String getResult() {
        return msgDiv.getText();
    }


}
