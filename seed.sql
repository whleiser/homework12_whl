USE employee_DB;


insert into employees (first_name, last_name, role_id, manager_id) values ("john", "doe", 1, 1);
insert into employees (first_name, last_name, role_id, manager_id) values ("james", "day", 1, 1);
insert into roles (title, salary) values ("manager", 200000, 1);
insert into roles (title, salary) values ("engineer", 100000, 2);
insert into departments (name) values ("administration");
insert into departments (name) values ("engineering");