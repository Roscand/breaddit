const chatController = require('express').Router();
/** chat routes */
const deleteChat = require('../routes/chat/deleteChat');
const getAllChats = require('../routes/chat/getAllChats');
const getChat = require('../routes/chat/getChat');
const queryChat = require('../routes/chat/queryChat');
const searchChats = require('../routes/chat/searchChats');
/** chat message routes */
const removeMessage = require('../routes/chat/message/removeMessage');
const sendMessage = require('../routes/chat/message/sendMessage');
const updateMessage = require('../routes/chat/message/updateMessage');

/* PATH '/chat' **/

chatController.get('/', getAllChats);
chatController.post('/search', searchChats);

/* PATH '/chat/:chat_id' **/

chatController.get('/:chat_id', getChat);
chatController.post('/:chat_id/search', queryChat);
chatController.post('/:chat_id', sendMessage);
chatController.delete('/:chat_id', deleteChat);

chatController.patch('/:chat_id/:message_id', updateMessage);
chatController.delete('/:chat_id/:message_id', removeMessage);

module.exports = chatController;