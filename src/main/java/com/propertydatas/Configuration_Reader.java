package com.propertydatas;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;

public class Configuration_Reader {
	public static Properties p;

	public Configuration_Reader() throws Throwable {
		File f = new File(
				"C:\\Users\\Ramachandran\\eclipse-workspace\\Adactin_Cucumber_SetUp\\src\\main\\java\\com\\propertyfile\\Configuration.properties");
		FileInputStream fis = new FileInputStream(f);
		p = new Properties();
		p.load(fis);
	}

	public String getUrl() {
		String url = p.getProperty("url");
		return url;
	}
	public String getUserName() {
		String username = p.getProperty("username");
		return username;
	}
	public String getPassword() {
		String password = p.getProperty("password");
		return password;
	}
	public String getLocation() {
		String location = p.getProperty("location");
		return location;
	}
	public String getHotel() {
		String hotel = p.getProperty("hotel");
		return hotel;
	}
	public String getRtype() {
		String rtype = p.getProperty("rtype");
		return rtype;
		
	}
	public String getRono() {
		String rono = p.getProperty("rono");
		return rono;
		
	}
	public String getCkInDate() {
		String ckInDate = p.getProperty("ckInDate");
		return ckInDate;
	}
	public String getCkOutDate() {
		String ckOutDate = p.getProperty("ckOutDate");
		return ckOutDate;
		
	}
	public String getAroom() {
		String aroom = p.getProperty("aroom");
		return aroom;
	}
	public String getCroom() {
		String croom = p.getProperty("croom");
		return croom;
	}
	public String getFirstName() {
		String firstName = p.getProperty("firstName");
		return firstName;
	}
	public String getLastName() {
		String lastName = p.getProperty("lastName");
		return lastName;
	}
	public String getAddress() {
		String address = p.getProperty("address");
		return address;
	}
	public String getccNos() {
		String ccNos = p.getProperty("ccNos");
		return ccNos;
	}
	public String getccType() {
		String ctype = p.getProperty("ctype");
		return ctype;
	}
	public String getMonth() {
		String month = p.getProperty("month");
		return month;
	}
	public String getYear() {
		String year = p.getProperty("year");
		return year;
	}
	public String getCvvNo() {
		String cvvno = p.getProperty("cvvno");
		return cvvno;
	}
}
