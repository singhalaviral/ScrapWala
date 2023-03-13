package scrapwala.response;

import java.util.List;


public class LoginDto {

	private int id;
	private List<AdminDto> adminDto;
	private List<UserDto> userDto;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public List<AdminDto> getAdminDto() {
		return adminDto;
	}
	public void setAdminDto(List<AdminDto> adminDto) {
		this.adminDto = adminDto;
	}
	public List<UserDto> getUserDto() {
		return userDto;
	}
	public void setUserDto(List<UserDto> userDto) {
		this.userDto = userDto;
	}
	public LoginDto(int id, List<AdminDto> adminDto, List<UserDto> userDto) {
		super();
		this.id = id;
		this.adminDto = adminDto;
		this.userDto = userDto;
	}
	public LoginDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
}
