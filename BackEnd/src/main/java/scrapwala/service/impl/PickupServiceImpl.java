package scrapwala.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import scrapwala.entities.Pickup;
import scrapwala.exception.ResourceNotFoundException;
import scrapwala.repositories.PickupsRepository;
import scrapwala.response.PickupDto;
import scrapwala.services.PickupService;
@Service
@Component
public class PickupServiceImpl implements PickupService{

	@Autowired
	private PickupsRepository pickupRepository;
	
	@Autowired
	private ModelMapper modelmapper;

	public void setModelmapper(ModelMapper modelmapper) {
		this.modelmapper = modelmapper;
	}
	
	public PickupServiceImpl() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public List<PickupDto> getAllPickups() {
		// TODO Auto-generated method stub
		List<Pickup> pickups= this.pickupRepository.findAll();
		List<PickupDto> pickupDto = pickups.stream().map(pickup -> this.pickupToDto(pickup)).collect(Collectors.toList());
		return pickupDto;
	}

	@Override
	public PickupDto savePickup(PickupDto pickupDto) {
		Pickup pickup=this.dtoToPickup(pickupDto);
		Pickup savepickup = this.pickupRepository.save(pickup);
		return this.pickupToDto(savepickup);
	}

	@Override
	public PickupDto getPickupById(int id) {
		

		Pickup pickup =this.pickupRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Pickup", "id", id));
		return this.pickupToDto(pickup);
	}

	public Pickup dtoToPickup(PickupDto pickupDto) {
		Pickup pickup = this.modelmapper.map(pickupDto, Pickup.class);
		return pickup;
	}
	public PickupDto pickupToDto(Pickup pickup) {
		PickupDto pickupDto =this.modelmapper.map(pickup, PickupDto.class);
		return pickupDto;
	}


	public void deletePickup(int id) {
		// TODO Auto-generated method stub
		
	}

	public PickupDto updatePickup(PickupDto pickupDto, int id) {
		// TODO Auto-generated method stub
		return null;
	}



}
