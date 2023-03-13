package scrapwala.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import scrapwala.entities.Scrap;


public interface ScrapRepository extends JpaRepository<Scrap, Integer> {

}
