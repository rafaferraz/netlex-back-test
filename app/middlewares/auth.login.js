const jwt = require('jsonwebtoken');
const User = require('../models/user')

const checkLogin = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const payload = jwt.verify(token, process.env.SECRET);

        const user = await User.findOne({
            where: { email: payload.email },
        });

        if(!user) res.status(401).send({error: 'Unauthorized'});

        req.token = token;
        req.user = user;
        next();
    } catch(exception) {
        res.status(401).send({error: 'Unauthorized'})
    }
}

module.exports = checkLogin;