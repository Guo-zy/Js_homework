const employeeTest = require('ava');
const Employee = require('../src/employee');

employeeTest('employee test case1 :  input programmer of wrong type', t => {
    try {
        //given
        //when
        new Employee('Yancy', 'programmer');
        t.fail();
    } catch (e) {
        //then
        t.is(e.message, `Employee cannot be of type programmer`);
    }
});

employeeTest(
    'employee test case2 :  input name is Yancy and type is manager',
    t => {
        //given
        //when
        const res = new Employee('Yancy', 'manager').toString();
        //then
        t.is(res, `Yancy (manager)`);
    }
);

employeeTest(
    'employee test case3 :  input name is Yancy and type is salesman',
    t => {
        //given
        //when
        const res = new Employee('Yancy', 'salesman').toString();
        //then
        t.is(res, `Yancy (salesman)`);
    }
);

employeeTest(
    'employee test case4 :  input name is Yancy and type is engineer',
    t => {
        //given
        //when
        const res = new Employee('Yancy', 'engineer').toString();
        //then
        t.is(res, `Yancy (engineer)`);
    }
);