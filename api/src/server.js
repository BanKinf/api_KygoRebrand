const app = require('./app');
const http = require("http");
const env = require('./config/envConfig.js');

// Serve Http
const server = http.createServer(app);

// Start Server
server.listen({ port: env.PORT, host: '0.0.0.0' }, () => {
    console.log(`Server is working on http://localhost:${env.PORT}`);
});