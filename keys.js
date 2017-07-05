// console.log('keys loaded');

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

exports.twitterKeys = new Twitter({
  consumer_key: 'hGiigVYOSpXxp1bMOXbD0MVCb',
  consumer_secret: 'Ev6FqyEu4zKMKUxD4lbV2DasR8fYUMPfyq3QKV9As2krlipm27',
  access_token_key: '880577534177366016-UP2Aj6N05VuVKzQNM8f1I1OueyYiA3z',
  access_token_secret: 'jFGILkq61fdij3iPyhBQeCOj02QlDWn3ykaQNT174x40q'
});

exports.spotifyKeys = new Spotify({
  id: 'cbd047056e5743649819ea2214c5a416',
  secret: '7fac508acfad415b8048ff6182fb81a7'
});
