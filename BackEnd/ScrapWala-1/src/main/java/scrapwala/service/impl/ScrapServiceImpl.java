package scrapwala.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import scrapwala.entities.Scrap;
import scrapwala.entities.User;
import scrapwala.repositories.ScrapRepository;
import scrapwala.response.ScrapDto;
import scrapwala.response.UserDto;
import scrapwala.service.ScrapService;

@Service
@Component
public class ScrapServiceImpl implements ScrapService{

	@Autowired
	private ScrapRepository scrapRepository;
	

	@Autowired
	private ModelMapper modelmapper;

	public ModelMapper getModelmapper() {
		return modelmapper;
	}
	public void setModelmapper(ModelMapper modelmapper) {
		this.modelmapper = modelmapper;
	}
	
	@Override
	public ScrapDto createScrap(ScrapDto scrapDto) {
		// TODO Auto-generated method stub
		Scrap scrap=this.modelmapper.map(scrapDto, Scrap.class);
		Scrap saveScrap=this.scrapRepository.save(scrap);
		return this.modelmapper.map(saveScrap, ScrapDto.class);
	}

	@Override
	public ScrapDto saveScrap(ScrapDto scrapDto) {
		// TODO Auto-generated method stub
		Scrap scrap=this.modelmapper.map(scrapDto, Scrap.class);
		Scrap savescrap=this.scrapRepository.save(scrap);
		
		return this.modelmapper.map(scrap, ScrapDto.class);
	}

	@Override
	public List<ScrapDto> getAllScraps() {
		List<Scrap> scraps = this.scrapRepository.findAll();
			List<ScrapDto> scrapdto = scrap.stream().map(scrap-> this.scrapToDto(scrap)).collect(Collectors.toList());
			return scrapdto;
		}

	@Override
	public ScrapDto getScrapById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteScrap(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public ScrapDto updateScrap(ScrapDto scrapDto, int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
