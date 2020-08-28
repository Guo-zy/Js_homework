const printTest = require('ava');
const print = require('../src/print');

printTest('printTest case1 : ', t => {
    const res = print(invoice);
    t.is(
        res,
        `***********************
**** Customer Owes ****
***********************
name: Yancy
amount: 3
amount: 9/27/2020`
    );
});

const invoice = {
    customer: 'Yancy',
    borderSpacing: [{
            amount: 1,
        },
        {
            amount: 2,
        },
    ],
};