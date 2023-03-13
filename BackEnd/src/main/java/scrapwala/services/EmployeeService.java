package scrapwala.services;

import java.util.List;

import scrapwala.response.EmployeeDto;

public interface EmployeeService {

	EmployeeDto saveEmployee(EmployeeDto employeeDto);

	List<EmployeeDto> getAllEmployees();

	EmployeeDto getEmployeeById(int id);

	EmployeeDto updateEmployee(EmployeeDto employeedto, int id);

	void deleteEmployee(int id);

//	public EmployeeDto saveEmployee(EmployeeDto employeeDto);
//
//	public List<EmployeeDto> getAllEmployees();
//
//	public EmployeeDto getEmployeeById(int id);
//
//	public EmployeeDto updateEmployee(EmployeeDto employeedto, int id);
//
//	public void deleteEmployee(int id);

		
}
