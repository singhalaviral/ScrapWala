package scrapwala.response;

public class ScrapDto {
	private int id;
	private String name;
	private int rate;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getRate() {
		return rate;
	}
	public void setRate(int rate) {
		this.rate = rate;
	}
	public ScrapDto(int id, String name, int rate) {
		super();
		this.id = id;
		this.name = name;
		this.rate = rate;
	}
	public ScrapDto() {
		super();
		// TODO Auto-generated constructor stub
	}

}

