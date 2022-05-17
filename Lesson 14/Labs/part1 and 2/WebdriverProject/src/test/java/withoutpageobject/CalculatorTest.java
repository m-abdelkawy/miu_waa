package withoutpageobject;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class CalculatorTest {
	private WebDriver driver;

	@Before
	public void createWebDriver() {
		// set path to chromedriver.exe
		System.setProperty("webdriver.chrome.driver",
				"C:\\Program Files\\chromedriver_win32\\chromedriver.exe");
		// create chrome instance
		driver = new ChromeDriver();
	}

	@After
	public void closeWebDriver() {
		driver.close();
	}

	@Test
	public void oneAndFour() {
		driver.navigate().to("http://www.rekenmachine-calculator.nl/");

		WebElement button = driver.findElement(By.name("one"));
		button.click();
		button = driver.findElement(By.name("add"));
		button.click();
		button = driver.findElement(By.name("four"));
		button.click();
		assertThat(driver.findElement(By.name("txt")).getAttribute("value"), is("1+4"));
		button = driver.findElement(By.name("equal"));
		button.click();
		assertThat(driver.findElement(By.name("txt")).getAttribute("value"), is("5"));
	}

	@Test
	public void testTwoPlusEight(){
		driver.navigate().to("http://www.rekenmachine-calculator.nl/");
		WebElement buttonTwo = driver.findElement(By.name("two"));
		buttonTwo.click();

		WebElement buttonAdd = driver.findElement(By.name("add"));
		buttonAdd.click();

		WebElement buttonEight  = driver.findElement(By.name("eight"));
		buttonEight.click();

		WebElement resultField = driver.findElement(By.name("txt"));
		assertThat(resultField.getAttribute("value"), is("2+8"));

		WebElement equalButton = driver.findElement(By.name("equal"));
		equalButton.click();
		assertThat(resultField.getAttribute("value"), is("10"));
	}

	@Test
	public void testTwoMultipliedBySix(){
		driver.navigate().to("http://www.rekenmachine-calculator.nl/");

		WebElement twoButton = driver.findElement(By.name("two"));
		twoButton.click();

		WebElement multiplyButton = driver.findElement(By.name("mul"));
		multiplyButton.click();

		WebElement sixButton = driver.findElement(By.name("six"));
		sixButton.click();

		WebElement resultField = driver.findElement(By.name("txt"));

		assertThat(resultField.getAttribute("value"), is("2*6"));

		WebElement equalButton  = driver.findElement(By.name("equal"));
		equalButton.click();
		assertThat(resultField.getAttribute("value"), is("12"));

	}
}
