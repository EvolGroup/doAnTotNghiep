package com.app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Size;

public interface SizeDAO extends JpaRepository<Size,String> {
    
}
