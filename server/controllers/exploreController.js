const exploreController = require('express').Router();
/** explore routes */
const exploreAll = require('../routes/explore/exploreAll');
const exploreHot = require('../routes/explore/exploreHot');
const explorePopular = require('../routes/explore/explorePopular');
const exploreRecent = require('../routes/explore/exploreRecent');
const queryExplore = require('../routes/explore/queryExplore');

/* PATH '/explore' **/

exploreController.get('/', exploreAll);
exploreController.get('/hot', exploreHot);
exploreController.get('/popular', explorePopular);
exploreController.get('/recent', exploreRecent);
exploreController.post('/search', queryExplore);

module.exports = exploreController;