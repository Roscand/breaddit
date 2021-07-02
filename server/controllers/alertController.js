const alertController = require('express').Router();
const getAlerts = require('../routes/alert/getAlerts');
const sendAlert = require('../routes/alert/sendAlert');

/* PATH '/alerts' **/

alertController.get('/', getAlerts);
alertController.post('/', sendAlert);

module.exports = alertController;