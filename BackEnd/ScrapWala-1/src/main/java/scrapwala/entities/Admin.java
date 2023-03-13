package scrapwala.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int adminId;
//	@NotBlank
//	@Size(min = 4,max = 25 ,message = "Name should be between 4 to 25 letters")
	private String adminNameFirst;
//	@NotBlank
//	@Size(min = 4,max = 25,message = "Name should be between 4 to 25 letters")
	private String adminNameLast;
	private LocalDate adminLastLogin;
	
//	@OneToMany
//	private List<User> user;

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

//	public List<User> getUser() {
//		return user;
//	}
//
//	public void setUser(List<User> user) {
//		this.user = user;
//	}

	public Admin(int adminId, String adminNameFirst, String adminNameLast, LocalDate adminLastLogin) {
		super();
		this.adminId = adminId;
		this.adminNameFirst = adminNameFirst;
		this.adminNameLast = adminNameLast;
		this.adminLastLogin = adminLastLogin;
//		this.user = user;
	}

	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
	
	
	
}
	
	
	
	
