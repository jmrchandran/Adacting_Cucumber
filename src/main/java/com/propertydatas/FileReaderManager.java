package com.propertydatas;

public class FileReaderManager {

	private FileReaderManager() {

	}

	public static FileReaderManager getInstanceFRM() {
		FileReaderManager frm = new FileReaderManager();
		return frm;

	}

	public Configuration_Reader getInstanceCR() throws Throwable {
		Configuration_Reader cr = new Configuration_Reader();
		return cr;
	}

}
