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

import scrapwala.response.EmployeeDto;
import scrapwala.services.EmployeeService;

@RestController
@RequestMapping("/employee")
public class EmployeeController<ApiResponce> {

	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	public  EmployeeController(EmployeeService employeeService) {
		super();
		this.employeeService = employeeService;
	}
	public EmployeeController() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@GetMapping
	public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
		return ResponseEntity.ok(this.employeeService.getAllEmployees());
	}
	
	@GetMapping("{id}")
	public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") int employeeId) {
			return ResponseEntity.ok(this.employeeService.getEmployeeById(employeeId));
	}
	@PostMapping
	public ResponseEntity<EmployeeDto> saveEmployee( @RequestBody EmployeeDto employeeDto){
		EmployeeDto saveemployeedto = this.employeeService.saveEmployee(employeeDto);
		return new ResponseEntity<>(saveemployeedto, HttpStatus.CREATED);
	}
	@PutMapping("{id}")
	public ResponseEntity<EmployeeDto> employeeUser(@PathVariable("id") int id, @RequestBody EmployeeDto employeeDto) {
		
		EmployeeDto employeeUser = this.employeeService.updateEmployee(employeeDto, id);
		return ResponseEntity.ok(employeeUser);
	}
	//build delete controller rest api
	//http://localhost/user/1
//	@DeleteMapping("{id}")
//	public ResponseEntity<ApiResponce> deleteEmployee(@PathVariable("id") int id) {
//		employeeService.deleteEmployee(id);
//		this.employeeService.deleteEmployee(id);
//		return new ResponseEntity<ApiResponce>(new ApiResponce("User Deleted successfully",true), HttpStatus.OK);
//		return null;
//}
	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable("id") int id)
	{
		try
		{
			this.employeeService.deleteEmployee(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}