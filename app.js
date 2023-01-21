//initialize jquery onReady function
$(document).ready(onReady);


//set handlers
function onReady() {
console.log('initializing handlers...');

//form submit handler
$('#add-employee-form').on('submit', addEmployee);

//delete button handler
//$('#employee-table').on('click', 'employee-delete-btn', 'delete');

//render dynamic elements in web page
render();
}

//initialize global variables
let employees = [ 
    { firstName : 'Samuel', lastName : 'Malone' , id : 1, title : 'Owner/Bartender', annualSalary : 90000},
    { firstName : 'Diane', lastName : 'Chambers', id : 124, title : 'Server', annualSalary : 44600 },
    { firstName : 'Ernie', lastName : 'Pantusso', id : 13, title : 'Assistant bartender', annualSalary : 51000 },
    { firstName : 'Carla', lastName : 'Tortelli', id : 18, title : 'Server', annualSalary : 46800 }
];
console.log('initialized Employees', employees);


//creates new employee object, adds it to the end of the array, then calls render
function addEmployee(evt) {

    evt.preventDefault();
    let employee = {
        firstName : $('#firstNameInput').val(),
        lastName :  $('#lastNameInput').val(),
        id : $('#idInput').val(),
        title : $('#titleInput').val(),
        annualSalary : $('#salaryInput').val()
    };
    employees.push(employee);
    console.log('employee added', employees);
    render();
}


function deleteEmployee() {

}

//render function updates dynamic web page elements
function render() {

    $('#employee-table').empty();

    for (let employee of employees) {
        $('#employee-table').append(
            `<tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>$${employee.annualSalary}</td>
            </tr>`
        );
    }

    //empty field inputs
    $('#firstNameInput').val(''),
    $('#lastNameInput').val(''),
    $('#idInput').val(''),
    $('#titleInput').val(''),
    $('#salaryInput').val('')
}