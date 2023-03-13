package scrapwala.response;



public class EmployeeDto {

	private int id;	
	private String firstName;
	private String lastName;
	private String field;
	private String contact;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public EmployeeDto(int id, String firstName, String lastName, String field, String contact) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.field = field;
		this.contact = contact;
	}
	public EmployeeDto() {
		super();
		// TODO Auto-generated constructor stub
	}	
}
