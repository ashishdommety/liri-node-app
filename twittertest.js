var Twitter = require('node-twitter');

var twitterRestClient = new Twitter.RestClient(
    'hGiigVYOSpXxp1bMOXbD0MVCb',
    'Ev6FqyEu4zKMKUxD4lbV2DasR8fYUMPfyq3QKV9As2krlipm27',
    '880577534177366016-UP2Aj6N05VuVKzQNM8f1I1OueyYiA3z',
    'jFGILkq61fdij3iPyhBQeCOj02QlDWn3ykaQNT174x40q'
);

twitterRestClient.statusesHomeTimeline({}, function(error, result) {
    if (error)
    {
        console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
    }

    if (result)
    {
        console.log(result);
    }
});
