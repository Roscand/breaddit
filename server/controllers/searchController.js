const searchController = require('express').Router();
/** search routes */
const querySearch = require('../routes/search/querySearch');
const search = require('../routes/search/search');

/* PATH '/search' **/

searchController.post('/', search);
searchController.post('/query', querySearch);

module.exports = searchController;