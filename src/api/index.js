const adminExtractRoute = require('./modules/admin/extractor/route');


const api = (app) => {
    app.use('/admin/extractor', adminExtractRoute);
};

module.exports = api;