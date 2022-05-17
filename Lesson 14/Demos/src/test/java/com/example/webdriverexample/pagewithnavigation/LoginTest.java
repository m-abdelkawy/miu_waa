package com.example.webdriverexample.pagewithnavigation;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginTest {
    private static LoginPage loginPage;
    private static WelcomePage welcomePage;

    @BeforeClass
    public static void setup(){
        System.setProperty("webdriver.chrome.driver"
        ,"C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");

        WebDriver driver = new ChromeDriver(options);

        loginPage = new LoginPage(driver);

        loginPage.open();
    }

    @AfterClass
    public static void clean(){
        loginPage.close();
    }

    @Test
    public void testLoginPage(){
        loginPage.enterName("Ahmed", "ALi");
        loginPage.enterAddress("iowa city", "52555");

        welcomePage = loginPage.submit();

        welcomePage.verifyHeaderMessage("Thank you!");
    }
}
