package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.Adactin_Hotel_App.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\features\\AdactingFeature.feature" , 
glue = "com.adactin.stepdefinition", monochrome = true, dryRun = false, strict = true, 
		plugin =  {
				"html:Report/Html_Report" ,
				//"pretty" , //console
				 "json:Reports/JsonReport.json" ,
				 "com.cucumber.listener.ExtentCucumberFormatter:ExtentReport/ExtentReport.html"
		})
public class Runner_Cucumber_Class {
	public static WebDriver driver;
	
	@BeforeClass
	public static void set_Up() {
		driver = BaseClass.getBrowser("chrome");
		
	}
	@AfterClass
	public static void tear_Down() {
		driver.close();
	}
}
