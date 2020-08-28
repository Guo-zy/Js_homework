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

deliveryTest('deliveryTest case2 : input deliveryState is CT, and isRush is true', t => {
    //given
    const anOrder = {
        deliveryState: 'CT',
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

deliveryTest('deliveryTest case3 : input deliveryState is NY, and isRush is true', t => {
    //given
    const anOrder = {
        deliveryState: 'NY',
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
    t.is(res, 3)

});