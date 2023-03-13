package scrapwala.response;

import java.time.LocalDate;
import java.time.LocalTime;

import scrapwala.entities.Login;
import scrapwala.entities.ScrapProduct;

	public class PickupDto {
	private int id;
	private LocalDate date;
	private LocalTime time;
	private String remarks;
	private String pickupAddress;
	private int estimatedWeight;
	private ScrapProduct scrapProducts;
	private Login login;
	private String mobileNumber;
	
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
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
	
	public PickupDto(int id, LocalDate date, LocalTime time, String remarks, String pickupAddress, int estimatedWeight,
			ScrapProduct scrapProducts, Login login, String mobileNumber) {
		super();
		this.id = id;
		this.date = date;
		this.time = time;
		this.remarks = remarks;
		this.pickupAddress = pickupAddress;
		this.estimatedWeight = estimatedWeight;
		this.scrapProducts = scrapProducts;
		this.login = login;
		this.mobileNumber = mobileNumber;
	}
	public PickupDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
