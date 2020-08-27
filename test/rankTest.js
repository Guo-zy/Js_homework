const rankTest = require('ava');
const Employee = require('../src/employee');

rankTest('employee test case1 :  input programmer of wrong type', t => {
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

rankTest(
    'employee test case2 :  input name is Yancy and type is manager',
    t => {
        //given
        //when
        const res = new Employee('Yancy', 'manager').toString();
        //then
        t.is(res, `Yancy (manager)`);
    }
);