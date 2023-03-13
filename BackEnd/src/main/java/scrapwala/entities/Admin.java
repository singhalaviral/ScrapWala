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
	
	private String adminNameFirst;
	
	private String adminNameLast;
	private LocalDate adminLastLogin;
	private String adminPassword;
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
	public String getAdminPassword() {
		return adminPassword;
	}
	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}
	public Admin(int adminId, String adminNameFirst, String adminNameLast, LocalDate adminLastLogin,
			String adminPassword) {
		super();
		this.adminId = adminId;
		this.adminNameFirst = adminNameFirst;
		this.adminNameLast = adminNameLast;
		this.adminLastLogin = adminLastLogin;
		this.adminPassword = adminPassword;
	}
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	
//	@OneToMany
//	private List<User> user;
}
	
	
	
	
