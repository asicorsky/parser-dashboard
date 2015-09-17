var express = require('express');
var router = express.Router();
var phantom = require('phantom');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/print', function (req, res, next) {
    console.log('Process Started...');
    //if input data from UI is empty - use URL from the task
    if (!req.body.urlAddress || req.body.urlAddress === 'http://' || req.body.urlAddress === 'https://') {
        req.body.urlAddress = 'https://almsaeedstudio.com/AdminLTE';
    }
    console.log('URL: ' +req.body.urlAddress);
    phantom.create(function (ph) {
        ph.createPage(function (page) {
            page.open(req.body.urlAddress, function (status) {
                page.set('viewportSize', {width: 1440, height: 900});
                console.log('Status: ' + status);
                var fileName = req.body.urlAddress.replace('://', '_').replace(' ', '_').replace('.', '_').replace('/', '_');
                var serverPath = './public/output/' + fileName + '.pdf';
                console.log('Server path with pdf file: ' + serverPath);
                console.log('Rendering PDF...');
                page.render(serverPath, {format: 'pdf', quality: '100'});
                ph.exit();
                console.log('Process Finished...');
                res.json(serverPath);
            });
        });
    }, {
        dnodeOpts: {weak: false}
    });
});

module.exports = router;
