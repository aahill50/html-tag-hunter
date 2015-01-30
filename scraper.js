var webdriverio = require('webdriverio'),
    selenium = require('selenium-standalone'),
    webpage = "http://www.google.com",
    matchesArray,
    matchesString,
    client = {},
    clientOptions = {
        desiredCapabilities: {
            browserName: 'chrome'
        }
    },
    tagMatchRegexp = /<([\w]+\b)[\s>]/gi;

require('./helpers/uniq');

selenium.start(function(err, child) {
    selenium.child = child;
    client = webdriverio.remote(clientOptions)
        .pause(300)
        .init()
        .url(webpage)
        .getHTML('html', function(err, html) {
            matchesArray = html.match(tagMatchRegexp)
                .map(function(match) {
                    return match.slice(1,-1);
                })
                .uniq();

            matchesString = matchesArray.join(", ");

            console.log(matchesArray);
            console.log(matchesString);
        })
        .end()
        .then(function() {
            selenium.child.kill();
        });
});

