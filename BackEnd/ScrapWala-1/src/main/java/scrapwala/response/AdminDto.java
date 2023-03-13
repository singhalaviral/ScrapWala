package scrapwala.response;

import java.time.LocalDate;

import javax.persistence.ManyToOne;

import scrapwala.entities.User;


public class AdminDto {

//	
//	private int adminId;
////	@NotBlank
////	@Size(min = 4,max = 25 ,message = "Name should be between 4 to 25 letters")
//	private String adminNamefirst;
////	@NotBlank
////	@Size(min = 4,max = 25,message = "Name should be between 4 to 25 letters")
//	private String adminNamelast;
//	private LocalDate adminLastLogin;
//	


	private int adminId;
	private String adminNameFirst;
	private String adminNameLast;
	private LocalDate adminLastLogin;
//	private UserDto user;
	public int getAdminId() {
		return adminId;
	}
	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}
	public String getAdminNameFirst() {
		return adminNameFirst;
	}
	public void setAdminNameFirst(String adminNameFirst) {
		this.adminNameFirst = adminNameFirst;
	}
	public String getAdminNameLast() {
		return adminNameLast;
	}
	public void setAdminNameLast(String adminNameLast) {
		this.adminNameLast = adminNameLast;
	}
	public LocalDate getAdminLastLogin() {
		return adminLastLogin;
	}
	public void setAdminLastLogin(LocalDate adminLastLogin) {
		this.adminLastLogin = adminLastLogin;
	}
//	public UserDto getUserDto() {
//		return user;
//	}
//	public void setUserDto(UserDto userDto) {
//		this.user = userDto;
//	}
	public AdminDto(int adminId, String adminNameFirst, String adminNameLast, LocalDate adminLastLogin) {
		super();
		this.adminId = adminId;
		this.adminNameFirst = adminNameFirst;
		this.adminNameLast = adminNameLast;
		this.adminLastLogin = adminLastLogin;
//		this.user= userDto;
	}
	public AdminDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
//	public UserDto getUserDto() {
//		return userDto;
//	}
//	public int getAdminId() {
//		return adminId;
//	}
//	public void setAdminId(int adminId) {
//		this.adminId = adminId;
//	}
//	public String getAdminNameFirst() {
//		return adminNameFirst;
//	}
//	public void setAdminNameFirst(String adminNameFirst) {
//		this.adminNameFirst = adminNameFirst;
//	}
//	
//	public String getAdminNameLast() {
//		return adminNameLast;
//	}
//	public void setAdminNameLast(String adminNameLast) {
//		this.adminNameLast = adminNameLast;
//	}
//	public LocalDate getAdminLastLogin() {
//		return adminLastLogin;
//	}
//	public void setAdminLastLogin(LocalDate adminLastLogin) {
//		this.adminLastLogin = adminLastLogin;
//	}
//	public void setUserDto(UserDto userDto) {
//		this.userDto = userDto;
//	}
//	public AdminDto(int adminId, String adminNameFirst, String adminNameLast, LocalDate adminLastLogin,
//			scrapwala.response.UserDto userDto) {
//		super();
//		this.adminId = adminId;
//		this.adminNameFirst = adminNameFirst;
//		this.adminNameLast = adminNameLast;
//		this.adminLastLogin = adminLastLogin;
//		this.userDto = userDto;
//	}
//	public AdminDto() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//
//	
	
}
