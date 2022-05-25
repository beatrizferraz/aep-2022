package br.edu.unicesumar.aula.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.edu.unicesumar.aula.domain.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

	@Query(nativeQuery = true, value = "select * from pessoa where lower(nome) like '%' || lower(:parteNome) || '%' ")
	Page<Pessoa> findByNome(@Param("parteNome") String parteNome, Pageable pageable);
	
	
}
