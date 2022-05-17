package com.example.nopcommerce.assignment;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.*;

public class NopCommerceTest {
    private static NopCommercePage nopCommercePage;
    private static RegisterResultPage registerResultPage;

    @BeforeClass
    public static void setup(){
        System.setProperty("webdriver.chrome.driver",
                "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        WebDriver driver = new ChromeDriver();
        nopCommercePage = new NopCommercePage(driver);
        nopCommercePage.open();
    }

    @AfterClass
    public static void cleanup(){
        nopCommercePage.close();
    }

    @Test
    public void testRegister() {
        nopCommercePage.fillNameGenderInfo("male", "Ahmed", "Ali");
        nopCommercePage.fillDob("10", "5", "1987");
        nopCommercePage.fillEmail(createUniqueEmail());
        nopCommercePage.fillCompanyDetails("Aspen Engineering Bureau");
        nopCommercePage.fillPassword("123456");
        registerResultPage =nopCommercePage.register();
        assertThat(registerResultPage.getResult(), is("Your registration completed"));
    }

    // helper methods
    private String createUniqueEmail() {
        String email = "@test.com";
        String name = "frank" + createRandomNumber();
        return name + email;
    }

    private int createRandomNumber() {
        return (int) (Math.random() * 5000 + 1);
    }
}
