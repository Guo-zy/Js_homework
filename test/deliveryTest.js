const deliveryTest = require('ava');
const deliveryDate = require('../src/delivery')

deliveryTest('sample', t => {
    t.is('1', '1');
});


deliveryTest('deliveryTest case1 : input deliveryState is MA, and isRush is true', t => {
    //given
    const anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays(deliveryTime) {
                return deliveryTime
            }
        }
    };
    const isRush = true;

    //when
    const res = deliveryDate(anOrder, isRush);

    //then
    t.is(res, 2)

});