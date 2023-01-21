//initialize jquery onReady function
$(document).ready(onReady);


//set handlers
function onReady() {

//form submit handler
$('#add-employee-form').on('submit', addEmployee);

//delete button handler
//$('#employee-table').on('click', 'employee-delete-btn', 'delete');

//render dynamic elements in web page
render();
}

//initialize global variables
let employees = [ 
    { firstName : 'Samuel', lastName : 'Malone' , id : 1, title : 'Owner/Bartender', annualSalary : '$90,000'},
    { firstName : 'Diane', lastName : 'Chambers', id : 124, title : 'Server', annualSalary : '$44,600' },
    { firstName : 'Ernie', lastName : 'Pantusso', id : 13, title : 'Assistant bartender', annualSalary : '$51,000' },
    { firstName : 'Carla', lastName : 'Tortelli', id : 18, title : 'Server', annualSalary : '$46,800' }
];


//creates new employee object and adds it to the end of the array
function addEmployee() {
    let employee = {
        firstName : $('#firstNameInput').val(),
        lastName :  $('#lastNameInput').val(),
        id : $('#idInput').val(),
        title : $('salaryInput').val()
    };
    employees.push(employee);

    render();
    console.log('employee added', employees);
}


/*function deleteEmployee() {

} */

function render() {


    $('#employee-table').empty();

    for (let employee of employees) {
        $('#employee-table').append(
            `<tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>${employee.annualSalary}</td>
            </tr>`
        )
    }
}