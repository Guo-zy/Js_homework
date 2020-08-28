function calculateOutstanding(invoice) {
    invoice.outstanding =  0;
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

function printDetail(invoiceData) {
    let result =
        '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n';

    result += `name: ${invoiceData.customer}
amount: ${invoiceData.outstanding}
amount: ${invoiceData.dueDate.toLocaleDateString()}`;

    return result;
}

function createInvoiceData(invoice) {
    let invoiceData = Object.assign({}, invoice);

    invoiceData = calculateOutstanding(invoiceData);
    invoiceData = recordDate(invoiceData);

    return invoiceData;
}

function printOwing(invoice) {
    const invoiceData = createInvoiceData(invoice);

    return printDetail(invoiceData);
}

module.exports = printOwing;