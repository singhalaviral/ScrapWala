package scrapwala.service;

import java.util.List;
import scrapwala.entities.Employee;
import scrapwala.response.EmployeeDto;

public interface EmployeeService {
	public	EmployeeDto saveEmployee(Employee employee);
	public List<EmployeeDto> getAllEmployees();
	public EmployeeDto getEmployeeById(int id);
	public void deleteEmployee(int id);
	public EmployeeDto updateEmployee(Employee employee);
	public EmployeeDto updateEmployee(EmployeeDto employeedto, int id);
	public EmployeeDto saveEmployee(EmployeeDto employeeDto);
	public EmployeeDto employeeUser(EmployeeDto employeeDto, int id);
	
}
