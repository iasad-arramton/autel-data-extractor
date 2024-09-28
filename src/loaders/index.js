const expressLoader = require('./express');
const Logger = require('../utilities/Logger');

const loader = async function ({ expressApp, server }) {

	await expressLoader({ app: expressApp });
	console.log('API READY TO TEST..')
	Logger.info('✌️ Express loaded');

};

module.exports = loader;