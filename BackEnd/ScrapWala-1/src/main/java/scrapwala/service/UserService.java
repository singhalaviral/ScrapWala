package scrapwala.service;

import java.util.List;

import scrapwala.response.AdminDto;
import scrapwala.response.UserDto;
public interface UserService  {
	public UserDto saveUser(UserDto userDto);
	public List<UserDto> getAllUsers();
	public UserDto getUserById(int id);
	public void deleteUser(int id);
	AdminDto saveAdmin(UserDto userDto);
	public UserDto updateUser(UserDto userdto, int id);
}
