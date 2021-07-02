const router = require('express').Router();
const c = require('./controllers/controllers');

router.use('/alert', c.alert);
router.use('/', c.app);
router.use('/auth', c.auth);
router.use('/b', c.branch);
router.use('/chat', c.chat);
router.use('/explore', c.explore);
router.use('/feed', c.feed);
router.use('/mod', c.moderation);
router.use('/notification', c.notification);
router.use('/p', c.post);
router.use('/search', c.search);
router.use('/u', c.user);



module.exports = router;