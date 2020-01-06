package com.yash.era.controller;

import com.yash.era.model.Employee;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {

    @RequestMapping("api/employee")
    public Employee employee(@RequestParam(value="employeeName") String employeeName){
//                             @RequestParam(value = "label") String label,
//                             @RequestParam(value = "managerId") int managerId){
        return new Employee(employeeName);
    }
    @RequestMapping("api/hello")
    public String hello(){
        return "Hello from Springboot";
    }
    @RequestMapping("api/goodbye")
    public String goodbye(){
        return "Goodbye from Springboot";
    }

}
