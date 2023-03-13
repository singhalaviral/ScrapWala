package scrapwala.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "scrapproducts")
public class ScrapProduct{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Scrap scraps;

	@OneToOne(cascade = CascadeType.ALL)
	private Employee employee;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Scrap getScraps() {
		return scraps;
	}

	public void setScraps(Scrap scraps) {
		this.scraps = scraps;
	}


	public ScrapProduct() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ScrapProduct(int id, Scrap scraps, Employee employee) {
	super();
	this.id = id;
	this.scraps = scraps;
	this.employee = employee;
}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
}