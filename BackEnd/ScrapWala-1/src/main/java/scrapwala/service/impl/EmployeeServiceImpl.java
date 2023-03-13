package scrapwala.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import scrapwala.entities.Employee;
import scrapwala.exception.ResourceNotFoundException;
import scrapwala.repositories.EmployeeRepository;
import scrapwala.response.EmployeeDto;
import scrapwala.service.EmployeeService;

@Service
@Component
public class EmployeeServiceImpl implements EmployeeService  {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private ModelMapper modelmapper;
	
//	public ModelMapper getModelmapper() {
//		return modelmapper;
//	}
	public void setModelmapper(ModelMapper modelmapper) {
		this.modelmapper = modelmapper;
	}
	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
		super();
		this.employeeRepository = employeeRepository;
	}
	@Override
	public EmployeeDto saveEmployee(EmployeeDto employeeDto) {
		
		Employee emp = this.dtoToEmployee(employeeDto);
		Employee saveemployee = this.employeeRepository.save(emp);
		return this.employeeToDto(saveemployee);
	}
	@Override
	public List<EmployeeDto> getAllEmployees() {
		
		List<Employee> employees = this.employeeRepository.findAll();
		List<EmployeeDto> employeedto = employees.stream().map(employee-> this.employeeToDto(employee)).collect(Collectors.toList());
		return employeedto;
	}
	@Override
	public EmployeeDto getEmployeeById(int id) {
		
		Employee employee =this.employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee", "id", id));
		return this.employeeToDto(employee);
	}
	@Override
	public EmployeeDto updateEmployee(EmployeeDto employeedto, int id) {
		
		Employee employee = this.employeeRepository.findById(id).orElseThrow();
		employee.setContact(employeedto.getContact());
		employee.setFirstName(employeedto.getFirstName());
		employee.setLastName(employeedto.getLastName());
		employee.setField(employeedto.getField());
		Employee updateEmployee = this.employeeRepository.save(employee);
		EmployeeDto employeedto1 = this.employeeToDto(updateEmployee);
		return employeedto1;	
	}
	@Override
	public void deleteEmployee(int id) {
		Employee employee=this.employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee", "id", id));	
		this.employeeRepository.delete(employee);	
	}
	public Employee dtoToEmployee(EmployeeDto employeeDto) {
		Employee employee = this.modelmapper.map(employeeDto, Employee.class);
		return employee;
	}
	public EmployeeDto employeeToDto(Employee employee) {
		EmployeeDto employeeDto =this.modelmapper.map(employee, EmployeeDto.class);
		return employeeDto;
	}
	@Override
	public EmployeeDto saveEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public EmployeeDto updateEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public EmployeeDto employeeUser(EmployeeDto employeeDto, int id) {
		// TODO Auto-generated method stub
		return null;
	}
}
