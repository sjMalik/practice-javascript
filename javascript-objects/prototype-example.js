/**
 * Here emp1 object got company as prototype property. delete operator doesn't delete prototype property.
 * emp1 object doesn't have company as its own property.
 */

var Employee = {
    company: 'xyz'
  }
  var emp1 = Object.create(Employee);
  delete emp1.company
  console.log(emp1.company); // xyz

  console.log(emp1.hasOwnProperty('company')); //output : false

  //  we can delete company property directly from Employee object using delete Employee.company or 
  //  we can also delete from emp1 object using __proto__ property delete emp1.__proto__.company.
  delete emp1.__proto__.company;
  console.log(emp1.company)