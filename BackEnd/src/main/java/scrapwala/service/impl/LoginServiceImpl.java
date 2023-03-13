package scrapwala.service.impl;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import scrapwala.entities.Login;
import scrapwala.response.LoginDto;
import scrapwala.services.Login_Service;

@Service
@Component
public class LoginServiceImpl implements Login_Service{

	@Override
	public LoginDto saveLogin(LoginDto loginDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<LoginDto> getAllLogins() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LoginDto getLoginById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LoginDto updateLogin(LoginDto loginDto, int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteLogin(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Login> getLogin() {
		// TODO Auto-generated method stub
		return null;
	}

}
