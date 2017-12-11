var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
var session_name = 'cas_user';

var bounce = function (req, res, next) {
    if (req.session[session_name]) {
        next();
    }
    else{
        res.sendStatus(401);
    }
}
router.post('/login', function (req, res, next) {
    var userid = req.body.username;
    var pwd = req.body.password;
    if (userid != 'wangyi') {
       res.sendStatus(401);
    }
    else {
        req.session[ session_name ] = 'wangyi';
        res.json({result:'success'});
    }
})

router.get('/logout', function (req, res, next) {
    // Destroy the entire session if the option is set.
    if (this.destroy_session) {
        req.session.destroy(function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
    // Otherwise, just destroy the CAS session variables.
    else {
        delete req.session[ session_name ];
    }
    res.sendStatus(401);
})

module.exports = router;
