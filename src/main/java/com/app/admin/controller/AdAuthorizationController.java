package com.app.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdAuthorizationController {

	@RequestMapping("/admin/authorization")
	public String Authorization() {
		return "admin/authorization";
	}
}
