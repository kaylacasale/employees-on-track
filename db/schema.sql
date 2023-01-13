DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employees;


CREATE TABLE department (
    id INT NOT NULL -- id param (departments.id) --
    AUTO_INCREMENT PRIMARY KEY, -- id given primary key attribute and auto-increment field attribute --
    name VARCHAR(30) NOT NULL -- name param (departments.name) --
);

CREATE TABLE role (
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    -- ^ relate foreign key (department_id) paramater of role to department's primary key (id)
    FOREIGN KEY (department_id) 
    REFERENCES department(id) 
    -- if a department is deleted, delete role associated
    ON DELETE SET NULL 
);

CREATE TABLE emploee (
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT, -- references to role primary key (id) --
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL, -- delete role_id if role is deleted --
    manager_id INT, -- allow null if employee has no manager --
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)

)