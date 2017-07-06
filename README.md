# liri-node-app
LIRI is a command line node app that takes in parameters and gives you back data.

## What kind of parameters?
There are four different commands you can make.
They are :
1. my-tweets
2. spotify-this-song
3. movie-this
4. do-what-it-says

After logging into the right directory with the source files, we need to enter the first set of parameters that are common to all:

```
node liri
```

In addition to this, we need to tail this command of with any choice of the four commands below:

### my-tweets
The *my-tweets* command displays the last 20 tweets of a user of your choice.

It's basically followed by the user name of a twitter account of your choice.

So the whole command looks like this:

```
node liri my-tweets *name of twitter account goes here*
```

if no name is entered for the twitter account, it defaults to my twitter account : **ashishuiux**

### spotify-this-song
The *spotify-this-song* command displays details about the song title that you enter.
If no song is entered, it defaults to 'The Sign' by 'Ace of Base'.

The whole command looks like this:

```
node liri spotify-this-song *name of the song goes here*
```

### movie-this
The *movie-this* command displays details about the movie you entered after it.
If no movie is entered, it defaults to the movie 'Mr.Nobody'.

The whole command looks like this:

```
node liri movie-this *name of the movie goes here*
```

### do-what-it-says
The *do-what-it-says* command pulls data from the text file 'random.txt', and makes a request depending on the data in it.

The whole command looks like this:

```
node liri do-what-it-says
```


##Thanks for your time! :)
