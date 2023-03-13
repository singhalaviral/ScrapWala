package scrapwala.entities;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	private String name;

	private String mobileNumber;

	private int pincode;
	private String email;	

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int i) {
		this.pincode = i;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	public User(int userId, String name, String mobileNumber, int pincode, String email) {
		super();
		this.userId = userId;
		this.name = name;
		this.mobileNumber = mobileNumber;
		this.pincode = pincode;
		this.email = email;
//		this.admins = admins;
//		this.login = login;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
		
//	@OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
//	@JsonBackReference(value = "user-movement")
//	private List<Admin> admins;
}


