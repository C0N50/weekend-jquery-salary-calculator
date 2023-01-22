//initialize jquery onReady function
$(document).ready(onReady);


//set handlers
function onReady() {
    console.log('initializing handlers...');

    //form submit handler
    $('#add-employee-form').on('submit', addEmployee);

    //delete button handler
    $('#employee-table').on('click', '.employee-delete-btn', deleteEmployee);

    //render dynamic elements in web page
    render();
}

//initialize global variables
let employees = [ 
    { firstName : 'Samuel', lastName : 'Malone' , id : 1, title : 'Owner/Bartender', annualSalary : 90000},
    { firstName : 'Diane', lastName : 'Chambers', id : 124, title : 'Server', annualSalary : 44600 },
    { firstName : 'Ernie', lastName : 'Pantusso', id : 13, title : 'Assistant bartender', annualSalary : 51000 },
    { firstName : 'Carla', lastName : 'Tortelli', id : 18, title : 'Server', annualSalary : 46800 },
    { firstName : 'Frasier', lastName : 'Crane', id : 148, title : 'Psychiatrist', annualSalary : 19000 }
];

 
//sum orginal salary ammount
let totalMonthlySalary = 0;
for (let employee of employees) {
    totalMonthlySalary += employee.annualSalary;
}

console.log('initialized Employees', employees);
console.log('initialized total salary', totalMonthlySalary);


//creates new employee object, adds it to the end of the array, then calls render
function addEmployee(evt) {

    evt.preventDefault();
    let employee = {
        firstName : $('#firstNameInput').val(),
        lastName :  $('#lastNameInput').val(),
        id : $('#idInput').val(),
        title : $('#titleInput').val(),
        annualSalary : Number($('#salaryInput').val())
    };
    employees.push(employee);
    console.log('employee added', employees);

    //add new employee salary to total salary
    totalMonthlySalary += employee.annualSalary;
    
    render();
}

//finds employee index from html elements, 
//removes employee from employees aray, and calls render()
function deleteEmployee() {
    console.log('deleting employee');

    employeeIndex = $(this).parent().parent().index();

    totalMonthlySalary -= employees[employeeIndex].annualSalary;

    console.log('subtract salary',employees[employeeIndex].annualSalary);

    employees.splice(employeeIndex, 1);

    render();
}

//adds thousands place commas to input number and returns number as string
function thousandsCommas(number) {

    numberArray = number.toString().split("").reverse();
    console.log(numberArray);

    //adds thousands place commas to number
    for (let power = 0; power < numberArray.length; power+=3 ) {
        if (power > 0) {
           // console.log (power);
            console.log (numberArray[power]);
            numberArray.splice([power],0,',');
            console.log(numberArray);
            power++;
        }
    }

    let numberString = numberArray.reverse().join("");
    console.log('total monthly salary is:', numberString);
    return numberString;
}

//render function updates dynamic web page elements
function render() {

    //empties data elements from html parents
    $('#employee-table').empty();
    $('#total-monthly-salary').empty();

    //render employee elements
    for (let employee of employees) {
        $('#employee-table').append(
            `<tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>$${thousandsCommas(employee.annualSalary)}</td>
                <td><button class='employee-delete-btn'>Delete</button></td>
            </tr>`
        );
    }

    //apply thousands commas to total monthly salary
    let totalString = thousandsCommas(totalMonthlySalary);
    console.log('total monthly salary is:', totalString);


    //display red background if cost > $20,000
    if (totalMonthlySalary > 20000) {
        $('#total-monthly-salary').append(
            `<span style="background-color:red;"
            >Total Montly: $${totalString}</span>`
        );
    }
    else {
        $('#total-monthly-salary').append(
            `<p>Total Montly: $${totalString}</p>`
        );
    }

    //empty field inputs
    $('#firstNameInput').val(''),
    $('#lastNameInput').val(''),
    $('#idInput').val(''),
    $('#titleInput').val(''),
    $('#salaryInput').val('')
}


