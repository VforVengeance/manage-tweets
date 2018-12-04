# manage-tweet

## installation

    npm install manage-tweets
## Usage

A simple npm project, `manage-tweets`!

```js
var manage = require('manage-tweets');
manage.addTweet("pippo franco", "ciao cari") // create one tweet
console.log(manage.deleteTweetByID(1)); // delete a tweet by id 
console.log(manage.modifyTweetByID(0, "oh come on")); // modify one tweet by id
console.log(manage.findTweetByAuthor("pippo franco")); // search tweet by author
console.log(manage.findTweetByContext("oh come")); //find the context of a tweet description
console.log(manage.getTweets()); //return all tweets
manage.reset(); // reset the tweets

```
