# Project Name

Salary Calculator

## Description

Salary Calculator serves as an employee and salary database and dashboard which displays the employee data in a table and also displays a sum of all the salaries of the currently employed. The application receives employee input with a form and the following inputs: First Name, Last Name, ID, Title, and Annual Salary. The application flushes data with delete buttons built into the table.

The application functions by storing the data in an array filled with employee objects. The objects contain fields labeled by the inputs. Inputs are run using jquery handlers in the onReady Function. The Salary fields are also stored in a seperate variable and are summed and then displayed.

The data displayed in a table and a "Total "Monthly" is handled through a render function. The render function uses jquery selectors and the built in append function to write to the html page dynamically. The function loops through the employee data and calls the append function on each employee data object. The object data is then appended to the employe table as data elements.

The Total Monthly sum is tracked in a global variable. The global variable is initialized and then updated and displayed with javascript functions.





Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
