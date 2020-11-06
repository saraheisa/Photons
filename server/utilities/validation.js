const validateGetRequest = (req, res, next) => {

    if (req.query.order_by &&
        req.query.order_by !== 'latest' &&
        req.query.order_by !== 'oldest') {
        req.errors
            ? req.errors.push('order_by value should be latest or oldest')
            : req.errors = ['order_by value should be latest or oldest'];
    }

    if (req.query.page && isNaN(req.query.page)) {
        req.errors
            ? req.errors.push('page value should be a number')
            : req.errors = ['page value should be a number'];
    }

    if (req.query.per_page && isNaN(req.query.per_page)) {
        req.errors
            ? req.errors.push('per_page value should be a number')
            : req.errors = ['per_page value should be a number'];
    }

    next();
};

module.exports = { validateGetRequest };
