package scrapwala.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import scrapwala.response.ScrapDto;
import scrapwala.services.ScrapService;
@RestController
@RequestMapping("/scrap")
@CrossOrigin("*")
public class ScrapController {

	@Autowired
	private ScrapService scrapService;
	
	@PostMapping
	public ResponseEntity<ScrapDto> saveScrap(@RequestBody ScrapDto scrapDto){
		ScrapDto saveScrapDto = this.scrapService.saveScrap(scrapDto);
		return new ResponseEntity<>(saveScrapDto,HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<ScrapDto>> getAllScraps() {
		return ResponseEntity.ok(this.scrapService.getAllScraps());
	}
	@GetMapping("{id}")
	public ResponseEntity<ScrapDto> getScrapById(@PathVariable("id") int scrapId) {
			return ResponseEntity.ok(this.scrapService.getScrapById(scrapId));
	}
	
	
}