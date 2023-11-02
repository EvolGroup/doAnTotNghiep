package com.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProfileController {

	@RequestMapping("/management/profile")
	public String profile() {
		return "user/management/profile";
	}
	
	@RequestMapping("/management/address")
	public String address() {
		return "user/management/address";
	}
	
	@RequestMapping("/management/order")
	public String order() {
		return "user/management/order";
	}
	
	@RequestMapping("/management/order/detail")
	public String orderDetail() {
		return "user/management/orderDetail";
	}
	
	@RequestMapping("/management/password")
	public String password() {
		return "user/management/password";
	}
	
	
	
}
