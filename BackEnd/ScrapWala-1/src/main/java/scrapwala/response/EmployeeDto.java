package scrapwala.response;

import scrapwala.entities.ScrapProduct;

public class EmployeeDto {

	private int employeeId;	
	private String firstName;
	private String lastName;
	private String field;
	private String contact;

	private ScrapProduct scrapProduct;

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public ScrapProduct getScrapProduct() {
		return scrapProduct;
	}

	public void setScrapProduct(ScrapProduct scrapProduct) {
		this.scrapProduct = scrapProduct;
	}

	public EmployeeDto(int employeeId, String firstName, String lastName, String field, String contact,
			ScrapProduct scrapProduct) {
		super();
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.field = field;
		this.contact = contact;
		this.scrapProduct = scrapProduct;
	}

	public EmployeeDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}
