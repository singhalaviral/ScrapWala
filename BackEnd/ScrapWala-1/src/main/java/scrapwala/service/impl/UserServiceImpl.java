package scrapwala.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import scrapwala.entities.User;
import scrapwala.exception.ResourceNotFoundException;
import scrapwala.repositories.UserRepository;
import scrapwala.response.AdminDto;
import scrapwala.response.UserDto;
import scrapwala.service.UserService;

@Service
@Component
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ModelMapper modelmapper;
	
//	public ModelMapper getModelmapper() {
//		return modelmapper;
//	}
	public void setModelmapper(ModelMapper modelmapper) {
		this.modelmapper = modelmapper;
	}
	public UserServiceImpl(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	@Override
	public UserDto saveUser(UserDto userDto) {
		
		User us = this.dtoToUser(userDto);
		User saveuser = this.userRepository.save(us);
		return this.userToDto(saveuser);
	}
	@Override
	public List<UserDto> getAllUsers() {
		List<User> users = this.userRepository.findAll();
		List<UserDto> userdto = users.stream().map(user-> this.userToDto(user)).collect(Collectors.toList());
		return userdto;
	}
	@Override
	public UserDto getUserById(int id) {
		
		User user =this.userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User", "id", id));
		return this.userToDto(user);
	}
	@Override
	public UserDto updateUser(UserDto userdto, int id) {
		User user = this.userRepository.findById(id).orElseThrow();
		
		user.setName(userdto.getName());
		
		user.setMobileNumber(userdto.getMobileNumber());
		
		user.setPincode(userdto.getPincode());
		
		user.setEmail(userdto.getEmail());
		User updateUser = this.userRepository.save(user);
		UserDto userdto1 = this.userToDto(updateUser);
		return userdto1;	
	}
	@Override
	public void deleteUser(int id) {
		User user=this.userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User", "id", id));	
		this.userRepository.delete(user);	
	}
	public User dtoToUser(UserDto userDto) {
		User user = this.modelmapper.map(userDto, User.class);
		return user;
	}
	public UserDto userToDto(User user) {
		UserDto userDto =this.modelmapper.map(user, UserDto.class);
		return userDto;
	}
	@Override
	public AdminDto saveAdmin(UserDto userDto) {
		// TODO Auto-generated method stub
		return null;
	}

}
