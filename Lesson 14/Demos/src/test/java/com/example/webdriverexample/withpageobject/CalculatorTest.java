package com.example.webdriverexample.withpageobject;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CalculatorTest {
    private static CalculatorPage page;

    @BeforeClass
    public static void openTheBrowser() {
        System.setProperty("webdriver.chrome.driver",
                "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        WebDriver driver = new ChromeDriver();

        page = new CalculatorPage(driver);

        page.open();
    }

    @AfterClass
    public static void closeTheBrowser(){
        page.close();
    }

    @Test
    public void testOneAndFour(){
        page.clickOne();
        page.clickAdd();
        page.clickFour();
        page.verifyCalculatorResult("1+4");
        page.clickEqual();
        page.verifyCalculatorResult("5");
    }
}
