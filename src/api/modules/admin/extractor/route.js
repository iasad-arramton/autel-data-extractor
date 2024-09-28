const { Router } = require('express');
const controller = require('./controller');
const { extractDataFromCSVFileUrl } = require('../../../middlewares/extractor');

const router = Router({ mergeParams: true });

router.post('/csv-upload', extractDataFromCSVFileUrl, controller.csvUpload);


module.exports = router;