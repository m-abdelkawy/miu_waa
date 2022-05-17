package com.example.simplecalcwithnavigationtest.assignment;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CalculatorPage {
    protected WebDriver driver;

    public CalculatorPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(name = "first")
    private WebElement first;
    @FindBy(name = "second")
    private WebElement second;
    @FindBy(name = "add")
    private WebElement addButton;
    @FindBy(name = "subtract")
    private WebElement subtractButton;
    @FindBy(name = "multiply")
    private WebElement multiplyButton;

    public ResultPage performCalculation(String first, String second, String operator){
        this.first.sendKeys(first);
        this.second.sendKeys(second);
        switch (operator){
            case "add":
                addButton.click();
                break;
            case "subtract":
                subtractButton.click();
                break;
            case "multiply":
                multiplyButton.click();
                break;
            default:
                break;
        }

        return new ResultPage(driver);
    }

    public void open() {
        driver.navigate().to("http://localhost:3000/");
    }

    public void close() {
        driver.close();
    }
}
