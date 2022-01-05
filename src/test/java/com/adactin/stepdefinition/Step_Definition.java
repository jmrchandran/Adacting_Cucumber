package com.adactin.stepdefinition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import com.Adactin_Hotel_App.BaseClass;
import com.adactin.runner.Runner_Cucumber_Class;
import com.pomanager.Page_Object_Manager;
import com.propertydatas.Configuration_Reader;
import com.propertydatas.FileReaderManager;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends BaseClass{
	
	public static WebDriver driver = Runner_Cucumber_Class.driver;
	public static Page_Object_Manager pom = new Page_Object_Manager(driver);
	
	@Before
	public void beforeHooks(Scenario s) {
		String name = s.getName();
		System.out.println("Scenario Started: "+name);
	}
	@After
	public void afterHooks(Scenario s) throws Throwable {
		if(s.isFailed()) {
			takesscreenshot("C:\\Users\\Ramachandran\\eclipse-workspace\\Adactin_Cucumber_SetUp\\Screenshot");
		}
		String status = s.getStatus();
		System.out.println("Status: "+status);

	}
	@Given("^user Launch The Browser$")
	public void user_Launch_The_Browser() throws Throwable {
		String url = FileReaderManager.getInstanceFRM().getInstanceCR().getUrl();
		url(url);
	
		
	}

	@When("^user Enter \"([^\"]*)\" The User Name$")
	public void user_Enter_The_User_Name(String username) throws Throwable {
		inputValueElement(pom.setInstanceLp().getUsername(), username);

	}

	@When("^user Enter \"([^\"]*)\" The Password$")
	public void user_Enter_The_Password(String password) throws Throwable {
		inputValueElement(pom.setInstanceLp().getPassword(), password);
	}
	
	@Then("^user Click The Login Button$")
	public void user_Click_The_Login_Button() throws Throwable {
		clickOnElement(pom.setInstanceLp().getLogin());
	}

	@When("^user Select A Location$")
	public void user_Select_A_Location() throws Throwable {
	String location = FileReaderManager.getInstanceFRM().getInstanceCR().getLocation();
	dropdown("index", pom.setInstanceSh().getLocation(), location);
	}

	@When("^user Select A Hotel$")
	public void user_Select_A_Hotel() throws Throwable {
		String hotel = FileReaderManager.getInstanceFRM().getInstanceCR().getHotel();
		dropdown("text", pom.setInstanceSh().getHotels(), hotel);
		
	}

	@When("^user Select A Room Type$")
	public void user_Select_A_Room_Type() throws Throwable {
		String rtype = FileReaderManager.getInstanceFRM().getInstanceCR().getRtype();
		dropdown("value", pom.setInstanceSh().getrType(), rtype);
	}

	@When("^user Choose The Number Of Rooms$")
	public void user_Choose_The_Number_Of_Rooms() throws Throwable {
		String rono = FileReaderManager.getInstanceFRM().getInstanceCR().getRono();
		dropdown("index", pom.setInstanceSh().getRnos(), rono);
		
	}

	@When("^user Enter Check In Date$")
	public void user_Enter_Check_In_Date() throws Throwable {
		String ckInDate = FileReaderManager.getInstanceFRM().getInstanceCR().getCkInDate();
		inputValueElement(pom.setInstanceSh().getInDate(), ckInDate);
	}

	@When("^user Enter Check Out Date$")
	public void user_Enter_Check_Out_Date() throws Throwable {
		String ckOutDate = FileReaderManager.getInstanceFRM().getInstanceCR().getCkOutDate();
		inputValueElement(pom.setInstanceSh().getOutDate(), ckOutDate);
		}

	@When("^user Select Adults Per Room$")
	public void user_Select_Adults_Per_Room() throws Throwable {
		String aroom = FileReaderManager.getInstanceFRM().getInstanceCR().getAroom();
		dropdown("index", pom.setInstanceSh().getAdultRoom(), aroom);
	}

	@When("^user Select Childs Per Room$")
	public void user_Select_Childs_Per_Room() throws Throwable {
		String croom = FileReaderManager.getInstanceFRM().getInstanceCR().getCroom();
		dropdown("index", pom.setInstanceSh().getChildRoom(), croom);
		}

	@Then("^user Click On Search Button$")
	public void user_Click_On_Search_Button() throws Throwable {
		clickOnElement(pom.setInstanceSh().getSubmt());
		implicitwait(5, TimeUnit.SECONDS);
	}

	@When("^user Click Radio Button$")
	public void user_Click_Radio_Button() throws Throwable {
		clickOnElement(pom.setInstanceVb().getSelectHotel());
	}

	@Then("^user Click The Enter Button$")
	public void user_Click_The_Enter_Button() throws Throwable {
		clickOnElement(pom.setInstanceVb().getCont());
		implicitwait(5, TimeUnit.SECONDS);
	}

	@When("^user Enter The First Name$")
	public void user_Enter_The_First_Name() throws Throwable {
		String firstName = FileReaderManager.getInstanceFRM().getInstanceCR().getFirstName();
		inputValueElement(pom.setInstanceBn().getfName(), firstName);
	}

	@When("^user Enter The Last Name$")
	public void user_Enter_The_Last_Name() throws Throwable {
		String lastName = FileReaderManager.getInstanceFRM().getInstanceCR().getLastName();
		inputValueElement(pom.setInstanceBn().getlName(), lastName);
	}

	@When("^user Enter The Billing Address$")
	public void user_Enter_The_Billing_Address() throws Throwable {
		String address = FileReaderManager.getInstanceFRM().getInstanceCR().getAddress();
		inputValueElement(pom.setInstanceBn().getAddress(), address);
	}

	@When("^user Enter The CC Number$")
	public void user_Enter_The_CC_Number() throws Throwable {
		String getccNos = FileReaderManager.getInstanceFRM().getInstanceCR().getccNos();
		inputValueElement(pom.setInstanceBn().getCcNo(), getccNos);
	}

	@When("^user Select The CC Type$")
	public void user_Select_The_CC_Type() throws Throwable {
		String getccType = FileReaderManager.getInstanceFRM().getInstanceCR().getccType();
		dropdown("index", pom.setInstanceBn().getCcType(), getccType);
	}

	@When("^user Select Expiry Month$")
	public void user_Select_Expiry_Month() throws Throwable {
		String month = FileReaderManager.getInstanceFRM().getInstanceCR().getMonth();
		dropdown("index", pom.setInstanceBn().getExpMonth(), month);
	}

	@When("^user Select Expiry Year$")
	public void user_Select_Expiry_Year() throws Throwable {
		String year = FileReaderManager.getInstanceFRM().getInstanceCR().getYear();
		dropdown("index", pom.setInstanceBn().getCcExpYear(), year);
	}

	@When("^user Enter CVV No$")
	public void user_Enter_CVV_No() throws Throwable {
		String cvvNo = FileReaderManager.getInstanceFRM().getInstanceCR().getCvvNo();
		inputValueElement(pom.setInstanceBn().getCvv(), cvvNo);
	}

	@Then("^user Click The Book Now Button$")
	public void user_Click_The_Book_Now_Button() throws Throwable {
		clickOnElement(pom.setInstanceBn().getBookNow());
		implicitwait(5, TimeUnit.SECONDS);
	}

	@Then("^user Click The Logout Button$")
	public void user_Click_The_Logout_Button() throws Throwable {
		scroll("scrollBy", "window.scrollBy(0,500);", null);
		takesscreenshot("C:\\Users\\Ramachandran\\eclipse-workspace\\Adactin_Cucumber_SetUp\\Screenshot\\image1.png");
		clickOnElement(pom.setInstanceBc().getLogOut());
	}


	
}
