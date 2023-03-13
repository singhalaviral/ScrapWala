package scrapwala.service;

import java.util.List;

import scrapwala.entities.Pickup;
import scrapwala.response.PickupDto;

public interface PickupService {

	
	public PickupDto savePickup(PickupDto pickupDto);

	public PickupDto getPickupById(int id);

	public List<PickupDto> getAllPickups();

public 	PickupDto updatePickup(PickupDto pickupDto, int id);

public 	void deletePickup(int id);
}
