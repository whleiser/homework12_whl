const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

init();

function init() {
    const logoText = logo({ name: "Employee Manager" }).render();

    console.log(logoText);

    loadMainPrompts();
}

async function loadMainPrompts() {
    const { choice } = await prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: ["View all employees", "View all departments", "View all roles"],
    });


    switch (choice) {
        case "View all employees":
            return showEmployees();
        case "View all departments":
            return showDepartments();
        case "View all roles":
            return showRoles();
    }
}

async function showEmployees() {
    const employees = await db.getAllEmployees();

    console.table(employees);

    loadMainPrompts();
}

async function showDepartments() {
    const departments = await db.getAllDepartments();

    console.table(departments);

    loadMainPrompts();
}

async function showRoles() {
    const roles = await db.getAllRoles();

    console.table(roles);

    loadMainPrompts();
}