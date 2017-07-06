const request = require("request");
const key = require('./keys.js');
const fs = require("fs");

var arr = [];
for (var i = 3; i < process.argv.length; i++) {
  arr.push(process.argv[i]);
}

var category = process.argv[2];
var name = arr.join("-");

if (category === "movie-this") {
  getMovieData();
} else if (category === "my-tweets") {
  getTweets();
} else if (category === "spotify-this-song") {
  // console.log("name is: " + name);
  getSongData();
} else if (category === "do-what-it-says") {
  getFileData();
  //read the text file and split the values up into category and name
  //based on the category, call that specific function (if else statement)
  // console.log("something stuff");
} else {
  console.log("invalid entry");
}

//functions
function getMovieData() {
  var queryUrl;
  if (name === "") {
    queryUrl = "http://www.omdbapi.com/?apikey=40e9cece&t=Mr-Nobody";
  } else {
    queryUrl = "http://www.omdbapi.com/?apikey=40e9cece&t=" + name;
  }
  request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      //we need the JSON.parse because the body returns a string
      var data = JSON.parse(body);
      console.log("Title: " + data.Title);
      console.log("Year: " + data.Year);
      console.log("IMDB Rating: " + data.imdbRating);
      console.log(data.Ratings["1"].Source + " : " + data.Ratings["1"].Value);
      console.log("Country: " + data.Country);
      console.log("Language: " + data.Language);
      console.log("Plot: " + data.Plot);
      console.log("Actors: " + data.Actors);
    }
  });
}

function getSongData() {
  if (name === "") {
    var queryValue = "ace-of-base";
  }
  else{
    var queryValue = name;
  }
  key.spotifyKeys.search({
    type: 'track',
    query: queryValue
  }, function(err, data) {
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

function getTweets() {
  if (name === "") {
    var params = {
      screen_name: 'ashishuiux'
    };
  } else {
    var params = {
      screen_name: name
    };
  }
  key.twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      if (tweets.length === 0) {
        console.log("this user has 0 tweets");
      }
      for (var i = 0; i < tweets.length; i++) {
        console.log("------------ Tweet Number " + i + " ------------");
        console.log("Date: " + tweets[i].created_at);
        console.log("Tweet: " + tweets[i].text);
      }
    } else {
      throw error
    }
  });
}

function getFileData(){
  fs.readFile("random.txt", "utf8", function(error,data){
    if(error){
      return console.log(error);
    }
    // console.log(data);

    var dataArr = data.split(",");

    category = dataArr[0];
    name = dataArr[1];

    // console.log(category);
    if(category === "spotify-this-song"){
      getSongData();
    }
    else if(category === "movie-this"){
      getMovieData();
    }
    else if(category === "my-tweets"){
      getTweets();
    }
  })
}
// TODO: find song link, not whole album link
// TODO: fix tweet functionality in do what it says
// TODO: append text to a log.txt file
