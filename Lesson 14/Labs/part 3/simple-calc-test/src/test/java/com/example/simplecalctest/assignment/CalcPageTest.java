package com.example.simplecalctest.assignment;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.*;

public class CalcPageTest {
    private static CalcPage calcPage;

    @BeforeClass
    public static void setup() {
        System.setProperty("webdriver.chrome.driver"
                , "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        //ChromeOptions options = new ChromeOptions();
        //options.addArguments("--headless");

        calcPage = new CalcPage(new ChromeDriver(/*options*/));

        calcPage.open();
    }

    @AfterClass
    public static void clean() {
        calcPage.close();
    }

    @Test
    public void testTwoPlusFour() {
        String result = calcPage.setCalcParams("2", "4", "add");
        assertThat(result, is("6"));
    }

    @Test
    public void testTwoMultipliedByEight() {
        String result = calcPage.setCalcParams("2", "8", "multiply");
        assertThat(result, is("16"));
    }

    @Test
    public void testEightDividedByTwo() {
        String result = calcPage.setCalcParams("8", "2", "divide");
        assertThat(result, is("4"));
    }

    @Test
    public void testTenMinusThree() {
        String result = calcPage.setCalcParams("10", "3", "subtract");
        assertThat(result, is("7"));
    }
}
