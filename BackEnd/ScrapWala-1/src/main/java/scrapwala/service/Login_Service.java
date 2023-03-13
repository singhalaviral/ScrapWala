package scrapwala.service;

import java.util.List;

import scrapwala.entities.Login;
import scrapwala.response.LoginDto;

public interface Login_Service {
	
	public LoginDto saveLogin(LoginDto loginDto);
	public List<LoginDto> getAllLogins();
	public LoginDto getLoginById(int id);
	public LoginDto updateLogin(LoginDto loginDto, int id);
	public void deleteLogin(int id);
	public List<Login> getLogin();

}
