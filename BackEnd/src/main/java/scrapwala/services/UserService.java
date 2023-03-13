package scrapwala.services;


import java.util.List;

import scrapwala.response.UserDto;
public interface UserService  {
	public UserDto saveUser(UserDto userDto);
	public List<UserDto> getAllUsers();
	public UserDto getUserById(int id);
	public void deleteUser(int id);
	public UserDto updateUser(UserDto userdto, int id);
}
