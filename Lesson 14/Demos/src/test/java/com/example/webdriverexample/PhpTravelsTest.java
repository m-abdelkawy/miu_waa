package com.example.webdriverexample;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertTrue;

public class PhpTravelsTest {
    private WebDriver driver;

    @Test
    public void testCustom1() {
        System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        driver = new ChromeDriver();

        driver.navigate().to("file:///D:/demo/index.html");

        List<WebElement> lstElement = driver.findElements(By.tagName("a"));

        assertThat(lstElement.size(), equalTo(2));

        for (WebElement elm : lstElement) {
            System.out.println(elm.getAttribute("href"));
        }

        driver.quit();
    }

    @Test
    public void testCustom2() {
        System.setProperty("webdriver.chrome.driver"
                , "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        driver = new ChromeDriver();

        driver.navigate().to("file:///D:/demo/index.html");

        WebElement emailField = driver.findElement(By.cssSelector("input#email"));

        emailField.sendKeys("mohammed@gmail.com");

        System.out.println("Text: " + emailField.getAttribute("value"));

        WebElement nameField = driver.findElement(By.cssSelector("input.name"));
        nameField.sendKeys("Mohammed Abdelkawy");
        System.out.println(nameField.getAttribute("value"));

        assertThat(emailField.getAttribute("value"), is("mohammed@gmail.com"));
        assertThat(nameField.getAttribute("value"), is("Mohammed Abdelkawy"));

        driver.quit();
    }

    @Test
    public void testCustom3() {
        System.setProperty("webdriver.chrome.driver",
                "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        driver = new ChromeDriver();

        driver.navigate().to("file:///D:/demo/index.html");

        WebElement fullnameField = driver.findElement(By.cssSelector("input[name=fullname]"));

        fullnameField.sendKeys("Mohammed Abdelkawy");

        System.out.println("Full name: " + fullnameField.getAttribute("value"));

        assertThat(fullnameField.getAttribute("value"), is("Mohammed Abdelkawy"));

        driver.quit();
    }

    @Test
    public void testCustom4() {
        System.setProperty("webdriver.chrome.driver",
                "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        driver = new ChromeDriver();

        driver.navigate().to("file:///D:/demo/index.html");

        WebElement titleElm = driver.findElement(By.tagName("h2"));

        assertThat(titleElm.getText(), is("Newsletter"));

        driver.quit();
    }

    @Test
    public void testCustom5() {
        System.setProperty("webdriver.chrome.driver",
                "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        driver = new ChromeDriver();

        driver.navigate().to("file:///D:/demo/index.html");

        Select dropDown = new Select(driver.findElement(By.id("mySelect")));

        dropDown.selectByVisibleText("Italy");

        WebElement selection = dropDown.getFirstSelectedOption();

        assertThat(selection.getText(), is("Italy"));
    }

    @Test
    public void testCustom6() {
        System.setProperty("webdriver.chrome.driver",
                "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        driver = new ChromeDriver();

        driver.navigate().to("file:///D:/demo/index.html");

        Select dropDown = new Select(driver.findElement(By.id("mySelect")));

        dropDown.selectByVisibleText("Italy");
        assertThat(dropDown.getFirstSelectedOption().getText(), is("Italy"));


        dropDown.selectByIndex(0);
        assertThat(dropDown.getFirstSelectedOption().getText(), is("France"));

        dropDown.selectByValue("option3");
        assertThat(dropDown.getFirstSelectedOption().getText(), is("Spain"));


        driver.quit();
    }

    @Test
    public void testCustom7() {
        System.setProperty("webdriver.chrome.driver",
                "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        driver = new ChromeDriver();

        driver.navigate().to("file:///D:/demo/index.html");

        Select multiSelect = new Select(driver.findElement(By.id("mySelect2")));

        multiSelect.selectByVisibleText("Italy");
        assertThat(multiSelect.getFirstSelectedOption().getText(), is("Italy"));

        multiSelect.selectByValue("option1");
        assertThat(multiSelect.getFirstSelectedOption().getText(), is("France"));

        multiSelect.deselectAll();
        assertThat(multiSelect.getAllSelectedOptions().size(), is(0));
    }

    @Test
    public void testCheckBoxandRadioButton() {
        System.setProperty("webdriver.chrome.driver"
                , "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        driver = new ChromeDriver();

        driver.navigate().to("file:///D:/demo/rbandcb.html");

        WebElement languageCheckbox = driver.findElement(By.name("option-1"));

        languageCheckbox.click();

        assertThat(languageCheckbox.getAttribute("value"), is("Java"));
        assertTrue(languageCheckbox.isSelected());
        assertTrue(languageCheckbox.isDisplayed());
        assertTrue(languageCheckbox.isEnabled());

        WebElement activityRadioBtn = driver.findElement(By.xpath("//input[@value='Testing']"));
        //WebElement activityRadioBtn = driver.findElement(By.name("group-1"));
        activityRadioBtn.click();
        assertThat(activityRadioBtn.getAttribute("value"), is("Testing"));
        assertTrue(activityRadioBtn.isSelected());
    }

    @Test
    public void testRbandCb() {
        System.setProperty("webdriver.chrome.driver"
                , "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        driver = new ChromeDriver();

        driver.navigate().to("file:///D:/demo/rbandcb.html");

        List<WebElement> lstElement = driver.findElements(By.tagName("input"));

        for (WebElement element : lstElement) {
            if (element.getAttribute("type").trim().equalsIgnoreCase("checkbox")) {
                System.out.println("Checkbox: " + element.getAttribute("value").trim());
            }
            if (element.getAttribute("type").trim().equalsIgnoreCase("radio")) {
                System.out.println("Radio: " + element.getAttribute("value").trim());
            }
        }

        assertThat(lstElement.size(), is(7));
    }

    @Test
    public void testTable() {
        System.setProperty("webdriver.chrome.driver",
                "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");

        driver = new ChromeDriver();

        driver.navigate().to("file:///D:/demo/table.html");

        WebElement tablefield = driver.findElement(By.xpath("//table/tbody/tr[1]/td[1]"));

        assertThat(tablefield.getText(), is("cell one"));

        tablefield = driver.findElement(By.xpath("//table/tbody/tr[2]/td[2]"));

        assertThat(tablefield.getText(), is("cell four"));

        driver.quit();
    }

}
