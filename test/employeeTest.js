const empolyeeTest = require('ava');
const Employee = require('../src/employee');

empolyeeTest('employee test case1 :  input programmer of wrong type', t => {
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

empolyeeTest(
    'employee test case2 :  input name is Yancy and type is manager',
    t => {
        //given
        //when
        const res = new Employee('Yancy', 'manager').toString();
        //then
        t.is(res, `Yancy (manager)`);
    }
);

empolyeeTest(
    'employee test case3 :  input name is Yancy and type is salesman',
    t => {
        //given
        //when
        const res = new Employee('Yancy', 'salesman').toString();
        //then
        t.is(res, `Yancy (salesman)`);
    }
);

empolyeeTest(
    'employee test case4 :  input name is Yancy and type is engineer',
    t => {
        //given
        //when
        const res = new Employee('Yancy', 'engineer').toString();
        //then
        t.is(res, `Yancy (engineer)`);
    }
);