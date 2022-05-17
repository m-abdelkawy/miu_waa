package com.example.simplecalcwithnavigationtest.assignment;

import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.*;

public class CalculatorTest {
    private static CalculatorPage calculatorPage;
    private static ResultPage resultPage;

    @BeforeClass
    public static void setup() {
        System.setProperty("webdriver.chrome.driver",
                "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");

        calculatorPage = new CalculatorPage(new ChromeDriver(options));
    }

    @Before
    public void openCalcPage(){
        calculatorPage.open();
    }

    @AfterClass
    public static void cleanup() {
        calculatorPage.close();
    }

    @Test
    public void testFivePlusFifteen() {
        resultPage = calculatorPage.performCalculation("5", "15", "add");
        assertThat(resultPage.getResult(), is("20"));
    }

    @Test
    public void testFiveMultipleFour() {
        resultPage = calculatorPage.performCalculation("5", "4", "multiply");
        assertThat(resultPage.getResult(), is("20"));
    }

    @Test
    public void testNineMinusSix() {
        resultPage = calculatorPage.performCalculation("9", "6", "subtract");
        assertThat(resultPage.getResult(), is("3"));
    }
}
