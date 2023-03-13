package scrapwala.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<User> user;

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

	public List<User> getUser() {
		return user;
	}

	public void setUser(List<User> user) {
		this.user = user;
	}

	public ScrapProduct(int id, Scrap scraps, List<User> user) {
		super();
		this.id = id;
		this.scraps = scraps;
		this.user = user;
	}

	public ScrapProduct() {
		super();
		// TODO Auto-generated constructor stub
	}
	
//	@OneToOne(cascade=CascadeType.ALL)  
//    private User user;  
	
	
}