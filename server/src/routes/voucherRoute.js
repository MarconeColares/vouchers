'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/voucherController');

router.get('/', controller.list);
router.post('/', controller.create);
router.put('/:codigo', controller.put);
router.delete('/:codigo', controller.delete);

module.exports = router;