const moderationController = require('express').Router();
/** mod actions routes */
const reportBranch = require('../routes/moderation/actions/reportBranch');
const reportComment = require('../routes/moderation/actions/reportComment');
const reportPost = require('../routes/moderation/actions/reportPost');
const reportUser = require('../routes/moderation/actions/reportUser');
/** mod report routes */
const dismissReport = require('../routes/moderation/report/dismissReport');
const getReport = require('../routes/moderation/report/getReport');
const processReport = require('../routes/moderation/report/processReport');
const queryReports = require('../routes/moderation/report/queryReports');
/** mod suspend routes */
const suspendBranch = require('../routes/moderation/suspend/suspendBranch');
const suspendChat = require('../routes/moderation/suspend/suspendChat');
const suspendPost = require('../routes/moderation/suspend/suspendPost');
const suspendUser = require('../routes/moderation/suspend/suspendUser');

/* PATH '/mod/actions' **/

moderationController.post('/actions/branch/:branch_id', reportBranch);
moderationController.post('/actions/comment/:comment_id', reportComment);
moderationController.post('/actions/post/:post_id', reportPost);
moderationController.post('/actions/user/:user_id', reportUser);

/* PATH '/mod/report' **/

moderationController.get('/report/:report_id', getReport);
moderationController.post('/report/search', queryReports);
moderationController.post('/report/:report_id/process', processReport);
moderationController.post('/report/:report_id/dismiss', dismissReport);

/* PATH '/mod/suspend' **/

moderationController.get('/suspend/branch/:branch_id', suspendBranch);
moderationController.get('/suspend/comment/:comment_id', suspendChat);
moderationController.get('/suspend/post/:post_id', suspendPost);
moderationController.get('/suspend/user/:user_id', suspendUser);

module.exports = moderationController;