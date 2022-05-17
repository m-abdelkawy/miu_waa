package com.example.webdriverexample.withoutpageobject;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.*;

public class CalculatorTest {
    private WebDriver driver;

    @Before
    public void setup(){
        System.setProperty("webdriver.chrome.driver",
                "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        driver = new ChromeDriver();
    }

    @Test
    public void testOneFour() {
        driver.navigate().to("http://www.rekenmachine-calculator.nl/");

        WebElement oneBtn = driver.findElement(By.name("one"));
        oneBtn.click();

        WebElement addBtn = driver.findElement(By.name("add"));
        addBtn.click();

        WebElement fourBtn = driver.findElement(By.name("four"));
        fourBtn.click();

        WebElement txtBox = driver.findElement(By.name("txt"));

        assertThat(txtBox.getAttribute("value"), is("1+4"));

        WebElement equalBtn = driver.findElement(By.name("equal"));
        equalBtn.click();

        assertThat(txtBox.getAttribute("value"), is("5"));
    }

    @Test
    public void testTwoAndEight(){
        driver.navigate().to("http://www.rekenmachine-calculator.nl/");

        WebElement twoBtn = driver.findElement(By.name("two"));
        twoBtn.click();

        WebElement addBtn = driver.findElement(By.name("add"));
        addBtn.click();

        WebElement eightBtn = driver.findElement(By.name("eight"));
        eightBtn.click();

        WebElement txtbox = driver.findElement(By.name("txt"));
        assertThat(txtbox.getAttribute("value"), is("2+8"));

        WebElement equalBtn = driver.findElement(By.name("equal"));
        equalBtn.click();

        assertThat(txtbox.getAttribute("value"), is("10"));
    }

    @After
    public void clean(){
        driver.quit();
    }
}
