package com.bootcamp.client.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.bootcamp.client.dto.ClientDTO;
import com.bootcamp.client.entities.Client;
import com.bootcamp.client.repositories.ClientRepository;
import com.bootcamp.client.services.exceptions.DatabaseException;
import com.bootcamp.client.services.exceptions.ResourceNotFoundException;

@Service
public class ClientService {

	@Autowired
	private ClientRepository repository;

	@Transactional
	public Page<ClientDTO> findAllpaged(PageRequest pageRequest) {

		Page<Client> listpage = repository.findAll(pageRequest);

		return listpage.map(x -> new ClientDTO(x));
	}

	@Transactional
	public ClientDTO findById(Long id) {

		Optional<Client> obj = repository.findById(id);

		Client entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));

		return new ClientDTO(entity);

	}

	@Transactional
	public ClientDTO insert(ClientDTO dto) {

		Client entity = new Client();
		copytoentity(dto, entity);
		entity = repository.save(entity);
		return new ClientDTO(entity);

	}

	@Transactional
	public ClientDTO update(Long id, ClientDTO dto) {
		try {
			Client entity = repository.getOne(id);
			copytoentity(dto, entity);
			entity = repository.save(entity);
			return new ClientDTO(entity);
		} catch (EntityNotFoundException e) {

			throw new ResourceNotFoundException("Id not found" + id);
		}

	}

	@DeleteMapping(value = "/{id}")
	public void delete(Long id) {
		try {

			repository.deleteById(id);

		} catch (EmptyResultDataAccessException e) {

			throw new ResourceNotFoundException("ID not found" + id);

		} catch (DataIntegrityViolationException e) {

			throw new DatabaseException("Integrity violation" + id);

		}

	}

	private void copytoentity(ClientDTO dto, Client entity) {

		entity.setName(dto.getName());
		entity.setCpf(dto.getCpf());
		entity.setIncome(dto.getIncome());
		entity.setBirthDate(dto.getBirthDate());
		entity.setChildren(dto.getChildren());

	}

}