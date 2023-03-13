package scrapwala.response;


public class UserDto {

	private int userId;
	
	private String name;

	private String mobileNumber;
	private String email;
	private int pincode;
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	
	public UserDto(int userId, String name, String mobileNumber, String email, int pincode
			) {
		super();
		this.userId = userId;
		this.name = name;
		this.mobileNumber = mobileNumber;
		this.email = email;
		this.pincode = pincode;
		
	}
	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}


}
