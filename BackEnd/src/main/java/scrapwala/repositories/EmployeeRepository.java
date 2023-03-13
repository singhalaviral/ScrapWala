package scrapwala.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import scrapwala.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{

}
