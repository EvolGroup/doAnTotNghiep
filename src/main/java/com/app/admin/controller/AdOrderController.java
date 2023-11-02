package com.app.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdOrderController {

	@RequestMapping("/admin/order")
	public String order() {
		return "admin/order/index";
	}
}
