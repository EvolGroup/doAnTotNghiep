package com.app.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdHomeController {
	@RequestMapping("/admin")
	public String index() {
		return "admin/home";
	}
	

}
