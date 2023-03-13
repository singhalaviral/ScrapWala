package scrapwala.response;

import java.util.List;

import scrapwala.entities.Scrap;
import scrapwala.entities.User;

public class ScrapProductDto {
	private int id;
	private Scrap scraps;
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
	public ScrapProductDto(int id, Scrap scraps, List<User> user) {
		super();
		this.id = id;
		this.scraps = scraps;
		this.user = user;
	}
	public ScrapProductDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
