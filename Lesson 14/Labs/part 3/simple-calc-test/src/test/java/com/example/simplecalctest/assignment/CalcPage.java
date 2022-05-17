package com.example.simplecalctest.assignment;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import javax.naming.Name;

public class CalcPage {
    protected WebDriver driver;

    public CalcPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(name = "first")
    private WebElement first;
    @FindBy(name = "second")
    private WebElement second;
    @FindBy(name = "operator")
    private WebElement operator;
    @FindBy(name = "result")
    private WebElement resultField;
    @FindBy(name = "submit")
    private WebElement buttonSubmit;

    public String setCalcParams(String first, String second, String operator) {
        this.clearFields();

        this.first.sendKeys(first);
        this.second.sendKeys(second);
        Select dropDownOperator = new Select(this.operator);

        dropDownOperator.selectByValue(operator);

        buttonSubmit.click();

        return getResult();
    }

    private void clearFields() {
        this.first.clear();
        this.second.clear();
        driver.navigate().refresh();
    }

    private String getResult() {
        return resultField.getText();
    }

    public void open() {
        driver.navigate().to("http://localhost:3000/");
    }

    public void close() {
        driver.close();
    }
}
