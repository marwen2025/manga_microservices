const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// define routes and their ports 
const routes = {
    '/s1': 'http://localhost:5000',//microservice pour manga
    '/s2': 'http://localhost:5001', //microservice pour category

};

// create a proxy for each route 
const app = express();
for(const route in routes){
    const target = routes[route];
    app.use(route, createProxyMiddleware({target}));
}

// start the proxy
const PORT = 5003;
app.listen(PORT, () => {
    console.log(`Api-gateway server listening on port ${PORT}`);
}
);

// Test the proxy
// 1. Start all the servers
// 2. Open a browser and navigate to http://localhost:5001/s2
// 3. Open a browser and navigate to http://localhost:5000/s1