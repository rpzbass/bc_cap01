package com.bootcamp.client.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.client.entities.Client;

public interface ClientRepository extends JpaRepository<Client,Long> {

	
	
}
