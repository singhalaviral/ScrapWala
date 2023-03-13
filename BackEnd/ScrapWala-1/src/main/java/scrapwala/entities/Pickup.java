package scrapwala.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "pickups")
public class Pickup {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private LocalDate date;
	private LocalTime time;
	private String remarks;
	private String mobileNumber;
public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	//	@NotEmpty
//	@Size(min=6, max=40, message="Address should be between 6 to 40 charachters")
	private String pickupAddress;
	
//	@NotEmpty
//	@Size(min=6, max=40, message="Please select one Weight")
	private int estimatedWeight;
	
	@OneToOne(cascade = CascadeType.ALL)
	private ScrapProduct scrapProducts;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Login login;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getPickupAddress() {
		return pickupAddress;
	}

	public void setPickupAddress(String pickupAddress) {
		this.pickupAddress = pickupAddress;
	}

	public int getEstimatedWeight() {
		return estimatedWeight;
	}

	public void setEstimatedWeight(int estimatedWeight) {
		this.estimatedWeight = estimatedWeight;
	}

	public ScrapProduct getScrapProducts() {
		return scrapProducts;
	}

	public void setScrapProducts(ScrapProduct scrapProducts) {
		this.scrapProducts = scrapProducts;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}

	

	public Pickup(int id, LocalDate date, LocalTime time, String remarks, String mobileNumber, String pickupAddress,
			int estimatedWeight, ScrapProduct scrapProducts, Login login) {
		super();
		this.id = id;
		this.date = date;
		this.time = time;
		this.remarks = remarks;
		this.mobileNumber = mobileNumber;
		this.pickupAddress = pickupAddress;
		this.estimatedWeight = estimatedWeight;
		this.scrapProducts = scrapProducts;
		this.login = login;
	}

	public Pickup() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
