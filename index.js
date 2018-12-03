var moment = require('moment');
var tweets = [];
var COUNTER = 0

exports.addTweet = function(author, description){
    var tweet = {
        author: author,
        description: description,
        date:  moment().format("DD/MM/YYYY"),
        id: COUNTER++
    }
    tweets.push(tweet);
}

exports.reset = function(){
    tweets = [];
    COUNTER = 0;
}

exports.deleteTweetByID = function(id){
    for(var i = 0; i < tweets.length; i++){
        if(tweets[i].id === id){
            tweets.splice(i, 1);
            return tweets;
        }
    }
}

exports.modifyTweetByID = function(id, description){
    for(var i = 0; i < tweets.length; i++){
        if(tweets[i].id === id){
            if(tweets[i].description !== description){
                tweets[i].description = description;
                tweets[i].date = moment().format("DD/MM/YYYY");
                return tweets;
            }
        }
    }
}

exports.findTweetByAuthor = function(author){
    var array = [];
    for(var i = 0; i < tweets.length; i++){
        if(tweets[i].author === author){
            array.push(tweets[i]);
        }
    }
    return array;
}

exports.findTweetByContext = function(context){
    var array = [];
    for(var tweet of tweets){
        if(tweet.description.includes(context)){
            array.push(tweet);
        }
    }
    return array;
}

this.reset()