package com.app.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Order;

public interface OrderDAO extends JpaRepository<Order,Integer>{
    
}
