package com.example.nopcommerce.assignment;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class NopCommercePage {
    protected WebDriver driver;

    @FindBy(css = ".ico-register")
    private WebElement registerIcon;

    @FindBy(id = "gender-male")
    private WebElement maleRadioButton;
    @FindBy(id = "gender-female")
    private WebElement femaleRadioButton;

    @FindBy(id = "FirstName")
    private WebElement firstname;
    @FindBy(id = "LastName")
    private WebElement lastname;

    @FindBy(name = "DateOfBirthDay")
    private WebElement ddlDay;
    @FindBy(name = "DateOfBirthMonth")
    private WebElement ddlMonth;
    @FindBy(name = "DateOfBirthYear")
    private WebElement ddlYear;
    @FindBy(id = "Email")
    private WebElement email;

    @FindBy(id = "Company")
    private WebElement companyDetails;

    @FindBy(id = "Newsletter")
    private WebElement newsLetter;

    @FindBy(id = "Password")
    private WebElement password;
    @FindBy(id = "ConfirmPassword")
    private WebElement confirmPassword;

    @FindBy(id = "register-button")
    private WebElement registerButton;

    public NopCommercePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void open(){
        driver.navigate().to("https://demo.nopcommerce.com");
        registerIcon.click();
    }

    public void fillNameGenderInfo(String gender, String firstname, String lastname) {
        switch (gender) {
            case "male":
                maleRadioButton.click();
                break;
            case "female":
                femaleRadioButton.click();
                break;
            default:
                break;
        }

        this.firstname.sendKeys(firstname);
        this.lastname.sendKeys(lastname);
    }

    public void fillDob(String day, String month, String year) {
        Select dayDropDown = new Select(ddlDay);
        dayDropDown.selectByValue(day);

        Select monthDropDown = new Select(ddlMonth);
        monthDropDown.selectByValue(month);

        Select yearDropDown = new Select(ddlYear);
        yearDropDown.selectByValue(year);
    }

    public void fillEmail(String email) {
        this.email.sendKeys(email);
    }

    public void fillCompanyDetails(String company) {
        this.companyDetails.sendKeys(company);
    }

    public void registerForNewsLetter(boolean register) {
        if (register) {
            this.newsLetter.click();
        }
    }

    public void fillPassword(String password) {
        this.password.sendKeys(password);
        this.confirmPassword.sendKeys(password);
    }

    public RegisterResultPage register(){
        this.registerButton.click();
        return new RegisterResultPage(driver);
    }


    public void close() {
        this.driver.close();
    }
}
