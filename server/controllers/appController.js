const appController = require('express').Router();
/** app routes */
const getHome = require('../routes/app/getHome');
const notFound = require('../routes/app/notFound');
/** admin routes */
const getAdminDashboard = require('../routes/app/admin/getAdminDashboard');
const getCensorshipManager = require('../routes/app/admin/getCensorshipManager');
const getStatistics = require('../routes/app/admin/getStatistics');
/** contact routes */
const closeContact = require('../routes/app/contact/closeContact');
const getContact = require('../routes/app/contact/getContact');
const queryMessages = require('../routes/app/contact/queryMessages');
const sendMessage = require('../routes/app/contact/sendMessage');
/** pages routes */
const createPage = require('../routes/app/pages/createPage');
const deletePage = require('../routes/app/pages/deletePage');
const getAllPages = require('../routes/app/pages/getAllPages');
const getPage = require('../routes/app/pages/getPage');
const togglePage = require('../routes/app/pages/togglePage');
const updatePage = require('../routes/app/pages/updatePage');

/* PATH '/' **/

appController.get('/', getHome);

appController.get('/admin', getAdminDashboard);
appController.get('/censorship', getCensorshipManager);
appController.get('/statistics', getStatistics);

/* PATH '/contact' **/

appController.get('/contact', getContact);
appController.post('/contact/search', queryMessages);
appController.post('/contact', sendMessage);
appController.delete('/contact', closeContact);

/* PATH '/app' **/

appController.get('/app', getAllPages);
appController.get('/app/:page_id', getPage);
appController.post('/app', createPage);
appController.put('/app/:page_id', updatePage);
appController.patch('/app/:page_id', togglePage);
appController.delete('/app/:page_id', deletePage);

appController.get('/*', notFound);

module.exports = appController;