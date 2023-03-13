package scrapwala.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import scrapwala.entities.Login;



public interface LoginRepository extends JpaRepository<Login, Integer> {

}
