var request = require("request");

var category = process.argv[2];
var name = process.argv[3];

if(category === "movie-this"){
  if(name === undefined){
    var queryUrl = "http://www.omdbapi.com/?apikey=40e9cece&t=Mr-Nobody";
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
  else{
    var queryUrl = "http://www.omdbapi.com/?apikey=40e9cece&t=" + name;
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
    // console.log("the movie you entered is: "+ name);
  }
}

// NOTE: need to work on twitter, spotify and do-what-it-says
// NOTE: bonus - logging the data in a log.txt
