const postController = require('express').Router();
/** post routes */
const archivePost = require('../routes/post/archivePost');
const createPost = require('../routes/post/createPost');
const deletePost = require('../routes/post/deletePost');
const getPost = require('../routes/post/getPost');
const updatePost = require('../routes/post/updatePost');
/** post comments routes */
const deleteComment = require('../routes/post/comments/deleteComment');
const getComments = require('../routes/post/comments/getComments');
const getCommentsCount = require('../routes/post/comments/getCommentsCount');
const postComment = require('../routes/post/comments/postComment');
const queryComments = require('../routes/post/comments/queryComments');
const updateComment = require('../routes/post/comments/updateComment');
/** post comments: rating routes */
const updateCommentRating = require('../routes/post/comments/rating/updateCommentRating');
/** post comments: thread routes */
const createThread = require('../routes/post/comments/thread/createThread');
const deleteThread = require('../routes/post/comments/thread/deleteThread');
const getThread = require('../routes/post/comments/thread/getThread');
/** post rating routes */
const updatePostRating = require('../routes/post/rating/updatePostRating');
/** post thumbnail routes */
const updatePostThumbnail = require('../routes/post/thumbnail/updatePostThumbnail');
/** post  routes */
const updatePostViews = require('../routes/post/views/updatePostViews');

/* PATH '/b/:branch_id/post' **/

postController.post('/:branch_id', createPost);

/* PATH '/b/:branch_id/post/:post_id' **/

postController.get('/:branch_id/:post_id', getPost);
postController.put('/:branch_id/:post_id', updatePost);
postController.patch('/:branch_id/:post_id', archivePost);
postController.delete('/:branch_id/:post_id', deletePost);

postController.post('/:branch_id/:post_id/thumbnail', updatePostThumbnail);
postController.post('/:branch_id/:post_id/rating', updatePostRating);
postController.post('/:branch_id/:post_id/views', updatePostViews);

/* PATH '/b/:branch_id/post/:post_id/comments' **/

postController.get('/:branch_id/:post_id/comments', getComments);
postController.get('/:branch_id/:post_id/comments/count', getCommentsCount);
postController.get('/:branch_id/:post_id/comments/search', queryComments);
postController.post('/:branch_id/:post_id/comments', postComment);
postController.put('/:branch_id/:post_id/comments/:comment_id', updateComment);
postController.delete('/:branch_id/:post_id/comments/:comment_id', deleteComment);

postController.patch('/:branch_id/:post_id/comments/:comment_id', updateCommentRating);

// TODO: implement nested comments
 
/* PATH '/b/:branch_id/post/:post_id/thread/' **/

postController.get('/:branch_id/post/:post_id/thread/:thread_id', getThread);
postController.post('/:branch_id/post/:post_id/thread', createThread);
postController.delete('/:branch_id/post/:post_id/thread/:thread_id', deleteThread);

module.exports = postController;