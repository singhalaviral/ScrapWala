package scrapwala.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import scrapwala.entities.Scrap;
import scrapwala.entities.User;
import scrapwala.exception.ResourceNotFoundException;
import scrapwala.repositories.ScrapRepository;
import scrapwala.response.ScrapDto;
import scrapwala.response.UserDto;
import scrapwala.services.ScrapService;

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
	public ScrapDto saveScrap(ScrapDto scrapDto) {
		// TODO Auto-generated method stub
		Scrap scrap=this.dtoToScrap(scrapDto);
		Scrap savescrap=this.scrapRepository.save(scrap);		
		return this.scrapToDto(savescrap);
	}

	@Override
	public List<ScrapDto> getAllScraps() {
		List<Scrap> scraps = this.scrapRepository.findAll();
			List<ScrapDto> scrapdto = scraps.stream().map(scrap-> this.scrapToDto(scrap)).collect(Collectors.toList());
			return scrapdto;
		}

	@Override
	public ScrapDto getScrapById(int id) {
	
		Scrap scrap = this.scrapRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Scrap", "id", id));
		return this.scrapToDto(scrap);
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
	public Scrap dtoToScrap(ScrapDto scrapDto) {
		Scrap scrap = this.modelmapper.map(scrapDto, Scrap.class);
		return scrap;
	}
	public ScrapDto scrapToDto(Scrap scrap) {
		ScrapDto scrapDto =this.modelmapper.map(scrap, ScrapDto.class);
		return scrapDto;
	}
}
