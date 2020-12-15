const server = require('./api/server.js');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 5000;

dotenv.config();

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
