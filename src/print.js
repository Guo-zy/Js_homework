function calculateOutstanding(invoice) {
    invoice.outstanding = invoice.outstanding ? invoice.outstanding : 0;
    invoice.borderSpacing.forEach(o => {
        invoice.outstanding += o.amount;
    });
    return invoice;
}

function printOwing(invoice) {
    let outstanding = 0;
    let result =
        '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n';

    invoice = calculateOutstanding(invoice);

    // record due date
    const today = new Date();
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 30
    );

    // print details
    result += `name: ${invoice.customer}
amount: ${invoice.outstanding}
amount: ${invoice.dueDate.toLocaleDateString()}`;

    return result;
}

module.exports = printOwing;