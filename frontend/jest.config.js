const config = {
  verbose: true,
  errorOnDeprecated: false,
  jest: {
    setupFilesAfterEnv: ["src/setupTests.js"],
  },
};

module.exports = config;
