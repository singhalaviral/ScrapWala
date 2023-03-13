package scrapwala.services;

import java.util.List;

import scrapwala.response.AdminDto;
import scrapwala.response.ScrapDto;
import scrapwala.response.UserDto;

public interface ScrapService {

	public ScrapDto saveScrap(ScrapDto scrapDto);
	public List<ScrapDto> getAllScraps();
	public ScrapDto getScrapById(int id);
	public void deleteScrap(int id);
	public ScrapDto updateScrap(ScrapDto scrapDto, int id);

}
