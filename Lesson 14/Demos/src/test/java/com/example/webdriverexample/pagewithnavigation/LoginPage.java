package com.example.webdriverexample.pagewithnavigation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    protected WebDriver driver;

    public LoginPage(WebDriver driver) {
        this.driver = driver;

        PageFactory.initElements(driver, this);
    }

    @FindBy(how = How.ID, using = "firstname")
    private WebElement firstname;
    @FindBy(id = "lastname")
    private WebElement lastname;
    @FindBy(id = "address")
    private WebElement address;
    @FindBy(id = "address")
    private WebElement zipcode;
    @FindBy(id = "signup")
    private WebElement signupButton;

    public void enterName(String firstname, String lastname){
        this.firstname.clear();
        this.firstname.sendKeys(firstname);

        this.lastname.clear();
        this.lastname.sendKeys(lastname);
    }

    public void enterAddress(String address, String zipcode){
        this.address.clear();
        this.address.sendKeys(address);

        this.zipcode.clear();
        this.zipcode.sendKeys(zipcode);
    }

    public WelcomePage submit(){
        this.signupButton.click();
        return new WelcomePage(driver);
    }

    public void open() {
        driver.navigate().to("https://www.kimschiller.com/page-object-pattern-tutorial/");
    }

    public void close() {
        driver.close();
    }
}
