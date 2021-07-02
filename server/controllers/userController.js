const userController = require('express').Router();
/** user routes */
const deleteUser = require('../routes/user/deleteUser');
const getUser = require('../routes/user/getUser');
const registerUser = require('../routes/user/registerUser');
const updateUser = require('../routes/user/updateUser');
/** user preferences routes */
const getUserPreferences = require('../routes/user/preferences/getUserPreferences');
const updateUserPreferences = require('../routes/user/preferences/updateUserPreferences');
/** user profile routes */
const getUserProfile = require('../routes/user/profile/getUserProfile');
const updateUserProfile = require('../routes/user/profile/updateUserProfile');
const uploadUserAvatar = require('../routes/user/profile/uploadUserAvatar');
/** user profile routes */
const getUserStatus = require('../routes/user/status/getUserStatus');
const updateUserStatus = require('../routes/user/status/updateUserStatus');

/* PATH '/user' **/

userController.get('/:user_id', getUser);
userController.post('/', registerUser);
userController.put('/:user_id', updateUser);
userController.delete('/:user_id', deleteUser);

/* PATH '/user/preferences' **/

userController.get('/', getUserPreferences);
userController.put('/', updateUserPreferences);

/* PATH '/user/profile' **/

userController.get('/', getUserProfile);
userController.put('/', updateUserProfile);
userController.post('/', uploadUserAvatar);

/* PATH '/user/status' **/

userController.get('/', getUserStatus);
userController.put('/', updateUserStatus);

module.exports = userController;