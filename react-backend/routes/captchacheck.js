const express = require('express');
const router = express.Router();
const got = require('got');

router.post('/', function(req, res, next) {
    (async () => {
        try {
            const response = await got(
                'https://www.google.com/recaptcha/api/siteverify?secret=' +
                '6LdZzkEUAAAAAIR-vFLZ3a8OQc8Ixi03O1diG8dF' +
                '&response=' + req.body.captcha
            ).then(function(response) {
                return res.json({
                    success: JSON.parse(response.body).success
                });
            });
        } catch (error) {
            console.log(error);
        }
    })();
});

module.exports = router;