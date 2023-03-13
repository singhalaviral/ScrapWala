package scrapwala.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import scrapwala.response.UserDto;
import scrapwala.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController<ApiResponce> {
	@Autowired
	private UserService userService;
	@Autowired
	public  UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	public UserController() {
		super();
		// TODO Auto-generated constructor stub
	}
	//creating user rest api
	@PostMapping
	public ResponseEntity<UserDto> saveUser( @RequestBody UserDto userDto){
		UserDto saveuserdto = this.userService.saveUser(userDto);
		return new ResponseEntity<>(saveuserdto, HttpStatus.CREATED);
	}
	//creating get all user rest api
	//http://localhost/api/admin
	@GetMapping
	public ResponseEntity<List<UserDto>> getAllUsers() {
		return ResponseEntity.ok(this.userService.getAllUsers());
	}
	//build get employee by id rest api
	//http://localhost/user/6
	@GetMapping("{id}")
	public ResponseEntity<UserDto> getUserById(@PathVariable("id") int userId) {
			return ResponseEntity.ok(this.userService.getUserById(userId));
	}
	//update user rest api
	//http://localhost/user/1
	@PutMapping("{id}")
	public ResponseEntity<UserDto> updateUser(@PathVariable("id") int id, @RequestBody UserDto userDto) {
		
		UserDto updateUser = this.userService.updateUser(userDto, id);
		return ResponseEntity.ok(updateUser);
	}
	//build delete controller rest api
	//http://localhost/user/1
	@DeleteMapping("{id}")
	public ResponseEntity<ApiResponce> deleteUser(@PathVariable("id") int id) {
		userService.deleteUser(id);
		this.userService.deleteUser(id);
//		return new ResponseEntity<ApiResponce>(new ApiResponce("User Deleted successfully",true), HttpStatus.OK);
		return null;
		}
}
