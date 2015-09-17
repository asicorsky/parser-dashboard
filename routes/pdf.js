/**
 * Created by ASikorsky on 9/15/2015.
 */
var express = require('express');
var router = express.Router();

router.get('/pdf', function(req, res, next) {
    res.sendfile('./views/pdf.html');
});

module.exports = router;