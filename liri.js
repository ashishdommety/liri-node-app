var request = require("request");
const key = require('./keys.js');

var arr = [];
for(var i = 3; i < process.argv.length;i++){
  arr.push(process.argv[i]);
}

var category = process.argv[2];
var name = arr.join("-");

if(category === "movie-this"){
  if(name === undefined){
    var queryUrl = "http://www.omdbapi.com/?apikey=40e9cece&t=Mr-Nobody";
    getMovieData();
  }
  else{
    var queryUrl = "http://www.omdbapi.com/?apikey=40e9cece&t=" + name;
    getMovieData();
    // console.log("the movie you entered is: "+ name);
  }
}
else if(category === "my-tweets"){
  console.log(key.twitterKeys);
  console.log("tweet stuff");
}
else if(category === "spotify-this-song"){
  console.log("name is: " + name);
  if(name === ""){
    var queryValue = "ace-of-base";
    getSongData();
  }
  else{
    var queryValue = name;
    getSongData();
  }
}
else if(category === "do-what-it-says"){
  console.log("something stuff");
}
else{
  console.log("invalid entry");
}

//functions
function getMovieData(){
  request(queryUrl, function(error, response, body){
    if(!error && response.statusCode === 200){
      //we need the JSON.parse because the body returns a string
      var data = JSON.parse(body);
      console.log("Title: " + data.Title);
      console.log("Year: " + data.Year);
      console.log("IMDB Rating: " + data.imdbRating);
      console.log(data.Ratings["1"].Source +" : "+data.Ratings["1"].Value);
      console.log("Country: " + data.Country);
      console.log("Language: " + data.Language);
      console.log("Plot: " + data.Plot);
      console.log("Actors: " + data.Actors);
    }
  });
}

function getSongData(){
  key.spotifyKeys.search({ type: 'track', query: queryValue }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    //artists name
    console.log("Artist's name: " + data.tracks.items[0].album.artists[0].name);
    //album name
    console.log("Album name: " + data.tracks.items[0].album.name);
    //song name
    console.log("Song name: " + data.tracks.items[0].name);
    //online link to album
    console.log("Link to album: " + data.tracks.items[0].album.external_urls.spotify);
    //online link to band
    console.log("Link to artist's spotify: " + data.tracks.items[0].album.artists[0].external_urls.spotify);
  });
}

// NOTE: need to work on twitter and do-what-it-says
// NOTE: bonus - logging the data in a log.txt
