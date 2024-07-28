// backend/routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const ApiFeatures = require("../utils/apiFeatures");
const cloudinary = require('../config/cloudinary')
require("dotenv").config();


// Get All employees data
router.get('/getAllEmployees', async (req,res)=>{

    try {
        const allEmployees = await Employee.find();
        res.json(allEmployees);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// Get all employees with pagination
router.get('/employees', async (req, res) => {

    const resultPerPage = 8;
    const employeeCount = await Employee.countDocuments();

    const apiFeature = new ApiFeatures(Employee.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage).sort();

    const employees = await apiFeature.query;

    let filteredEmployeeCount = employees.length;

    res.status(200).json({
        success: true,
        employees,
        employeeCount,
        resultPerPage,
        filteredEmployeeCount,
    });
}
);

//get details of a single employee
router.get('/employees/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const employees = await Employee.findById(id);
        res.json(employees);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// create a employee
router.post('/create', async (req, res) => {
    const { name, email, mobile, designation, gender, course } = req.body;


    try {
        
        //validation
        if (!name || !email || !mobile || !designation || !gender || !course) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required.'
            });
        }

         // Check if email already exists
        const existingEmployee = await Employee.findOne({ where: { email } });
        if (existingEmployee) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists.'
            });
        }

        // Create a new employee
        const employee = await Employee.create({
            name,
            email,
            mobile,
            designation,
            gender,
            course,
        });

        return res.status(201).json({
            success: true,
            message: 'Employee created successfully.',
            data: employee
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
});

// Update Employee
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, mobile, designation, gender, course } = req.body;

        //validation
        if (!name || !email || !mobile || !designation || !gender || !course) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required.'
            });
        }

        const updatedEmployee = await Employee.findByIdAndUpdate(
            id,
            { name, email, mobile, designation, gender, course },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: 'Employee updated successfully',
            data: updatedEmployee,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
});

// Delete Employee
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEmployee = await Employee.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: 'Employee deleted successfully',
            data: deletedEmployee,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
});

module.exports = router

