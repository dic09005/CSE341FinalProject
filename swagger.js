const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'MedData API',
    description: 'This medical intake form API is our final project',
  },
  host: 'cse341finalproject-94sq.onrender.com',
  // host: 'localhost:3000',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
