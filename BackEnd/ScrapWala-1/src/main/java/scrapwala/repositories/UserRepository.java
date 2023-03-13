package scrapwala.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import scrapwala.entities.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
