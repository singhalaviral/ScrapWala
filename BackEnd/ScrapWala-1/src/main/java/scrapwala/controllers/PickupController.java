package scrapwala.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import scrapwala.response.PickupDto;

import scrapwala.service.PickupService;


@RestController
@RequestMapping("/pickups")
public class PickupController {
		@Autowired
		private PickupService pickupService;
		
		@Autowired
		public  PickupController(PickupService pickupService) {
			super();
			this.pickupService = pickupService;
		}
		public PickupController() {
			super();
			// TODO Auto-generated constructor stub
		}
		//creating user rest api
		@PostMapping
		public ResponseEntity<PickupDto> savePickup( @RequestBody PickupDto pickupDto){
			PickupDto savepickupdto = this.pickupService.savePickup(pickupDto);
			return new ResponseEntity<>(savepickupdto, HttpStatus.CREATED);
		}
		//creating get all user rest api
		//http://localhost/api/admin
		@GetMapping
		public ResponseEntity<List<PickupDto>>getAllPickups() {
			return ResponseEntity.ok(this.pickupService.getAllPickups());
		}
		//build get employee by id rest api
		//http://localhost/user/6
		@GetMapping("{id}")
		public ResponseEntity<PickupDto> getPickupById(@PathVariable("id") int pickupId) {
				return ResponseEntity.ok(this.pickupService.getPickupById(pickupId));
		}
		//update user rest api
		//http://localhost/user/1
		@PutMapping("{id}")
		public ResponseEntity<PickupDto> pickupUser(@PathVariable("id") int id, @RequestBody PickupDto pickupDto){
			
			PickupDto updatePickup = this.pickupService.updatePickup(pickupDto, id);
			return ResponseEntity.ok(updatePickup);
		}
		//build delete controller rest api
		//http://localhost/pickup/1
		@DeleteMapping("{id}")
		public <ApiResponce> ResponseEntity<ApiResponce> deletePickup(@PathVariable("id") int id) {
			pickupService.deletePickup(id);
			this.pickupService.deletePickup(id);
//			return new ResponseEntity<ApiResponce>(new ApiResponce("Pickup Deleted successfully",true), HttpStatus.OK);
			return null;
			}

}

