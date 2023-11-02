package com.app.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdReportController {

	@RequestMapping("admin/report")
	public String productManage() {
		return "admin/report";
	}
}
