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


deliveryTest('deliveryTest case4 : input deliveryState is NH, and isRush is true', t => {
    //given
    const anOrder = {
        deliveryState: 'NH',
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

deliveryTest('deliveryTest case5 : input deliveryState is other, and isRush is true', t => {
    //given
    const anOrder = {
        deliveryState: 'other',
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
    t.is(res, 4)

});

deliveryTest('deliveryTest case6 : input deliveryState is MA, and isRush is false', t => {
    //given
    const anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays(deliveryTime) {
                return deliveryTime
            }
        }
    };
    const isRush = false;

    //when
    const res = deliveryDate(anOrder, isRush);

    //then
    t.is(res, 4)

});

deliveryTest('deliveryTest case7 : input deliveryState is CT, and isRush is false', t => {
    //given
    const anOrder = {
        deliveryState: 'CT',
        placedOn: {
            plusDays(deliveryTime) {
                return deliveryTime
            }
        }
    };
    const isRush = false;

    //when
    const res = deliveryDate(anOrder, isRush);

    //then
    t.is(res, 4)

});

deliveryTest('deliveryTest case8 : input deliveryState is NY, and isRush is false', t => {
    //given
    const anOrder = {
        deliveryState: 'NY',
        placedOn: {
            plusDays(deliveryTime) {
                return deliveryTime
            }
        }
    };
    const isRush = false;

    //when
    const res = deliveryDate(anOrder, isRush);

    //then
    t.is(res, 4)

});

deliveryTest('deliveryTest case9 : input deliveryState is ME, and isRush is false', t => {
    //given
    const anOrder = {
        deliveryState: 'ME',
        placedOn: {
            plusDays(deliveryTime) {
                return deliveryTime
            }
        }
    };
    const isRush = false;

    //when
    const res = deliveryDate(anOrder, isRush);

    //then
    t.is(res, 5)

});

deliveryTest('deliveryTest case10 : input deliveryState is NH, and isRush is false', t => {
    //given
    const anOrder = {
        deliveryState: 'NH',
        placedOn: {
            plusDays(deliveryTime) {
                return deliveryTime
            }
        }
    };
    const isRush = false;

    //when
    const res = deliveryDate(anOrder, isRush);

    //then
    t.is(res, 5)

});

deliveryTest('deliveryTest case11 : input deliveryState is other, and isRush is false', t => {
    //given
    const anOrder = {
        deliveryState: 'other',
        placedOn: {
            plusDays(deliveryTime) {
                return deliveryTime
            }
        }
    };
    const isRush = false;

    //when
    const res = deliveryDate(anOrder, isRush);

    //then
    t.is(res, 6)

});
