package scrapwala.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import scrapwala.entities.Login;
import scrapwala.services.Login_Service;
@RestController
@RequestMapping("/login")
public class LoginController {
	@Autowired
	private Login_Service loginService;
	//get Logins
	@GetMapping 
	public List<Login> getLogin()
	{
		return this.loginService.getLogin();
	}
	//creating Logins rest-api 
	@PostMapping
	public ResponseEntity<Login> addLogin(@RequestBody Login login) {
		return new ResponseEntity<Login>(HttpStatus.CREATED);	
	}
}
