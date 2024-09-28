const config = {
  port: parseInt(process.env.PORT, 10) || 3000,
  logs: {
    level: process.env.LOG_LEVEL || 'info',
  },

  TempFileDir: `${__dirname}/../../${process.env.TEMP_UPLOAD_DIR}`,
  logDir: process.env.LOG_DIR,
};

module.exports = config;