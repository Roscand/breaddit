const notificationController = require('express').Router();
/** notification routes */
const createNotification = require('../routes/notification/createNotification');
const dismissAllNotifications = require('../routes/notification/dismissAllNotifications');
const dismissNotification = require('../routes/notification/dismissNotification');
const getAllNotifications = require('../routes/notification/getAllNotifications');

/* PATH '/notifications' **/

notificationController.get('/', getAllNotifications);
notificationController.post('/', createNotification);
notificationController.delete('/', dismissAllNotifications);
notificationController.delete('/:notification_id', dismissNotification);

module.exports = notificationController;