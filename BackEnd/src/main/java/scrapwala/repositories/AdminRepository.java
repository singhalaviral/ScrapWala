package scrapwala.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import scrapwala.entities.Admin;
public interface AdminRepository extends JpaRepository<Admin, Integer> {

}
