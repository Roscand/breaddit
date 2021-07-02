const branchController = require('express').Router();
/** branch routes */
const deleteBranch = require('../routes/branch/deleteBranch');
const getBranch = require('../routes/branch/getBranch');
const postBranch = require('../routes/branch/postBranch');
const queryBranch = require('../routes/branch/queryBranch');
const updateBranch = require('../routes/branch/updateBranch');
/** branch stats routes */
const updateBranchStats = require('../routes/branch/stats/updateBranchStats');

/* PATH '/b' **/

branchController.post('/', postBranch);

/* PATH '/b/:branch_id' **/

branchController.get('/:branch_id', getBranch);
branchController.post('/:branch_id/search', queryBranch);
branchController.put('/:branch_id', updateBranch);
branchController.delete('/:branch_id', deleteBranch);

branchController.patch('/:branch_id', updateBranchStats);

module.exports = branchController;