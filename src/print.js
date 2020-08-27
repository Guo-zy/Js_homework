function calculateOutstanding(invoice) {
    invoice.outstanding = invoice.outstanding ? invoice.outstanding : 0;
    invoice.borderSpacing.forEach(o => {
        invoice.outstanding += o.amount;
    });
    return invoice;
}

function recordDate(invoice) {
    const today = new Date();
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 30
    );
    return invoice;
}

function printDetail(invoice) {
    let result =
        '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n';

    result += `name: ${invoice.customer}
amount: ${invoice.outstanding}
amount: ${invoice.dueDate.toLocaleDateString()}`;

    return result;
}

function printOwing(invoice) {
    invoice = calculateOutstanding(invoice);

    invoice = recordDate(invoice);

    return printDetail(invoice);
}

module.exports = printOwing;