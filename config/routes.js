const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user);

    app.use('/api/product', router.product);

    app.use('/api/category', router.category);
    app.use("/api/order", router.order);
    app.use("/api/image", router.imageList);
    app.use("/api/payment", router.payment);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};