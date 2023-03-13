package scrapwala.controllers;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import scrapwala.entities.ScrapProduct;
import scrapwala.service.ScrapProductService;
@RestController
@RequestMapping("/api/scrapproduct")
public class ScrapProductController {

//		@Autowired
		private ScrapProductService scrapproductService;
	//get scrapProduct
	@GetMapping 
	public List<ScrapProduct> getScrapProduct()
	{
		return this.scrapproductService.getScrapProduct();
	}
	//creating Scraps_Products rest-api 
	@PostMapping
	public ResponseEntity<ScrapProduct> addScrapProduct(@RequestBody ScrapProduct scrapproduct) {
		return new ResponseEntity<ScrapProduct>(HttpStatus.CREATED);	
	}
	}


