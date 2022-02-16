const express = require('express');
const router = express.Router();
const postsController = require('../controllers/post')

router.get('/', postsController.index);
router.get('/:id',postsController.show);
router.post('/',postsController.create)

module.exports = router
