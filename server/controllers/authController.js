const authController = require('express').Router();
/** auth routes */
const auth = require('../routes/auth/auth');
const destroyAuth = require('../routes/auth/destroyAuth');
const verifyAuth = require('../routes/auth/verifyAuth');

/* PATH '/auth' **/

authController.post('/', auth);
authController.post('/:user_id', verifyAuth);
authController.delete('/:user_id', destroyAuth);

module.exports = authController;