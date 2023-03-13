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
//	@NotEmpty
//	@Size(min =3,max=25,message = "Last name should be between 3 and 15")
	private String name;
//	@NotEmpty
//	@Size(min =3,max=25,message = "first name should be between 3 and 15")
	private String mobileNumber;
//	@NotEmpty
//	@Size(min =3,max=25,message = "first name should be between 3 and 15")
	private int pincode;
	private String email;	
	
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JsonBackReference(value = "user-movement")
////	@JsonIgnore
//	@JsonManagedReference
//	private Admin admins;
	
//	@OneToOne(cascade = CascadeType.ALL)
//	@JsonBackReference(value = "user-movement")
//	@JsonIgnore
//	@JsonManagedReference
//	private Login login;

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

//	public Admin getAdmins() {
//		return admins;
//	}
//
//	public void setAdmins(Admin admins) {
//		this.admins = admins;
//	}

//	public Login getLogin() {
//		return login;
//	}
//
//	public void setLogin(Login login) {
//		this.login = login;
//	}

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


