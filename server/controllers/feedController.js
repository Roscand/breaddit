const feedController = require('express').Router();
/** feed routes  */
const adjustFeed = require('../routes/feed/adjustFeed');
const getFeed = require('../routes/feed/getFeed');
const queryFeed = require('../routes/feed/queryFeed');

/* PATH '/feed' **/

feedController.get('/', getFeed);
feedController.post('/', adjustFeed);
feedController.post('/search', queryFeed);

module.exports = feedController;