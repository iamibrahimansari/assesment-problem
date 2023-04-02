const express = require('express');
const router = express.Router();
const {create, getData} = require('../controller/user');

router
    .post('/', create)
    .get('/', getData);

module.exports = {router};
