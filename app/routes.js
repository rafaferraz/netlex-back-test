const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
    res.send({message: "netLex backend test!"});
})

module.exports = routes;